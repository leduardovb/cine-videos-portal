import { AuthenticationGateway, CacheGateway } from '@/@core/domain/gateways'
import moment from 'moment'

export type LoginDTO = {
  email: string
  password: string
}

const TOKEN_KEY = process.env.NEXT_PUBLIC_TOKEN_KEY as string
const REFRESH_TOKEN_KEY = process.env.NEXT_PUBLIC_REFRESH_TOKEN_KEY as string

const TOKEN_EXPIRES = moment.duration(7, 'days').asMilliseconds()
const REFRESH_TOKEN_EXPIRES = moment.duration(14, 'days').asMilliseconds()

export class LoginUseCase {
  constructor(
    private readonly authenticationGateway: AuthenticationGateway,
    private readonly cacheGateway: CacheGateway
  ) {}

  async execute(dto: LoginDTO) {
    const token = await this.authenticationGateway.login(dto)
    await this.cacheGateway.set(TOKEN_KEY, token.accessToken, {
      expires: new Date(Date.now() + TOKEN_EXPIRES),
      httpOnly: true,
    })
    await this.cacheGateway.set(REFRESH_TOKEN_KEY, token.refreshToken, {
      expires: new Date(Date.now() + REFRESH_TOKEN_EXPIRES),
      httpOnly: true,
    })
    return token
  }
}
