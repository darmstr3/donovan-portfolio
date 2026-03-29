import './globals.css'

export const metadata = {
  title: 'Donovan Armstrong',
  description: 'I turn ideas into working systems. Technical enough to build it, clear enough to explain it.',
  openGraph: {
    title: 'Donovan Armstrong',
    description: 'I turn ideas into working systems. Technical enough to build it, clear enough to explain it.',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
