import { type BookRepository } from '@entities/book/repository/bookRepository'
import { type BookProps, type Book } from '@entities/book/domain/book'
import { type useCase } from '@shared/useCase'

type request = BookProps
type response = Book

export class CreateBook implements useCase<request, response> {
  constructor (private readonly repository: BookRepository) {}

  async execute (data: request): Promise<response> {
    const { title, author, published, isbn, deweyClassification, cutterSanborn, pages, quantity } = data

    if (quantity < 0) { throw new Error('Invalid quantity. Cannot have a negative number of books') }

    const res = await this.repository.create(
      { title, author, published, isbn, deweyClassification, cutterSanborn, pages, quantity }
    )

    return res
  }
}
