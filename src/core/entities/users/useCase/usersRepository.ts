import { Entity } from '@shared/entity'
import { type UserProps } from '@entities/user/domain/user'

export class User extends Entity<UserProps> {
  constructor (props: UserProps, id?: string) {
    if (props.name == null) {
      throw new Error('Invalid name')
    }
    super(props, id)
  }
}
