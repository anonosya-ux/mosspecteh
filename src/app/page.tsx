import { LeadForm } from "@/components/LeadForm";
import { TechCard } from "@/components/TechCard";
import { PricesTabs } from "@/components/PricesTabs";
import { categoriesList } from "@/data/pricing";
import { Hero } from "@/components/Hero";
import { AICalculator } from "@/components/AICalculator";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      {/* 1. HERO SECTION (3D SPLINE / IMAGE) */}
      <Hero />

      {/* 1.5 TRUST METRICS (WHITE STRIP) */}
      <section className="bg-white text-black py-8 border-b border-black/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x-0 md:divide-x divide-black/10">
            <div className="p-4">
              <div className="text-3xl md:text-4xl font-black mb-1">45+</div>
              <div className="text-black/70 font-medium text-sm">Единиц своей техники</div>
            </div>
            <div className="p-4">
              <div className="text-3xl md:text-4xl font-black mb-1">1 час</div>
              <div className="text-black/70 font-medium text-sm">Среднее время подачи</div>
            </div>
            <div className="p-4">
              <div className="text-3xl md:text-4xl font-black mb-1">500+</div>
              <div className="text-black/70 font-medium text-sm">Выполненных объектов</div>
            </div>
            <div className="p-4">
              <div className="text-3xl md:text-4xl font-black mb-1">24/7</div>
              <div className="text-black/70 font-medium text-sm">Работаем без выходных</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. POPULAR TECH SECTION (YELLOW) */}
      <section className="py-24 bg-primary text-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-black mb-12 text-black text-center tracking-tight">Популярная техника и цены</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoriesList.map((cat) => (
              <TechCard
                key={cat.slug}
                title={cat.title.split(' в Москве')[0]} // "Аренда экскаватора"
                description={cat.hero.description}
                priceFrom={cat.pricesFrom}
                image={cat.hero.image}
                href={`/${cat.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 2.5 AI CALCULATOR SECTION (BLACK) */}
      <section className="py-24 bg-[#0a0a0a] border-t border-t-white/10 relative overflow-hidden">
        {/* Subtle grid background for the AI section */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Нейросеть подберет технику</h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              Опишите задачу, и наш ИИ-алгоритм мгновенно посчитает точную стоимость аренды, выбрав самую выгодную машину для вашего объекта.
            </p>
          </div>
          <AICalculator />
        </div>
      </section>

      {/* 3. PRICES SECTION (TABS) (WHITE) */}
      <section className="py-24 bg-white text-black border-t border-black/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-black text-center tracking-tight">Честные цены на аренду спецтехники</h2>
          <p className="text-lg text-black/70 max-w-4xl mb-12 text-center mx-auto font-medium">
            Показываем базовые тарифы сразу, без игры в &quot;оставьте номер — потом скажем&quot;. Точная стоимость зависит от типа техники, адреса объекта, срока аренды, сменности и дополнительных работ. Оставьте заявку — рассчитаем стоимость под ваш объект за 10 минут.
          </p>
          <PricesTabs theme="light" />
        </div>
      </section>
    </div>
  );
}
