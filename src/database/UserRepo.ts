import { db } from './db'
import { UserUpdate, User, NewUser } from './types'

export async function findUserById(id: number) {
  return await db.selectFrom('users')
    .where('id', '=', id)
    .selectAll()
    .executeTakeFirst()
}

export async function findPeople(criteria: Partial<User>) {
  let query = db.selectFrom('users')

  if (criteria.id) {
    query = query.where('id', '=', criteria.id) // Kysely is immutable, you must re-assign!
  }

  if (criteria.first_name) {
    query = query.where('first_name', '=', criteria.first_name)
  }

  if (criteria.last_name !== undefined) {
    query = query.where(
      'last_name',
      criteria.last_name === null ? 'is' : '=',
      criteria.last_name
    )
  }

  if (criteria.gender) {
    query = query.where('gender', '=', criteria.gender)
  }

  if (criteria.created_at) {
    query = query.where('created_at', '=', criteria.created_at)
  }

  return await query.selectAll().execute()
}

export async function updateUser(id: number, updateWith: UserUpdate) {
  await db.updateTable('users').set(updateWith).where('id', '=', id).execute()
}

export async function createUser(user: NewUser) {
  return await db.insertInto('users')
    .values(user)
    .returningAll()
    .executeTakeFirstOrThrow()
}

export async function deleteUser(id: number) {
  return await db.deleteFrom('users').where('id', '=', id)
    .returningAll()
    .executeTakeFirst()
}