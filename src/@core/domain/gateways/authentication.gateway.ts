import { LoginDTO, RegisterDTO } from '@/@core/application/authentication'
import { TokenJwt } from '../entities/authentication'
import { User } from '../entities/user'

export interface AuthenticationGateway {
  login: (dto: LoginDTO) => Promise<TokenJwt>
  register: (dto: RegisterDTO) => Promise<User>
}
