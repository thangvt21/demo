import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'


const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400','500','600','700'],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: 'FlashPOD',
  description: 'Connection app',
  icons: {
    icon: '/assets/images/Asset 1.svg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.className}>{children}</body>
      </html>
    </ClerkProvider>
    
  )
}
