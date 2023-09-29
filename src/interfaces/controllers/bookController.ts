import type { Express } from 'express'
// import { CreateBook } from 'src/application/useCases/book/createBook'

export class bookController {
  constructor (
    readonly server: Express
  ) {}
}
