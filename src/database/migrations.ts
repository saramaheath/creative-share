import { FileMigrationProvider, Kysely, Migrator, sql } from "kysely";
import * as path from "path";
import { promises as fs } from "fs";
import { db } from "./db";
import { createUser } from "./UserRepo";
import { NewUser } from "./types";

async function runUsersTable(db: Kysely<any>): Promise<void> {
    await db.schema.createTable('users')
    .addColumn('id', 'serial', (col) => col.primaryKey())
    .addColumn('first_name', 'varchar', (col) => col.notNull())
    .addColumn('last_name', 'varchar')
    .addColumn('user_name', 'varchar')
    .addColumn('email', 'varchar')
    .addColumn('password', 'varchar')
    .addColumn('profile_img', 'varchar')
    .addColumn('city', 'varchar')
    .addColumn('state', 'varchar')
    .addColumn('country', 'varchar')
    .addColumn('gender', 'varchar(50)', (col) => col.notNull())
    .addColumn('created_at', 'timestamp', (col) =>
      col.defaultTo(sql`now()`).notNull(),
    )
    .execute();
}

async function runProjectsTable(db: Kysely<any>): Promise<void> {
  await db.schema.createTable('projects')
  .addColumn('id', 'serial', (col) => col.primaryKey())
  .addColumn('user_id', 'integer', (col) => col.references('users.id').onDelete('cascade').notNull(),)
  .addColumn('title', 'varchar')
  .addColumn('main_img', 'varchar')
  .addColumn('medium', 'varchar')
  .addColumn('created_at', 'timestamp', (col) =>
    col.defaultTo(sql`now()`).notNull(),
  )
  .execute();
}

async function runRelationships(db: Kysely<any>): Promise<void> {
  await db.schema
    .createIndex('project_user_id_index')
    .on('projects')
    .column('user_id')
    .execute()
}

export async function dropTable(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable('user').execute();
}

//dropTable(db);
//runUsersTable(db);
//runProjectsTable(db);
//runRelationships(db);
const saraUser:NewUser = {
first_name: '',
last_name: '',
user_name: '',
email: '',
password: '',
profile_img: '',
city: '',
state: '',
country: '',
gender: 'non-binary'
};

createUser(saraUser);
// export async function executeMigration() {
//   const migrator = new Migrator({
//     db,
//     provider: new FileMigrationProvider({
//       fs,
//       path,
//       migrationFolder: path.join(__dirname, "../database"),
//     }),
//   });

//   const { error, results } = await migrator.migrateToLatest();

//   console.log(results, error, migrator, db);

//   results?.forEach((it) => {
//     if (it.status === "Success") {
//       console.log(`migration "${it.migrationName}" was executed successfully`);
//     } else if (it.status === "Error") {
//       console.error(`failed to execute migration "${it.migrationName}"`);
//     }
//   });

//   if (error) {
//     console.error("failed to migrate");
//     console.error(error);
//     process.exit(1);
//   }

//   await db.destroy();
// }

// executeMigration();


