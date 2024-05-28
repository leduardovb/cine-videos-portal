import { LoginFactory } from '@/main/factories/pages'
import { FacebookIcon } from '@/presentation/assets/icons'
import {
  FormButton,
  FormError,
  FormInput,
} from '@/presentation/components/form'
import { Button } from '@/presentation/components/ui/button'
import { Label } from '@/presentation/components/ui/label'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <div>
      <LoginFactory>
        <div className="relative">
          <Label htmlFor="email">Email</Label>
          <FormInput
            id="email"
            name="email"
            type="email"
            placeholder="Informe seu e-mail"
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
          />
          <FormError name="password" />
        </div>

        <FormButton className="h-10 mt-8 w-full">Login</FormButton>
      </LoginFactory>

      <p className="text-sm text-center my-2">ou</p>
      <Button className="h-10 w-full" variant="secondary">
        <FacebookIcon className="w-5 h-5 mr-2" />
        Login com Facebook
      </Button>

      <div className="mt-10 text-sm">
        <span>Não tem uma conta?</span>
        <Link className="ml-2 text-primary font-bold" href="/register">
          Criar conta
        </Link>
      </div>
    </div>
  )
}
