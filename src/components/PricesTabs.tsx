"use client";

import { useState } from "react";
import { categoriesList, CategorySlug } from "@/data/pricing";
import { PriceTable } from "./PriceTable";
import { cn } from "@/lib/utils";

interface PricesTabsProps {
    theme?: 'dark' | 'light';
}

export function PricesTabs({ theme = 'dark' }: PricesTabsProps) {
    const [activeTab, setActiveTab] = useState<CategorySlug>('excavators');
    const activeCategory = categoriesList.find(c => c.slug === activeTab);

    if (!activeCategory) return null;

    return (
        <div className="w-full">
            {/* Tabs Desktop */}
            <div className="flex overflow-x-auto gap-2 md:gap-4 border-b border-border mb-6 pb-2 no-scrollbar">
                {categoriesList.map((cat) => (
                    <button
                        key={cat.slug}
                        onClick={() => setActiveTab(cat.slug)}
                        className={cn(
                            "px-4 py-2 font-medium text-sm whitespace-nowrap transition-colors rounded-t-md border-b-2",
                            theme === 'light' ? 'hover:bg-black/5' : 'hover:bg-muted',
                            activeTab === cat.slug
                                ? (theme === 'light' ? "border-primary text-black bg-black/5" : "border-primary text-foreground bg-muted/50")
                                : (theme === 'light' ? "border-transparent text-black/60 hover:text-black" : "border-transparent text-muted-foreground hover:text-foreground")
                        )}
                    >
                        {cat.title.replace('Аренда ', '').split(' ')[0]} {/* Extracting concise name */}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
                <div className="xl:col-span-3">
                    <PriceTable items={activeCategory.pricingItems} theme={theme} />
                </div>
                <div className={cn(
                    "p-6 rounded-xl flex flex-col justify-center text-center items-center border",
                    theme === 'light' ? "bg-black/5 border-black/10 text-black" : "bg-primary/10 border-primary/20"
                )}>
                    <h4 className={cn("font-bold text-lg mb-2", theme === 'light' ? "text-black" : "")}>Нужен точный расчет под ваш объект?</h4>
                    <p className={cn("text-sm mb-6", theme === 'light' ? "text-black/70" : "text-muted-foreground")}>Оставьте заявку — рассчитаем за 10 минут.</p>
                    <a href="#quote-form" className={cn(
                        "font-medium px-6 py-2 rounded-md transition-colors inline-block w-full",
                        theme === 'light' ? "bg-primary text-black hover:bg-black/10 border border-black/10 font-bold" : "bg-primary text-primary-foreground hover:bg-primary-dark"
                    )}>
                        Оставить заявку
                    </a>
                </div>
            </div>
        </div>
    );
}
