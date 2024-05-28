'use client'

import { Toaster } from '@/presentation/components/ui/sonner'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

export default function GlobalProvider({ children }: React.PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Toaster />
    </QueryClientProvider>
  )
}
