import { ErrorReason } from '@/data/response/error'
import { toast } from 'sonner'

const isErrorReason = (error: unknown): error is ErrorReason => {
  return (
    typeof error === 'object' &&
    error !== null &&
    'identifier' in error &&
    'description' in error &&
    'code' in error &&
    'metadata' in error &&
    typeof error.metadata === 'object' &&
    error.metadata !== null &&
    'message' in error.metadata
  )
}

export default function useHandleHttpError() {
  const handleError = (error: unknown) => {
    console.log(error)
    if (isErrorReason(error)) {
      toast.error(error.metadata.message)
    } else {
      toast.error('Erro inesperado')
    }
  }

  return handleError
}
