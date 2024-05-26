import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

const locale = window.context && window.context.locale ? window.context.locale : 'UTC';

const dateFormatter = new Intl.DateTimeFormat(locale, {
    dateStyle: 'short',
    timeStyle: 'short',
    timeZone: 'Asia/Kolkata'
})

export const formatDateFromMs = (ms: number) => dateFormatter.format(ms)

export const cn = (...args: ClassValue[]) => {
    return twMerge(clsx(...args))
}