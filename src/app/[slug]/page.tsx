import { categoriesData, categoriesList, CategorySlug } from "@/data/pricing";
import { notFound } from "next/navigation";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { PriceTable } from "@/components/PriceTable";
import { LeadForm } from "@/components/LeadForm";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
    return categoriesList.map((category) => ({
        slug: category.slug,
    }));
}

export async function generateMetadata({ params }: { params: Params }) {
    const { slug } = await params;
    const category = categoriesData[slug as CategorySlug];
    if (!category) return {};

    return {
        title: category.seo.title,
        description: category.seo.description,
    };
}

export default async function ServicePage({ params }: { params: Params }) {
    const { slug } = await params;
    const category = categoriesData[slug as CategorySlug];

    if (!category) {
        notFound();
    }

    return (
        <div className="w-full flex flex-col">
            {/* 1. HERO SECTION */}
            <section className="relative w-full overflow-hidden bg-background">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={category.hero.image}
                        alt={category.title}
                        fill
                        className="object-cover object-center brightness-[0.4]"
                        priority
                    />
                </div>

                <div className="container mx-auto px-4 py-20 md:py-28 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-white">
                    <div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                            {category.title}
                        </h1>
                        <p className="text-xl text-white/90 mb-8 font-medium">
                            {category.hero.description}
                        </p>
                        <div className="bg-primary/90 text-primary-foreground inline-flex px-6 py-3 rounded-md font-bold text-2xl mb-8 shadow-lg">
                            от {category.pricesFrom.toLocaleString('ru-RU')} ₽
                        </div>
                    </div>
                    <div className="flex lg:justify-end" id="quote-form">
                        <LeadForm />
                    </div>
                </div>
            </section>

            {/* 2. TASKS / FEATURES */}
            <section className="py-16 bg-card border-b border-border">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8">Для каких задач подходит</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {category.features.map((feature, idx) => (
                            <div key={idx} className="bg-background border border-border p-6 rounded-lg flex items-start gap-4">
                                <CheckCircle2 className="text-primary w-6 h-6 shrink-0 mt-0.5" />
                                <span className="font-medium text-lg">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. PRICES */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Цены на аренду</h2>
                    <PriceTable items={category.pricingItems} />

                    <div className="mt-12 p-8 bg-card border border-border rounded-xl text-center">
                        <h3 className="text-2xl font-bold mb-4">Узнайте точную стоимость за 10 минут</h3>
                        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                            Наши специалисты быстро рассчитают цену с учетом специфики вашего объекта,
                            количества смен и адреса доставки.
                        </p>
                        <a href="#quote-form" className="bg-primary text-primary-foreground px-8 py-3 rounded-md font-bold inline-block hover:bg-primary-dark transition-colors">
                            Рассчитать стоимость
                        </a>
                    </div>
                </div>
            </section>

            {/* 4. FAQ */}
            {category.faq && category.faq.length > 0 && (
                <section className="py-16 bg-card border-t border-border">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <h2 className="text-3xl font-bold mb-8">Частые вопросы</h2>
                        <div className="space-y-4">
                            {category.faq.map((item, idx) => (
                                <div key={idx} className="bg-background border border-border p-6 rounded-lg">
                                    <h4 className="font-bold text-lg mb-2">{item.question}</h4>
                                    <p className="text-muted-foreground">{item.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
