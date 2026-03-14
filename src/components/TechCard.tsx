import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface TechCardProps {
    title: string;
    description: string;
    priceFrom: number;
    image: string;
    href: string;
}

export function TechCard({ title, description, priceFrom, image, href }: TechCardProps) {
    return (
        <div className="group rounded-xl overflow-hidden shadow-sm bg-white text-black flex flex-col hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="relative h-48 xl:h-56 w-full bg-muted overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-2 text-black">{title}</h3>
                <p className="text-black/70 text-sm mb-6 flex-1 line-clamp-3 leading-relaxed">{description}</p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-auto pt-4 border-t border-black/10 gap-4">
                    <div>
                        <span className="text-xs text-black/50 block mb-1">Цена от</span>
                        <span className="text-xl font-black text-black whitespace-nowrap">{priceFrom.toLocaleString('ru-RU')} ₽/смена</span>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                        <Link href={href} className="w-full sm:w-auto">
                            <Button variant="outline" className="w-full border-black/20 text-black hover:bg-black/5 h-10">Подробнее</Button>
                        </Link>
                        <Button className="w-full sm:w-auto bg-primary text-black hover:bg-[#e6b800] font-bold h-10 shadow-sm hover:shadow-md transition-all">Заказать</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
