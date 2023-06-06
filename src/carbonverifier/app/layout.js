import './globals.css'

export const metadata = {
  title: 'Carbon Verifier',
  description: 'Verify, track and offset your carbon footprint.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
        {children}
        </body>
    </html>
  )
}
