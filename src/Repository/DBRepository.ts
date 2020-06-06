import { injectable } from 'tsyringe'
import { IRepository } from '../types'

@injectable()
export class DBRepository implements IRepository {
  fetch() {
    return 'DBデータ'
  }
}
