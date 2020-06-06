import { injectable, inject } from 'tsyringe'
import { IRepository } from '../types'

@injectable()
export class UseCase {
  constructor(@inject('UserRepository') private repo: IRepository) {}

  execute() {
    return this.repo.fetch()
  }
}
