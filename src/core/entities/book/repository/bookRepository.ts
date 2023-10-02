import { type Book, type BookProps } from '@entities/book/domain/book'

export interface BookRepository {
  create: (props: BookProps) => Promise<Book>
}
