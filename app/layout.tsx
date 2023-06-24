import './globals.css'


export const metadata = {
  title: 'DigiLev',
  description: 'Web Developer and Designer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
