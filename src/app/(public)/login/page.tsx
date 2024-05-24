import { FacebookIcon } from '@/assets/icons'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Informe seu e-mail"
        />
      </div>
      <div className="mt-4">
        <Label htmlFor="password">Senha</Label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Informe sua senha"
        />
      </div>

      <Button className="h-10 mt-8 w-full">Login</Button>
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
