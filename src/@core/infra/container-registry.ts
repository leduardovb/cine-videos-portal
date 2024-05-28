import { Container } from 'inversify'
import { http } from './http'
import {
  AuthenticationHttpGateway,
  AxiosHttpGateway,
  CookiesGateway,
} from './gateways'
import { LoginUseCase, RegisterUseCase } from '../application/authentication'

export const Registry = {
  AxiosAdapter: Symbol.for('AxiosAdapter'),

  AxiosGateway: Symbol.for('AxiosGateway'),
  CookiesGateway: Symbol.for('CookiesGateway'),
  AuthenticationGateway: Symbol.for('AuthenticationGateway'),

  LoginUseCase: Symbol.for('LoginUseCase'),
  RegisterUseCase: Symbol.for('RegisterUseCase'),
}

export const container = new Container()

container.bind(Registry.AxiosAdapter).toConstantValue(http)

container
  .bind(Registry.AxiosGateway)
  .toDynamicValue(
    ({ container }) =>
      new AxiosHttpGateway(container.get(Registry.AxiosAdapter))
  )
container
  .bind(Registry.CookiesGateway)
  .toDynamicValue(() => new CookiesGateway())
container
  .bind(Registry.AuthenticationGateway)
  .toDynamicValue(
    ({ container }) =>
      new AuthenticationHttpGateway(container.get(Registry.AxiosGateway))
  )

container
  .bind(Registry.LoginUseCase)
  .toDynamicValue(
    ({ container }) =>
      new LoginUseCase(
        container.get(Registry.AuthenticationGateway),
        container.get(Registry.CookiesGateway)
      )
  )
container
  .bind(Registry.RegisterUseCase)
  .toDynamicValue(
    ({ container }) =>
      new RegisterUseCase(container.get(Registry.AuthenticationGateway))
  )
