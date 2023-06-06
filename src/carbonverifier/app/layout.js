import NavBar from '@/components/NavBar'
import './globals.css'

export const metadata = {
  title: 'Carbon Verifier',
  description: 'Verify, track and offset your carbon footprint.',
}



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className='font-montserrat'>
        <NavBar/>
        {children}
        </body>
    </html>
  )
}
