import { Button } from '@/components/ui/button'
import { DatePicker } from '@/components/ui/date-picker'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'

export default function RegisterPage() {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Informações pessoais</h3>
      <section>
        <div>
          <Label htmlFor="name">Nome</Label>
          <Input
            id="name"
            name="name"
            placeholder="Informe seu nome"
            aria-label="Informe seu nome"
            aria-required="true"
          />
        </div>
        <div className="mt-4">
          <Label htmlFor="last-name">Sobrenome</Label>
          <Input
            id="last-name"
            name="last-name"
            placeholder="Informe seu sobrenome"
            aria-label="Informe seu sobrenome"
            aria-required="true"
          />
        </div>
        <div className="mt-4">
          <Label htmlFor="birthday">Data de nascimento</Label>
          <DatePicker
            id="birthday"
            name="birthday"
            placeholder="Informe sua data de nascimento"
            aria-label="Informe sua data de nascimento"
            aria-required="true"
          />
        </div>
      </section>

      <h3 className="text-lg font-bold mt-8 mb-4">Informações da conta</h3>
      <section>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Informe seu e-mail"
            aria-label="Informe seu e-mail"
            aria-required="true"
          />
        </div>
        <div className="mt-4">
          <Label htmlFor="password">Senha</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Informe sua senha"
            aria-label="Informe sua senha"
            aria-required="true"
          />
        </div>

        <div className="mt-4">
          <Label htmlFor="confirm-password">Confirmar senha</Label>
          <Input
            id="confirm-password"
            name="confirm-password"
            type="password"
            placeholder="Confirme sua senha"
            aria-label="Confirme sua senha"
            aria-required="true"
          />
        </div>
      </section>

      <div className="mt-12">
        <Button className="h-10 w-full">Cadastrar</Button>
      </div>

      <div className="mt-4 text-sm">
        <span>Já tem uma conta?</span>
        <Link className="ml-2 text-primary font-bold" href="/login">
          Fazer login
        </Link>
      </div>
    </div>
  )
}
