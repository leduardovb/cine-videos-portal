'use client'

import * as React from 'react'
import { format } from 'date-fns'

import { cn } from '@/lib/utils'
import { Button } from '@/presentation/components/ui/button'
import { Calendar } from '@/presentation/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/presentation/components/ui/popover'

interface DatePickerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  placeholder?: string
}

export function DatePicker({ className, ...props }: DatePickerProps) {
  const [date, setDate] = React.useState<Date>()

  const handleSelect = (date: Date) => {
    setDate(date)
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-full h-10 justify-start text-left font-normal px-4 bg-card',
            !date && 'text-muted-foreground',
            className
          )}
          {...props}
        >
          {date ? (
            format(date, 'dd/MM/yyyy')
          ) : (
            <span>{props.placeholder || 'Selecione uma data'}</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
