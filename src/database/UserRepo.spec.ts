// import { sql } from 'kysely'
// import { db } from './db'
// import * as UserRepo from './UserRepo'
// import { before, after } from 'node:test'

// describe('UserRepo', () => {
//   before(async () => {
//     await db.schema.createTable('user')
//       .addColumn('id', 'serial', (cb) => cb.primaryKey())
//       .addColumn('first_name', 'varchar', (cb) => cb.notNull())
//       .addColumn('last_name', 'varchar')
//       .addColumn('user_name', 'varchar')
//       .addColumn('email', 'varchar')
//       .addColumn('password', 'varchar')
//       .addColumn('profile_img', 'varchar')
//       .addColumn('city', 'varchar')
//       .addColumn('state', 'varchar')
//       .addColumn('country', 'varchar')
//       .addColumn('gender', 'varchar(50)', (cb) => cb.notNull())
//       .addColumn('created_at', 'timestamp', (cb) =>
//         cb.notNull().defaultTo(sql`now()`)
//       )
//       .execute()
//   })
    
//   afterEach(async () => {
//     await sql`truncate table ${sql.table('user')}`.execute(db)
//   })
    
//   after(async () => {
//     await db.schema.dropTable('user').execute()
//   })
    
//   it('should find a user with a given id', async () => {
//     await UserRepo.findUserById(123)
//   })
    
//   it('should find all people named Arnold', async () => {
//     await UserRepo.findPeople({ first_name: 'Arnold' })
//   })
    
//   it('should update gender of a user with a given id', async () => {
//     await UserRepo.updateUser(123, { gender: 'female' })
//   })
    
//   it('should create a user', async () => {
//     await UserRepo.createUser({
//       first_name: 'Jennifer',
//       last_name: 'Aniston',
//       user_name: 'jani',
//       gender: 'female',
//       password: 'secretPassword',
//       email: 'jenann@mail.com',
//       profile_img: 'imgurl',
//       city: 'Chicago',
//       state: 'IL',
//       country: 'USA',
//     })
//   })
    
//   it('should delete a user with a given id', async () => {
//     await UserRepo.deleteUser(123)
//   })
// })