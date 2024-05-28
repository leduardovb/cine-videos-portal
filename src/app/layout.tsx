import '@/presentation/styles/globals.css'
import { Inter as FontSans } from 'next/font/google'

import { cn } from '@/lib/utils'
import { GlobalProvider } from '@/main/providers'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'w-screen h-screen min-h-screen bg-background font-sans antialiased dark',
          fontSans.variable
        )}
      >
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  )
}
