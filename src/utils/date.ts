import { format } from 'date-fns'

export const formatDate = (date: string | Date) => format(typeof date === 'string' ? new Date(date) : date, 'yyyy-MM-dd')