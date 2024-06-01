import * as fs from "fs";

const pg_config_h_path = new URL("../../postgres/src/include/pg_config.h", import.meta.url);

let pg_config_h = fs.readFileSync(pg_config_h_path, "utf-8");

pg_config_h = pg_config_h.replace("PG_VERSION_NUM 15", "PG_VERSION_NUM 14");

fs.writeFileSync(pg_config_h_path, pg_config_h);
