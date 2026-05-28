import type { Metadata } from 'next';
import { RootProvider } from 'fumadocs-ui/provider';
import './global.css';

export const metadata: Metadata = {
  title: 'Koala Docs',
  description: 'Documentation for Koala — native macOS API client. Postman without the bloat.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://koala.eularix.com'),
  openGraph: {
    title: 'Koala Docs',
    description: 'Native macOS API client documentation.',
    type: 'website',
    siteName: 'Koala Docs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Koala Docs',
    description: 'Native macOS API client documentation.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://rsms.me/inter/inter.css"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
