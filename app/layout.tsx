import localFont from 'next/font/local'
import './globals.css'
import Header from '@/components/Header'
import { Metadata, Viewport } from 'next'
import Footer from '@/components/Footer'
import { siteConfig } from '@/config/site'

const geistSans = localFont({
  src: './fonts/StagRegular.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})

export const meta: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  minimumScale: 1.0,
  viewportFit: 'cover',
  themeColor: '#154b8f'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable}`}>
        <Header />
        <div className='mt-80 max-w-3xl mx-auto'>{children}</div>
        <Footer />
      </body>
    </html>
  )
}
