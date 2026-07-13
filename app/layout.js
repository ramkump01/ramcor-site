import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'RAMCOR | IT Services & Advisory for Financial Services',
  description:
    'RAMCOR delivers intelligent IT services, advisory, AI strategy, and software development for banking and financial institutions.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
