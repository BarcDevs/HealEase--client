import { type ClassValue, clsx } from "clsx"
import {formatDistance} from 'date-fns'
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const toRelative = (date: Date) => {
  return formatDistance(date, new Date(), {
    addSuffix: true
  })
}
