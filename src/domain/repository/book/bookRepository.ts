import { type Book, type BookProps } from '@entities/book/book'

export interface BookRepository {
  create: (props: BookProps) => Promise<Book>
}
