import './globals.css';

export const metadata = {
  title: 'Bruno Lemus',
  description: 'Functional Programming Evangelist',
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
