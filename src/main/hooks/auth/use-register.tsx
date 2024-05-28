'use client'

import {
  RegisterDTO,
  RegisterUseCase,
} from '@/@core/application/authentication'
import { container, Registry } from '@/@core/infra/container-registry'
import { useMutation } from 'react-query'

export default function useRegister() {
  const mutate = useMutation({
    mutationFn: (dto: RegisterDTO) => {
      const useCase = container.get<RegisterUseCase>(Registry.RegisterUseCase)
      return useCase.execute(dto)
    },
  })
  return mutate
}
