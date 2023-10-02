import { Entity } from '@shared/entity'

export interface BookProps {
  title: string
  author: string
  published: Date
  isbn: string
  deweyClassification: number
  cutterSanborn: string
  pages: number
  quantity: number
}

export class Book extends Entity<BookProps> {
  constructor (props: BookProps, id?: string) {
    if (props.quantity < 0) {
      throw new Error('Invalid quantity. Cannot have a negative number of books')
    }
    super(props, id)
  }
}
