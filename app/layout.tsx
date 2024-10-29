import localFont from 'next/font/local'
import './globals.css'
import Header from '@/components/Header'
import { Metadata } from 'next'
import Footer from '@/components/Footer'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
})

// Bring back metadata
export const meta: Metadata = {
  title: 'Virtual Emerge',
  description:
    'Explore Ara Institute of Canterbury Bachelor of Information and Communication Technologies student final year projects, in the Virtual Emerge showcase.'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <div className='mt-96 md:mt-80'>{children}</div>
        <Footer />
      </body>
    </html>
  )
}
