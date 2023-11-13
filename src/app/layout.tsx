import type { Metadata } from 'next'
import { DM_Sans as DmSans } from 'next/font/google'
import './globals.css'

const dmSans = DmSans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Simple Coffee Listing',
  description:
    'Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>{children}</body>
    </html>
  )
}
