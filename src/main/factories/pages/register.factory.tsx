'use client'

import { useRegister } from '@/main/hooks/auth'
import { Form } from '@/presentation/components/form'
import { useHandleHttpError } from '@/presentation/hooks'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { z } from 'zod'

const schema = z
  .object({
    email: z.string().email(),
    password: z.string().trim().min(6).max(20),
    confirmPassword: z.string().min(1),
    name: z.string().trim().min(3).max(50),
    lastName: z.string().trim().min(3).max(50),
    birthDate: z.date(),
  })
  .refine((data) => data.password !== data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
  })

type FormData = z.infer<typeof schema>

export default function RegisterFactory({ children }: React.PropsWithChildren) {
  const { replace } = useRouter()
  const { mutateAsync } = useRegister()
  const handleError = useHandleHttpError()

  const handleSubmit = async (data: FormData) => {
    try {
      await mutateAsync({
        email: data.email,
        password: data.password,
        ownerName: data.name,
        ownerLastName: data.lastName,
        ownerBirthDate: data.birthDate.toISOString(),
      })
      toast.success('Conta criada com sucesso')
      replace('/login')
    } catch (error) {
      handleError(error)
    }
  }

  return (
    <Form
      mode="onChange"
      schema={schema}
      criteriaMode="all"
      onSubmit={handleSubmit}
    >
      {children}
    </Form>
  )
}
