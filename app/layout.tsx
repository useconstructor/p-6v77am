import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sonrisa Perfecta',
  description: 'Modern professional dental clinic website showcasing specialized dental services, team of three dentists, and online appointment booking system.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900" style={{ backgroundColor: '#FFFFFF' }}>
        {children}
      </body>
    </html>
  );
}
