import Nabvar from './components/navbar/Nabvar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Danone',
  description: 'One Planet . One Health',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nabvar />
        {children}
        </body>
    </html>
  )
}
