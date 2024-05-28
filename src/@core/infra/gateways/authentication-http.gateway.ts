import { LoginDTO } from '@/@core/application/authentication'
import { TokenJwt, TokenJwtProps } from '@/@core/domain/entities/authentication'
import { User, UserProps } from '@/@core/domain/entities/user'
import { AuthenticationGateway, HttpGateway } from '@/@core/domain/gateways'

export class AuthenticationHttpGateway implements AuthenticationGateway {
  constructor(private readonly http: HttpGateway) {}

  async login(dto: LoginDTO): Promise<TokenJwt> {
    return await this.http
      .request<TokenJwtProps>({
        body: dto,
        method: 'POST',
        url: '/auth/login',
      })
      .then((response) => new TokenJwt(response))
  }

  async register(dto: LoginDTO): Promise<User> {
    return await this.http
      .request<UserProps>({
        body: dto,
        method: 'POST',
        url: '/auth/register',
      })
      .then((response) => new User(response))
  }
}
