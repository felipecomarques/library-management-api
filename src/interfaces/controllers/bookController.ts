import type { Express } from 'express'
import { type CreateBook } from '@useCases/book/createBook'

export class bookController {
  constructor (
    readonly server: Express,
    readonly useCase: CreateBook
  ) {
    // server.post('/book', async ({ body }) => {
    //   await useCase.execute()
    // })
  }
}
