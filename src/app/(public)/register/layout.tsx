import { CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function RegisterLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <CardHeader className="px-8">
        <CardTitle className="text-4xl font-bold">Cadastro</CardTitle>
      </CardHeader>
      <CardContent className="px-8">{children}</CardContent>
    </>
  )
}
