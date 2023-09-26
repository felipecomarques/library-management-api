import { type Book } from '@repository/book/bookRepository'
export class getBook {
  async execute (bookId, bookRepository): Promise<Book> {
    return bookRepository.get(bookId)
  }
}
