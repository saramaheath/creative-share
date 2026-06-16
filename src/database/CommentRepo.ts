import { db } from "./db";
import { Comment, NewComment, CommentUpdate } from "./types";

export async function getCommentsByPostId(postId: number) {
    return await db.selectFrom('comments')
        .where('post_id', '=', postId)
        .selectAll()
        .execute();
}

export async function createComment(comment: NewComment) {
    return await db.insertInto('comments')
        .values(comment)
        .returningAll()
        .executeTakeFirstOrThrow();
}

export async function updateComment(id: number, updateWith: CommentUpdate) {
    await db.updateTable('comments').set(updateWith).where('id', '=', id).execute();
}

export async function deleteComment(id: number) {
    await db.deleteFrom('comments').where('id', '=', id).execute();
}
