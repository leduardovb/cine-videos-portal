'use client'

import { useLogin } from '@/main/hooks/auth'
import { Form } from '@/presentation/components/form'
import { useHandleHttpError } from '@/presentation/hooks'
import { useRouter } from 'next/navigation'
import { z } from 'zod'

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(20),
})

type FormData = z.infer<typeof schema>

export default function LoginFactory({ children }: React.PropsWithChildren) {
  const { replace } = useRouter()
  const { mutateAsync } = useLogin()
  const handleError = useHandleHttpError()

  const handleSubmit = async (data: FormData) => {
    try {
      await mutateAsync(data)
      replace('/browse')
    } catch (error) {
      handleError(error)
    }
  }

  return (
    <Form onSubmit={handleSubmit} schema={schema}>
      {children}
    </Form>
  )
}
