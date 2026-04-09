import { ReactNode } from 'react';
import { Header } from '@/src/components/Header';
import { Footer } from '@/src/components/footer';

export default function ProjectLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-900 pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
