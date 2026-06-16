import { db } from "./db";
import { Post, NewPost, PostUpdate } from "./types";

export async function getPostsByUserId(userId: number) {
    return await db.selectFrom('posts')
        .where('user_id', '=', userId)
        .selectAll()
        .execute();
}

export async function getPostById(postId: number) {
    return await db.selectFrom('posts')
        .where('id', '=', postId)
        .selectAll()
        .executeTakeFirst();
}

export async function createPost(post: NewPost) {
    return await db.insertInto('posts')
        .values(post)
        .returningAll()
        .executeTakeFirstOrThrow();
}

export async function updatePost(id: number, updateWith: PostUpdate) {
    await db.updateTable('posts').set(updateWith).where('id', '=', id).execute();
}

export async function deletePost(id: number) {
    await db.deleteFrom('posts').where('id', '=', id).execute();
}