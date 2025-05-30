import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-background to-muted">
      <main className="flex flex-col items-center justify-center flex-1 px-4 py-16 text-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
          User Management Dashboard
        </h1>
        <p className="text-muted-foreground max-w-prose mb-8">
          A simple and effective solution for managing users. View all users, add new ones,
          and keep track of your user base with our intuitive dashboard.
        </p>
        <Link href="/dashboard" passHref>
          <Button size="lg" className="gap-2">
            Go to Dashboard <ArrowRight size={16} />
          </Button>
        </Link>
      </main>
    </div>
  );
}