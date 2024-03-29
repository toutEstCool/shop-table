import type { Metadata } from 'next'
// import 'bootstrap/dist/css/bootstrap.css'
import './global-styles/normalize.css'
import './global-styles/globals.css'
import './global-styles/header.css'
import './global-styles/menu.css'
import Layout from '@/components/layouts/Layouts'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
