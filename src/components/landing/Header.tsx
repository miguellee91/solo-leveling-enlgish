
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold tracking-tight text-foreground">
              Solo Leveling <span className="text-primary">English</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <Link href="#about" className="hover:text-primary transition-colors">
            학원 소개
          </Link>
          <Link href="#services" className="hover:text-primary transition-colors">
            수업 안내
          </Link>
          <Link href="https://naver.me/FCrf22iC" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            오시는 길
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="https://open.kakao.com/o/g2X1Y08h" target="_blank" rel="noopener noreferrer">
            <Button variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              상담 신청
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
