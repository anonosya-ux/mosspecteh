import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-card border-t border-border mt-auto">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <Link href="/" className="font-bold text-xl tracking-tight mb-4 inline-block">
                            СПЕЦТЕХ<span className="text-primary text-2xl leading-none">.</span>АРЕНДА
                        </Link>
                        <p className="text-sm text-muted-foreground mt-4">
                            Аренда спецтехники в Москве с подачей на объект от 1 часа. Надежно, по договору, без срыва сроков.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4">Техника</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/excavators" className="hover:text-primary transition-colors">Аренда экскаватора</Link></li>
                            <li><Link href="/manipulators" className="hover:text-primary transition-colors">Аренда манипулятора</Link></li>
                            <li><Link href="/aerial-platforms" className="hover:text-primary transition-colors">Аренда автовышки</Link></li>
                            <li><Link href="/cranes" className="hover:text-primary transition-colors">Аренда автокрана</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4">Компания</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/prices" className="hover:text-primary transition-colors">Цены</Link></li>
                            <li><Link href="/about" className="hover:text-primary transition-colors">О компании</Link></li>
                            <li><Link href="/contacts" className="hover:text-primary transition-colors">Контакты</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4">Контакты</h3>
                        <ul className="space-y-2 text-sm">
                            <li>+7 (985) 922-23-36</li>
                            <li>9859222336@mail.ru</li>
                            <li>Москва и область</li>
                            <li>Работаем 24/7</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-border mt-12 pt-8 text-sm text-center text-muted-foreground">
                    © {new Date().getFullYear()} Спецтех Аренда. Все права защищены.
                </div>
            </div>
        </footer>
    );
}
