import { Kysely, sql } from "kysely";
import { db } from "./db";
import { createUser } from "./UserRepo";
import { Database, NewUser } from "./types";

async function runUsersTable(db: Kysely<Database>): Promise<void> {
    await db.schema.createTable('users')
    .addColumn('id', 'serial', (col) => col.primaryKey())
    .addColumn('first_name', 'varchar', (col) => col.notNull())
    .addColumn('last_name', 'varchar')
    .addColumn('username', 'varchar', (col) => col.notNull().unique())
    .addColumn('username_display', 'varchar', (col) => col.notNull().unique())
    .addColumn('email', 'varchar')
    .addColumn('password', 'varchar')
    .addColumn('profile_img', 'varchar')
    .addColumn('city', 'varchar')
    .addColumn('state', 'varchar')
    .addColumn('country', 'varchar')
    .addColumn('gender', 'varchar(50)', (col) => col.notNull())
    .addColumn('created_at', 'timestamp', (col) =>
      col.defaultTo(sql`now()`).notNull()
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

async function runPostsTable(db: Kysely<Database>): Promise<void> {
  await db.schema.createTable('posts')
  .addColumn('id', 'serial', (col) => col.primaryKey())
  .addColumn('user_id', 'integer', (col) => col.references('users.id').onDelete('cascade').notNull(),)
  .addColumn('title', 'varchar')
  .addColumn('text', 'varchar')
  .addColumn('type', 'varchar(50)')
  .addColumn('created_at', 'timestamp', (col) =>
    col.defaultTo(sql`now()`).notNull(),
  )
  .execute();
}

async function runCommentsTable(db: Kysely<Database>): Promise<void> {
  await db.schema.createTable('comments')
  .addColumn('id', 'serial', (col) => col.primaryKey())
  .addColumn('post_id', 'integer', (col) => col.references('posts.id').onDelete('cascade').notNull(),)
  .addColumn('user_id', 'integer', (col) => col.references('users.id').onDelete('cascade').notNull(),)
  .addColumn('text', 'varchar')
  .addColumn('created_at', 'timestamp', (col) =>
    col.defaultTo(sql`now()`).notNull(),
  )
  .execute();
}

async function runPostLikesTable(db: Kysely<Database>): Promise<void> {
  await db.schema.createTable('post_likes')
  .addColumn('id', 'serial', (col) => col.primaryKey())
  .addColumn('post_id', 'integer', (col) => col.references('posts.id').onDelete('cascade').notNull(),)
  .addColumn('user_id', 'integer', (col) => col.references('users.id').onDelete('cascade').notNull(),)
  .addColumn('soft_delete', 'boolean', (col) => col.defaultTo(false).notNull(),)
  .execute();
}

async function runCommentLikesTable(db: Kysely<Database>): Promise<void> {
  await db.schema.createTable('comment_likes')
  .addColumn('id', 'serial', (col) => col.primaryKey())
  .addColumn('comment_id', 'integer', (col) => col.references('comments.id').onDelete('cascade').notNull(),)
  .addColumn('user_id', 'integer', (col) => col.references('users.id').onDelete('cascade').notNull(),)
  .addColumn('soft_delete', 'boolean', (col) => col.defaultTo(false).notNull(),)
  .execute();
}

async function runProjectLikesTable(db: Kysely<Database>): Promise<void> {
  await db.schema.createTable('project_likes')
  .addColumn('id', 'serial', (col) => col.primaryKey())
  .addColumn('project_id', 'integer', (col) => col.references('projects.id').onDelete('cascade').notNull(),)
  .addColumn('user_id', 'integer', (col) => col.references('users.id').onDelete('cascade').notNull(),)
  .addColumn('soft_delete', 'boolean', (col) => col.defaultTo(false).notNull(),)
  .execute();
}

async function runProjectRelationships(db: Kysely<Database>): Promise<void> {
  await db.schema
    .createIndex('project_user_id_index')
    .on('projects')
    .column('user_id')
    .execute()

  await db.schema
    .createIndex('project_like_project_id_index')
    .on('project_likes')
    .column('project_id')
    .execute()

  await db.schema
    .createIndex('project_like_user_id_index')
    .on('project_likes')
    .column('user_id')
    .execute()
}

async function runPostRelationships(db: Kysely<Database>): Promise<void> {
  await db.schema
    .createIndex('post_user_id_index')
    .on('posts')
    .column('user_id')
    .execute()

  await db.schema
    .createIndex('post_like_post_id_index')
    .on('post_likes')
    .column('post_id')
    .execute()

  await db.schema
    .createIndex('post_like_user_id_index')
    .on('post_likes')
    .column('user_id')
    .execute()
}

async function runCommentRelationships(db: Kysely<Database>): Promise<void> {
  await db.schema
    .createIndex('comment_post_id_index')
    .on('comments')
    .column('post_id')
    .execute()

  await db.schema
    .createIndex('comment_user_id_index')
    .on('comments')
    .column('user_id')
    .execute()

  await db.schema
    .createIndex('comment_like_comment_id_index')
    .on('comment_likes')
    .column('comment_id')
    .execute()

  await db.schema
    .createIndex('comment_like_user_id_index')
    .on('comment_likes')
    .column('user_id')
    .execute()
}

async function runRelationships(db: Kysely<Database>): Promise<void> {
  await runProjectRelationships(db);
  await runPostRelationships(db);
  await runCommentRelationships(db);
}

export async function dropTable(db: Kysely<Database>): Promise<void> {
  await db.schema.dropTable('users').ifExists().execute();
}

async function seedSampleUser(): Promise<void> {
  const saraUser: NewUser = {
    first_name: 'Sara',
    last_name: 'Heath',
    username: 'sara',
    username_display: 'Sara Heath',
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

  console.log('Creating posts table...');
  await runPostsTable(db);

  console.log('Creating comments table...');
  await runCommentsTable(db);

  console.log('Creating post_likes table...');
  await runPostLikesTable(db);

  console.log('Creating comment_likes table...');
  await runCommentLikesTable(db);

  console.log('Creating project_likes table...');
  await runProjectLikesTable(db); 

  console.log('Creating relationship indexes...');
  await runRelationships(db);

  console.log('Seeding sample user...');
  await seedSampleUser();

  await db.destroy();
}

void runMigrations();