import './globals.css';

export const metadata = {
  title: 'sajtovi.dev — Izrada sajtova koji se pamte.',
  description: 'Izrada sajtova koji se pamte. Dizajn, razvoj i održavanje sajtova koji donose rezultate.',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="sr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
