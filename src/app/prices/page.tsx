import { Metadata } from 'next';
import { PricesTabs } from '@/components/PricesTabs';

export const metadata: Metadata = {
    title: 'Цены на аренду спецтехники в Москве | Спецтех Аренда',
    description: 'Актуальный прайс-лист на услуги спецтехники: автокраны, автовышки, экскаваторы и манипуляторы. Честные цены без скрытых платежей.',
};

export default function PricesPage() {
    return (
        <div className="w-full">
            <section className="bg-card border-b border-border pt-20 pb-12">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Цены на аренду</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Подробный прайс-лист на всю спецтехнику. Выберите нужную категорию, чтобы увидеть базовые тарифы.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <PricesTabs />
                </div>
            </section>
        </div>
    );
}
