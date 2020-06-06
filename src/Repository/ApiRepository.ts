import { injectable } from 'tsyringe'
import { IRepository } from '../types'
@injectable()
export class ApiRepository implements IRepository{
    fetch(){
        return "Apiデータ"
    }
}