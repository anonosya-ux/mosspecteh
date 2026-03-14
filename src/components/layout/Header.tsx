import Link from 'next/link';
import { Menu, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="font-bold text-xl tracking-tight">
                    СПЕЦТЕХ<span className="text-primary text-2xl leading-none">.</span>АРЕНДА
                </Link>

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
                    <a href="#quote-form">
                        <Button className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary-dark">
                            Оставить заявку
                        </Button>
                    </a>
                    <button className="md:hidden p-2 text-foreground">
                        <Menu className="h-6 w-6" />
                    </button>
                </div>
            </div>
        </header>
    );
}
