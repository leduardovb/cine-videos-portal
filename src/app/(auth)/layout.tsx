import { Header } from '@/presentation/components/header'

export default function AuthLayout({ children }: React.PropsWithChildren) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
