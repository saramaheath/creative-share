import { db } from "./db";
import { ProjectUpdate, NewProject, Project } from "./types";

export async function getAllUserProjects(userId: number) {
    return await db.selectFrom('projects')
        .where('user_id', '=', userId)
        .selectAll()
        .execute();
}

export async function getProjectById(projectId: number) {
    return await db.selectFrom('projects')
        .where('id', '=', projectId)
        .selectAll()
        .executeTakeFirst();
}

export async function createProject(project: NewProject) {
    return await db.insertInto('projects')
        .values(project)
        .returningAll()
        .executeTakeFirstOrThrow();
}

export async function updateProject(id: number, updateWith: ProjectUpdate) {
    await db.updateTable('projects').set(updateWith).where('id', '=', id).execute();
}

export async function deleteProject(id: number) {
    await db.deleteFrom('projects').where('id', '=', id).execute();
}