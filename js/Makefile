# run in ../postgres
configure-pg:
	EMCC_CFLAGS="-Wl,--allow-undefined" \
	emconfigure ./configure CFLAGS='-O2' \
		--without-readline \
		--without-zlib \
		--disable-thread-safety \
		--disable-spinlocks \
		--with-system-tzdata=/usr/share/zoneinfo
	bun run ../js/scripts/pg_v_num.ts
	emmake make -C ./src/backend generated-headers 
	rm a.out
	rm -rf tmp_install
	mkdir -p tmp_install/usr/include/server 
	cp -Lr ./src/include/* ./tmp_install/usr/include/server/	


# runs in ../
vector:
	EMCC_CFLAGS="-sSIDE_MODULE=1 -sERROR_ON_UNDEFINED_SYMBOLS=0 -sWARN_ON_UNDEFINED_SYMBOLS=0 -sTOTAL_MEMORY=65536000 -sMODULARIZE=1 -sEXPORT_ES6=1 -sEXPORTED_RUNTIME_METHODS='FS'" \
		emmake make OPTFLAGS="" PG_CONFIG="$(abspath js/pg_config)"


# runs in ../
package:
	rm -rf ./js/dist
	mkdir -p ./js/dist/extension/
	cp ./vector.so ./js/dist/vector.so
	cp ./sql/* ./js/dist/extension
	cp vector.control ./js/dist/extension/vector.control


clean:
	rm -rf ./js/dist
	rm -rf tmp_install
	rm vector.so
	emmake make clean
	emmake make -C ./postgres clean
