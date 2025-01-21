import { Database } from './types';
import { Pool } from 'pg';
import { Kysely, PostgresDialect } from 'kysely';

import * as dotenv from "dotenv";
dotenv.config({ path: ".env" });

const dialect = new PostgresDialect({
    pool: new Pool({
        database: '',
        host: '',
        user: '',
        password: '',
        port: '',
        max: '',
    })
})

export const db = new Kysely<Database>({
    dialect,
  })