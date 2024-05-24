import { CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function LoginLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <CardHeader className="px-8 mb-8">
        <CardTitle className="text-4xl font-bold">Login</CardTitle>
      </CardHeader>
      <CardContent className="px-8">{children}</CardContent>
    </>
  )
}
