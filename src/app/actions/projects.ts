"use server";

import { createProject } from "@/database/ProjectRepo";
import { NewProject } from "../../database/types";
import { requireUser } from "@/lib/auth/require-user";

export async function createProjectAction(formData: FormData) {
    const user = await requireUser();
    
    const post: NewProject = {
        user_id: user.id,
        title: formData.get('title') as string,
        main_img: formData.get('text') as string,
        medium: formData.get('medium') as string
    }

    createProject(post);
}