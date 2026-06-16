import {
    ColumnType,
    Generated,
    Insertable,
    Selectable,
    Updateable,
  } from 'kysely'
  
  export interface Database {
    users: UsersTable
    projects: ProjectsTable
    posts: PostsTable
    comments: CommentsTable
    post_likes: PostLikesTable
    comment_likes: CommentLikesTable
    project_likes: ProjectLikesTable
  }
  
  export interface UsersTable {
    id: Generated<number>
    username: string
    username_display: string
    first_name: string
    last_name: string | null
    gender: 'male' | 'female' | 'non-binary' | ''
    created_at: ColumnType<Date, string | undefined, never>
    email: string
    password: string
    profile_img: string
    city: string | null
    state: string | null
    country: string | null

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
  
  export type User = Selectable<UsersTable>
  export type NewUser = Insertable<UsersTable>
  export type UserUpdate = Updateable<UsersTable>
  
  export interface ProjectsTable {
    id: Generated<number>
    user_id: number
    title: string
    main_img: string
    medium: string
  }
  
  export type Project = Selectable<ProjectsTable>
  export type NewProject = Insertable<ProjectsTable>
  export type ProjectUpdate = Updateable<ProjectsTable>

  export interface PostsTable {
    id: Generated<number>
    user_id: number
    title: string
    text: string
    type: 'profile' | 'community'
    created_at: ColumnType<Date, string | undefined, never>
  }
  
  export type Post = Selectable<PostsTable>
  export type NewPost = Insertable<PostsTable>
  export type PostUpdate = Updateable<PostsTable>

  export interface CommentsTable {
    id: Generated<number>
    post_id: number
    user_id: number
    text: string,
    created_at: ColumnType<Date, string | undefined, never>
  }
  
  export type Comment = Selectable<CommentsTable>
  export type NewComment = Insertable<CommentsTable>
  export type CommentUpdate = Updateable<CommentsTable>

  export interface PostLikesTable {
    id: Generated<number>
    post_id: number
    user_id: number
    soft_delete: boolean
  }

  export type PostLike = Selectable<PostLikesTable>
  export type NewPostLike = Insertable<PostLikesTable>
  export type PostLikeUpdate = Updateable<PostLikesTable>

  export interface CommentLikesTable {
    id: Generated<number>
    comment_id: number
    user_id: number
    soft_delete: boolean
  }

  export type CommentLike = Selectable<CommentLikesTable>
  export type NewCommentLike = Insertable<CommentLikesTable>
  export type CommentLikeUpdate = Updateable<CommentLikesTable>

  export interface ProjectLikesTable {
    id: Generated<number>
    project_id: number
    user_id: number
    soft_delete: boolean
  } 
  
  export type ProjectLike = Selectable<ProjectLikesTable>
  export type NewProjectLike = Insertable<ProjectLikesTable>
  export type ProjectLikeUpdate = Updateable<ProjectLikesTable>

