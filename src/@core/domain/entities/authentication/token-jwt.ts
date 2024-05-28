export type TokenJwtProps = {
  accessToken: string
  refreshToken: string
}

export class TokenJwt {
  constructor(private props: TokenJwtProps) {}

  get accessToken(): string {
    return this.props.accessToken
  }

  get refreshToken(): string {
    return this.props.refreshToken
  }
}
