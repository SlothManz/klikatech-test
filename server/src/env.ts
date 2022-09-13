import {EnvType, load} from "ts-dotenv";

export type Env = EnvType<typeof schema>;

export const schema = {
  APP_PORT: 5000,
  DB_TYPE: "mysql",
  DB_HOST: "localhost",
  DB_NAME: "test_app",
  DB_USER: "root",
  DB_PASSWORD: 12345678,
  DB_PORT: 3306,
};

export function loadEnd(): void {
  env = load(schema);
}

