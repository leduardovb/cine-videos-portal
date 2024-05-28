'use client'

import { LoginDTO, LoginUseCase } from '@/@core/application/authentication'
import { container, Registry } from '@/@core/infra/container-registry'
import { useMutation } from 'react-query'

export default function useLogin() {
  const mutate = useMutation({
    mutationFn: (dto: LoginDTO) => {
      const useCase = container.get<LoginUseCase>(Registry.LoginUseCase)
      return useCase.execute(dto)
    },
  })
  return mutate
}
