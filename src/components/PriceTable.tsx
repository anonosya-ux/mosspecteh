import { PricingItem } from '@/data/pricing';
import { Button } from '@/components/ui/button';

import { cn } from '@/lib/utils';

interface PriceTableProps {
    items: PricingItem[];
    theme?: 'dark' | 'light';
}

export function PriceTable({ items, theme = 'dark' }: PriceTableProps) {
    return (
        <div className="w-full">
            {/* Desktop Table (hidden on mobile) */}
            <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className={cn("border-b-2", theme === 'light' ? "border-black/20 text-black/60" : "border-primary/50 text-muted-foreground")}>
                            <th className="p-4 font-bold">Тип техники</th>
                            <th className="p-4 font-bold">Характеристика</th>
                            <th className="p-4 font-bold text-right">Цена</th>
                            <th className="p-4"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => (
                            <tr key={item.id} className={cn("border-b transition-colors", theme === 'light' ? "border-black/10 hover:bg-black/5 text-black" : "border-border hover:bg-muted/50")}>
                                <td className="p-4 font-medium">{item.name}</td>
                                <td className={cn("p-4", theme === 'light' ? "text-black/70" : "text-muted-foreground")}>{item.spec1 || item.spec2 || '—'}</td>
                                <td className="p-4 text-right font-bold text-lg whitespace-nowrap">
                                    {item.price.toLocaleString('ru-RU')} ₽ <span className="text-sm font-normal opacity-70">/ смена</span>
                                </td>
                                <td className="p-4 text-right">
                                    <Button size="sm" className={cn("whitespace-nowrap", theme === 'light' ? "bg-black text-white hover:bg-black/80 font-bold" : "")}>Заказать</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile Cards (hidden on desktop) */}
            <div className="grid grid-cols-1 gap-4 md:hidden">
                {items.map((item) => (
                    <div key={item.id} className={cn("border rounded-lg p-4 flex flex-col gap-3", theme === 'light' ? "bg-white border-black/10 text-black shadow-sm" : "bg-card border-border")}>
                        <div>
                            <h4 className="font-bold text-lg">{item.name}</h4>
                            {(item.spec1 || item.spec2) && (
                                <p className={cn("text-sm", theme === 'light' ? "text-black/70" : "text-muted-foreground")}>{item.spec1 || item.spec2}</p>
                            )}
                        </div>
                        <div className="flex items-center justify-between mt-2 gap-4">
                            <span className="font-bold text-xl whitespace-nowrap tracking-tight">{item.price.toLocaleString('ru-RU')} ₽ <span className="text-sm font-normal opacity-70">/ смена</span></span>
                            <Button size="sm" className={cn("whitespace-nowrap shrink-0", theme === 'light' ? "bg-black text-white hover:bg-black/80 font-bold" : "")}>Заказать</Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
