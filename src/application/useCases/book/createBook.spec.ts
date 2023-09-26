import { Book } from '@repository/book/bookRepository'
import { CreateBook } from './createBook'

describe('Create Book', () => {
  it('should be able to create a book', async () => {
    const createBook = new CreateBook()
    const bookProps = {
      title: 'Crime and Punishment',
      author: 'Fyodor Dostoevsky',
      published: new Date('1866-01-01'),
      isbn: '8573266465',
      ddc: 800,
      pages: 592,
      quantity: 5
    }
    await expect(createBook.execute(bookProps))
      .resolves.toBeInstanceOf(Book)
  })

  it('cannot create a book with negative quantity', async () => {
    const createBook = new CreateBook()
    const bookProps = {
      title: 'Crime and Punishment',
      author: 'Fyodor Dostoevsky',
      published: new Date('1866-01-01'),
      isbn: '8573266465',
      ddc: 800,
      pages: 592,
      quantity: -1
    }

    await expect(createBook.execute(bookProps))
      .rejects.toThrowError('Invalid quantity. Cannot have a negative number of books')
  })
})
