import { FileMigrationProvider, Kysely, Migrator, sql } from "kysely";
import path from "path";
import { promises as fs } from "fs";
import { db } from "./db";

export async function up(db: Kysely<any>): Promise<void> {
    await db.schema.createTable('user')
    .addColumn('id', 'serial', (cb) => cb.primaryKey())
    .addColumn('first_name', 'varchar', (cb) => cb.notNull())
    .addColumn('last_name', 'varchar')
    .addColumn('user_name', 'varchar')
    .addColumn('email', 'varchar')
    .addColumn('password', 'varchar')
    .addColumn('profile_img', 'varchar')
    .addColumn('city', 'varchar')
    .addColumn('state', 'varchar')
    .addColumn('country', 'varchar')
    .addColumn('gender', 'varchar(50)', (cb) => cb.notNull())
    .addColumn('created_at', 'timestamp', (cb) =>
      cb.notNull().defaultTo(sql`now()`)
    )
    .execute();
}


export async function executeMigration() {
  const migrator = new Migrator({
    db,
    provider: new FileMigrationProvider({
      fs,
      path,
      migrationFolder: path.join(__dirname, "../database"),
    }),
  });

  const { error, results } = await migrator.migrateToLatest();

  results?.forEach((it) => {
    if (it.status === "Success") {
      console.log(`migration "${it.migrationName}" was executed successfully`);
    } else if (it.status === "Error") {
      console.error(`failed to execute migration "${it.migrationName}"`);
    }
  });

  if (error) {
    console.error("failed to migrate");
    console.error(error);
    process.exit(1);
  }

  await db.destroy();
}

executeMigration();


