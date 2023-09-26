import { Entity } from '@entities/entity'
import { type UserProps } from '@entities/users/user'

export class User extends Entity<UserProps> {
  constructor (props: UserProps, id?: string) {
    if (props.name == null) {
      throw new Error('Invalid name')
    }
    super(props, id)
  }
}
