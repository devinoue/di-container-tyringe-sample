import { container } from 'tsyringe'
import { DBRepository } from '../Repository/DBRepository'
import { UseCase } from '../UseCase/UseCase'

container.register('UserRepository', { useClass: DBRepository })
container.register<UseCase>('UseCase', { useClass: UseCase })

export { container }
