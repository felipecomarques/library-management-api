import { type BookProps } from '@entities/book'
import { Entity } from '@entities/entity'

export class Book extends Entity<BookProps> {
  private constructor (props: BookProps, id?: string) {
    super(props, id)
  }

  static create (props: BookProps, id?: string): Book {
    const book = new Book(props, id)
    return book
  }
}
