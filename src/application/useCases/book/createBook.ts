import { type BookProps } from '@entities/book/book'
import { Book } from '@repository/book/bookRepository'

// interface createBookRequest {
//   title: string
//   author: string
//   published: Date
//   isbn: string
//   ddc: number
//   pages: number
//   quantity: number
// }

type createBookRequest = BookProps

type createBookResponse = Book

export class CreateBook {
  async execute ({
    title,
    author,
    published,
    isbn,
    ddc,
    pages,
    quantity
  }: createBookRequest): Promise<createBookResponse> {
    const book = new Book({
      title,
      author,
      published,
      isbn,
      ddc,
      pages,
      quantity
    })
    return book
  }
}
