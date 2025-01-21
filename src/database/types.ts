import {
    ColumnType,
    Generated,
    Insertable,
    JSONColumnType,
    Selectable,
    Updateable,
  } from 'kysely'
  
  export interface Database {
    user: UserTable
    project: ProjectTable
    post: PostTable
  }
  
  // This interface describes the `user` table to Kysely. Table
  // interfaces should only be used in the `Database` type above
  // and never as a result type of a query!. See the `user`,
  // `NewUser` and `UserUpdate` types below.
  export interface UserTable {
    // Columns that are generated by the database should be marked
    // using the `Generated` type. This way they are automatically
    // made optional in inserts and updates.
    id: Generated<number>
    user_name: string
    first_name: string
    
    // If the column is nullable in the database, make its type nullable.
    // Don't use optional properties. Optionality is always determined
    // automatically by Kysely.
    last_name: string | null
    gender: 'male' | 'female' | 'non-binary'
  
    // You can specify a different type for each operation (select, insert and
    // update) using the `ColumnType<SelectType, InsertType, UpdateType>`
    // wrapper. Here we define a column `created_at` that is selected as
    // a `Date`, can optionally be provided as a `string` in inserts and
    // can never be updated:
    created_at: ColumnType<Date, string | undefined, never>
    email: string
    password: string
    profile_img: string
    city: string
    state: string
    country: string

  
    // You can specify JSON columns using the `JSONColumnType` wrapper.
    // It is a shorthand for `ColumnType<T, string, string>`, where T
    // is the type of the JSON object/array retrieved from the database,
    // and the insert and update types are always `string` since you're
    // always stringifying insert/update values.
    // metadata: JSONColumnType<{
    //   login_at: string
    //   ip: string | null
    //   agent: string | null
    //   plan: 'free' | 'premium'
    // }>
  }
  
  // You should not use the table schema interfaces directly. Instead, you should
  // use the `Selectable`, `Insertable` and `Updateable` wrappers. These wrappers
  // make sure that the correct types are used in each operation.
  //
  // Most of the time you should trust the type inference and not use explicit
  // types at all. These types can be useful when typing function arguments.
  export type User = Selectable<UserTable>
  export type NewUser = Insertable<UserTable>
  export type UserUpdate = Updateable<UserTable>
  
  export interface ProjectTable {
    id: Generated<number>
    user_id: number
    title: string
    main_img: string
    medium: string
  }
  
  export type Project = Selectable<ProjectTable>
  export type NewProject = Insertable<ProjectTable>
  export type ProjectUpdate = Updateable<ProjectTable>

  export interface PostTable {
    id: Generated<number>
    user_id: number
    title: string
    text: string
    type: 'profile' | 'community'
  }
  
  export type Post = Selectable<PostTable>
  export type NewPost = Insertable<PostTable>
  export type PostUpdate = Updateable<PostTable>