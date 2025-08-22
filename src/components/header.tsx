
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';
import { LogoIcon } from './icons/logo-icon';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#tournaments', label: 'Tournaments' },
  { href: '#community', label: 'Community' },
  { href: '#contact', label: 'Contact' },
];

const NavLink = ({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if(element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (onClick) onClick();
  };
  return (
    <a href={href} onClick={handleClick} className="text-sm font-medium text-foreground/80 transition-colors hover:text-accent py-2">
      {label}
    </a>
  );
};

export function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="#home" onClick={(e) => { e.preventDefault(); document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' }); }} className="flex items-center gap-2">
          <LogoIcon className="h-8 w-auto text-primary" />
        </a>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>
        <div className="hidden md:block">
          <Button className="bg-gradient-to-r from-accent to-primary text-primary-foreground animate-pulse">
            Pre-Register Now
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background">
              <div className="flex flex-col h-full p-6">
                <a href="#home" className="mb-8" onClick={() => setMenuOpen(false)}>
                   <LogoIcon className="h-8 w-auto text-primary"/>
                </a>
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <NavLink key={link.href} {...link} onClick={() => setMenuOpen(false)} />
                  ))}
                </nav>
                <Button className="mt-8 bg-gradient-to-r from-accent to-primary text-primary-foreground animate-pulse">
                  Pre-Register Now
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
