import { UserRolesEnum } from 'src/infrastructure/enums/user-roles.enum'
import { CreateUserDto } from 'src/users/dto/create-user.dto'

export const usersSeedData: CreateUserDto[] = [
  {
    username: 'super_admin',
    password: 'e3UAbQO0vg08ROe7PGj9V6Ur7447tRBV',
    role: UserRolesEnum.SuperAdmin,
  },
  {
    username: 'admin_1',
    password: '0yG07VYvzVJdGk1ZWg7aBVGvguVjHcJ8',
    role: UserRolesEnum.Admin,
  },
]
