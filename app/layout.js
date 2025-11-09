import './globals.css'

export const metadata = {
  title: 'Arun T Scaria',
  description: 'Design Portfolio',
  icons: {
    icon: '/images/aruntscaria.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black">
        {children}
      </body>
    </html>
  )
}
