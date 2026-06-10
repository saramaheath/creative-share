import { Kysely, sql } from "kysely";
import { db } from "./db";
import { createUser } from "./UserRepo";
import { Database, NewUser } from "./types";

async function runUsersTable(db: Kysely<Database>): Promise<void> {
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

async function runProjectsTable(db: Kysely<Database>): Promise<void> {
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

async function runRelationships(db: Kysely<Database>): Promise<void> {
  await db.schema
    .createIndex('project_user_id_index')
    .on('projects')
    .column('user_id')
    .execute()
}

export async function dropTable(db: Kysely<Database>): Promise<void> {
  await db.schema.dropTable('users').ifExists().execute();
}

async function seedSampleUser(): Promise<void> {
  const saraUser: NewUser = {
    first_name: 'Sara',
    last_name: 'Heath',
    user_name: 'sara',
    email: 'sara@example.com',
    password: 'changeme',
    profile_img: '',
    city: 'Unknown',
    state: 'Unknown',
    country: 'Unknown',
    gender: 'non-binary',
  };

  await createUser(saraUser);
}

export async function runMigrations(): Promise<void> {
  console.log('Creating users table...');
  await runUsersTable(db);

  console.log('Creating projects table...');
  await runProjectsTable(db);

  console.log('Creating project index...');
  await runRelationships(db);

  console.log('Seeding sample user...');
  await seedSampleUser();

  await db.destroy();
}

void runMigrations();


