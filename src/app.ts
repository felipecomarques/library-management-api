import express from 'express'
import { router } from '@routes/routes'
import { PrismaClient, type Book, type Librarian } from '@prisma/client'

const app = express()
const port = 3000
const prisma = new PrismaClient()
async function createLibrarian (): Promise<Librarian> {
  try {
    const lib = await prisma.librarian.create({
      data: {
        name: 'Felipe Marques',
        password: '123',
        email: 'wow@wow.com'
      }
    })
    return lib
  } catch (error) {
    console.error('Erro ao criar o livro:', error)
    throw error // Re-throw o erro para tratamento posterior, se necessário.
  } finally {
    await prisma.$disconnect()
  }
}
createLibrarian()
  .then((book) => {
    console.log('Livro criado:', book)
  })
  .catch((error) => {
    console.error('Erro geral:', error)
  })
async function createBook (): Promise<Book> {
  try {
    const book = await prisma.book.create({
      data: {
        title: 'Crime and Punishment',
        author: 'Fyodor Dostoevsky',
        published: new Date('1866-01-01T00:00:00.000Z'),
        isbn: '8573266465',
        ddc: 800,
        pages: 592,
        quantity: 5
      }
    })
    return book
  } catch (error) {
    console.error('Erro ao criar o livro:', error)
    throw error // Re-throw o erro para tratamento posterior, se necessário.
  } finally {
    await prisma.$disconnect()
  }
}
createBook()
  .then((book) => {
    console.log('Livro criado:', book)
  })
  .catch((error) => {
    console.error('Erro geral:', error)
  })

app.use(router)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
