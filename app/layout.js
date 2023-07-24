import './globals.css'
import { Raleway, Oleo_Script } from 'next/font/google'
import Provider from '@/functions/provider'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'Ali Al Kindi',
  description: 'Ali Al Kindi Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
          <body className={raleway.className}>
            <Provider>{children}</Provider>
          </body>
    </html>
  )
}
