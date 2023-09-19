import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { useLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { inter } from '../../../styles/fonts'

export const metadata: Metadata = {
    title: 'Ignacio Vassallo',
    description: 'My Portfolio',
}

export default function RootLayout({
    children,
    params,
}: {
  children: React.ReactNode,
  params: { locale: string },
}) {
    const locale = useLocale()

    if (params.locale !== locale) {
        notFound()
    }

    return (
        <html lang={locale}>
            <body className={inter.variable}>{children}</body>
        </html>
    )
}
