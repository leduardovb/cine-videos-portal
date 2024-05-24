import { Header } from '@/components/header'

export default function AuthLayout({ children }: React.PropsWithChildren) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
