import { AuthenticationGateway } from '@/@core/domain/gateways'

export type RegisterDTO = {
  email: string
  password: string
  ownerName: string
  ownerLastName: string
  ownerBirthDate: string
}

export class RegisterUseCase {
  constructor(private readonly authenticationGateway: AuthenticationGateway) {}

  async execute(dto: RegisterDTO) {
    return await this.authenticationGateway.register(dto)
  }
}
