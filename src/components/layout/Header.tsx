"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const closeMenu = () => setIsMobileMenuOpen(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="font-bold text-xl tracking-tight" onClick={closeMenu}>
                    СПЕЦТЕХ<span className="text-primary text-2xl leading-none">.</span>АРЕНДА
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    <Link href="/excavators" className="transition-colors hover:text-primary">Экскаваторы</Link>
                    <Link href="/manipulators" className="transition-colors hover:text-primary">Манипуляторы</Link>
                    <Link href="/aerial-platforms" className="transition-colors hover:text-primary">Автовышки</Link>
                    <Link href="/cranes" className="transition-colors hover:text-primary">Автокраны</Link>
                </nav>

                <div className="flex items-center gap-4">
                    <a href="tel:+79859222336" className="hidden md:flex items-center gap-2 font-bold hover:text-primary transition-colors">
                        <Phone className="h-4 w-4" />
                        +7 (985) 922-23-36
                    </a>
                    <a href="#quote-form" className="hidden md:inline-flex">
                        <Button className="bg-primary text-primary-foreground hover:bg-primary-dark">
                            Оставить заявку
                        </Button>
                    </a>
                    <button
                        className="md:hidden p-2 text-foreground"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-border shadow-lg py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
                    <nav className="flex flex-col gap-4 text-m font-medium">
                        <Link href="/excavators" className="transition-colors hover:text-primary p-2 -mx-2 rounded-md hover:bg-muted" onClick={closeMenu}>Экскаваторы</Link>
                        <Link href="/manipulators" className="transition-colors hover:text-primary p-2 -mx-2 rounded-md hover:bg-muted" onClick={closeMenu}>Манипуляторы</Link>
                        <Link href="/aerial-platforms" className="transition-colors hover:text-primary p-2 -mx-2 rounded-md hover:bg-muted" onClick={closeMenu}>Автовышки</Link>
                        <Link href="/cranes" className="transition-colors hover:text-primary p-2 -mx-2 rounded-md hover:bg-muted" onClick={closeMenu}>Автокраны</Link>
                    </nav>
                    <div className="h-px bg-border my-2" />
                    <a href="tel:+79859222336" className="flex items-center gap-2 font-bold text-foreground hover:text-primary transition-colors py-2" onClick={closeMenu}>
                        <Phone className="h-5 w-5" />
                        +7 (985) 922-23-36
                    </a>
                    <a href="#quote-form" onClick={closeMenu} className="w-full">
                        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary-dark h-12 text-base">
                            Оставить заявку
                        </Button>
                    </a>
                </div>
            )}
        </header>
    );
}
