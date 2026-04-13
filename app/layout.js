import './globals.css';

export const metadata = {
  title: 'GreenPulse Campus | Institutional Sustainability Intelligence',
  description: 'The standard for campus sustainability. Track carbon, classify waste, and audit energy waste with GreenPulse AI.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
