import { Entity } from '@entities/entity'
import { type BookProps } from '@entities/book/book'

export class Book extends Entity<BookProps> {
  constructor (props: BookProps, id?: string) {
    if (props.quantity < 0) {
      throw new Error('Invalid quantity. Cannot have a negative number of books')
    }
    super(props, id)
  }
}
