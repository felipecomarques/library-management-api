import { type Book } from '@entities/book/domain/book'
export class getBook {
  async execute (bookId, bookRepository): Promise<Book> {
    return bookRepository.get(bookId)
  }
}
