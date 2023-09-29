export interface useCase<req, res> {
  execute: (input: req) => Promise<res>
}
