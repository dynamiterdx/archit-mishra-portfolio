import './globals.css'
import { Inter, Orbitron } from 'next/font/google'
import ThemeScript from './theme-script'
import Header from '../components/Header'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })
const orbitron = Orbitron({ subsets: ['latin'], weight: ['500','700'] })

export const metadata = {
  title: 'Personal Portfolio',
  description: 'Data Science and Photography Portfolio'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" data-palette="tech" suppressHydrationWarning>
      <head>
        <ThemeScript />
        <link rel="icon" href="/assets/img/favicon.svg" />
      </head>
      <body className={`${inter.className} ${orbitron.className}`}>
        <div className="bg-grid" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

