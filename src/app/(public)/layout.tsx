import { Card } from '@/presentation/components/ui/card'
import React from 'react'

export default function PublicLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="absolute w-full h-full bg-background-image opacity-15" />
      <Card className="relative z-10 w-[34rem]">{children}</Card>
    </div>
  )
}
