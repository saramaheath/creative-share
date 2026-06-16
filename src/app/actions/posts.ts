"use server";

import { createPost } from "@/database/PostRepo";
import { NewPost } from "../../database/types";
import { requireUser } from "@/lib/auth/require-user";

export async function createPostAction(formData: FormData) {
    const user = await requireUser();
    
    const post: NewPost = {
        user_id: user.id,
        title: formData.get('title') as string,
        text: formData.get('text') as string,
        type: 'profile'
    }

    createPost(post);
}

