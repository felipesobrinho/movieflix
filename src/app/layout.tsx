import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactQueryProvider } from './ReactQueryProvider'
import Sidebar from '@/components/SideBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MovieFlix',
  description: 'A Movie app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ReactQueryProvider>
      <html lang="en">
        <body className={inter.className}>
          <Sidebar />
          <div className="flex flex-col w-full h-full">
            {children}
          </div>
        </body>
      </html>
    </ReactQueryProvider >
  )
}
