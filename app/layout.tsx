import './globals.css';
import Link from 'next/link';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  title: 'Coop Td Wiki',
  description: 'A wiki for Coop Td cards and leveling information',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} min-h-screen font-sans`}>
        <header className="bg-white shadow-md border-b border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col sm:flex-row justify-between items-center">
              <Link href="/" className="text-2xl font-bold mb-2 sm:mb-0 text-gray-800">Coop Td Wiki</Link>
              <div className="flex space-x-6">
                <Link href="/demon-gods" className="text-gray-600 hover:text-indigo-600 transition-colors">Demon Gods</Link>
                <Link href="/leveling" className="text-gray-600 hover:text-indigo-600 transition-colors">Leveling</Link>
              </div>
            </nav>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">{children}</main>
        <footer className="bg-gray-100 py-6 mt-12 border-t border-gray-200">
          <div className="container mx-auto px-4 text-center text-gray-500">
            <p>Coop Td Wiki - Fan-made resource for gamers</p>
          </div>
        </footer>
      </body>
    </html>
  );
} 