import { RegisterFactory } from '@/main/factories/pages'
import {
  FormButton,
  FormDatePicker,
  FormError,
  FormInput,
} from '@/presentation/components/form'
import { Label } from '@/presentation/components/ui/label'
import Link from 'next/link'

export default function RegisterPage() {
  return (
    <div>
      <RegisterFactory>
        <h3 className="text-lg font-bold mb-4">Informações pessoais</h3>
        <section>
          <div className="relative">
            <Label htmlFor="name">Nome</Label>
            <FormInput
              id="name"
              name="name"
              placeholder="Informe seu nome"
              aria-label="Informe seu nome"
              aria-required="true"
            />
            <FormError name="name" />
          </div>
          <div className="relative mt-4">
            <Label htmlFor="lastName">Sobrenome</Label>
            <FormInput
              id="lastName"
              name="lastName"
              placeholder="Informe seu sobrenome"
              aria-label="Informe seu sobrenome"
              aria-required="true"
            />
            <FormError name="lastName" />
          </div>
          <div className="relative mt-4">
            <Label htmlFor="birthDate">Data de nascimento</Label>
            <FormDatePicker
              id="birthDate"
              name="birthDate"
              placeholder="Informe sua data de nascimento"
            />
            <FormError name="birthDate" />
          </div>
        </section>

        <h3 className="text-lg font-bold mt-8 mb-4">Informações da conta</h3>
        <section>
          <div className="relative">
            <Label htmlFor="email">Email</Label>
            <FormInput
              id="email"
              name="email"
              type="email"
              placeholder="Informe seu e-mail"
              aria-label="Informe seu e-mail"
              aria-required="true"
            />
            <FormError name="email" />
          </div>
          <div className="relative mt-4">
            <Label htmlFor="password">Senha</Label>
            <FormInput
              id="password"
              name="password"
              type="password"
              placeholder="Informe sua senha"
              aria-label="Informe sua senha"
              aria-required="true"
            />
            <FormError name="password" />
          </div>

          <div className="relative mt-4">
            <Label htmlFor="confirmPassword">Confirmar senha</Label>
            <FormInput
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirme sua senha"
              aria-label="Confirme sua senha"
              aria-required="true"
            />
            <FormError name="confirmPassword" />
          </div>
        </section>

        <div className="mt-12">
          <FormButton className="h-10 w-full">Cadastrar</FormButton>
        </div>
      </RegisterFactory>

      <div className="mt-4 text-sm">
        <span>Já tem uma conta?</span>
        <Link className="ml-2 text-primary font-bold" href="/login">
          Fazer login
        </Link>
      </div>
    </div>
  )
}
