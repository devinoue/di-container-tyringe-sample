import 'reflect-metadata'
import { UseCase } from './UseCase/UseCase'
import { container } from './Controller/Resgistry'

const useCase = container.resolve<UseCase>('UseCase')
console.log(useCase.execute())
