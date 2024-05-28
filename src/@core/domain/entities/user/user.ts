import { ProfileProps } from './profile'

export type UserProps = {
  id: string
  email: string
  ownerName: string
  ownerLastName: string
  ownerBirthDate: string
  profiles: Array<ProfileProps>
}

export class User {
  constructor(private props: UserProps) {}

  get id(): string {
    return this.props.id
  }

  get email(): string {
    return this.props.email
  }

  get ownerName(): string {
    return this.props.ownerName
  }

  get ownerLastName(): string {
    return this.props.ownerLastName
  }

  get ownerBirthDate(): string {
    return this.props.ownerBirthDate
  }

  get profiles(): Array<ProfileProps> {
    return this.props.profiles
  }
}
