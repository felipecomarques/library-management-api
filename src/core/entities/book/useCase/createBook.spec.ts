import { type BookRepository } from '@entities/book/domain/bookRepository'
import { CreateBook } from './createBook'
import { Book } from '@entities/book/domain/book'

const mockRepository: BookRepository = {
  create: async (props) => {
    return new Book(props, '1')
  }
}

const createBook = new CreateBook(mockRepository)

describe('Create Book', () => {
  it('should be able to create a book', async () => {
    const bookData = {
      title: 'Crime and Punishment',
      author: 'Fyodor Dostoevsky',
      published: new Date('1866-01-01'),
      isbn: '8573266465',
      deweyClassification: 800,
      cutterSanborn: 'D724c',
      pages: 592,
      quantity: 5
    }

    const createdBook = await createBook.execute(bookData)

    expect(createdBook).toBeDefined()
    expect(createdBook.id).toBeDefined()
    expect(createdBook.props.title).toBe(bookData.title)
    expect(createdBook.props.author).toBe(bookData.author)
  })

  it('cannot create a book with negative quantity', async () => {
    const bookData = {
      title: 'Crime and Punishment',
      author: 'Fyodor Dostoevsky',
      published: new Date('1866-01-01'),
      isbn: '8573266465',
      deweyClassification: 800,
      cutterSanborn: 'D724c',
      pages: 592,
      quantity: -5
    }

    try {
      await createBook.execute(bookData)
      fail('Function did not throw an error for negative quantity')
    } catch (error) {
      expect(error.message).toBe('Invalid quantity. Cannot have a negative number of books')
    }
  })
})
