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
      {/* 4. SEO & USE CASES SECTION (DARK) */}
      <section className="py-24 bg-[#111] text-white border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Для каких задач подойдет наша спецтехника?</h2>
            <p className="text-lg text-white/60">Используйте алгоритмы подбора или ознакомьтесь с основными направлениями работ для популярных типов строительной техники.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Экскаваторы */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <div className="w-3 h-8 bg-primary rounded-full"></div>
                Экскаваторы
              </h3>
              <p className="text-white/70 mb-4 leading-relaxed">
                Незаменимы для земляных работ любой сложности. Доступна <strong>аренда экскаватора-погрузчика</strong> (универсален для стройки и уборки), <strong>аренда колесного экскаватора</strong> (мобилен в городе) и <strong>аренда гусеничного экскаватора</strong> (для бездорожья и тяжелых грунтов).
              </p>
              <ul className="text-sm text-white/50 space-y-2 font-medium">
                <li>• Рытье котлованов, траншей, колодцев и септиков</li>
                <li>• Планировка участков и выравнивание рельефа</li>
                <li>• Погрузка сыпучих стройматериалов: песка, щебня, грунта</li>
                <li>• Уборка и вывоз снега, строительного мусора</li>
                <li>• Демонтаж старых фундаментов и зданий (с гидромолотом)</li>
              </ul>
            </div>

            {/* Манипуляторы */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <div className="w-3 h-8 bg-primary rounded-full"></div>
                Манипуляторы (КМУ)
              </h3>
              <p className="text-white/70 mb-4 leading-relaxed">
                Заменяют сразу грузовик и кран, экономя ваш бюджет. Оформляя <strong>заказ манипулятора</strong>, вы получаете машину для погрузки, доставки и точной выгрузки на объекте. Отличная альтернатива раздельной аренде длинномера и автокрана.
              </p>
              <ul className="text-sm text-white/50 space-y-2 font-medium">
                <li>• Перевозка бытовок, вагончиков, контейнеров</li>
                <li>• Доставка кирпича, блоков, тротуарной плитки на паллетах</li>
                <li>• Транспортировка станков, трансформаторов, кабельных катушек</li>
                <li>• Перевозка пиломатериалов, труб, металлопроката</li>
                <li>• Посадка крупномеров (деревьев) и ландшафтные работы</li>
              </ul>
            </div>

            {/* Автокраны */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <div className="w-3 h-8 bg-primary rounded-full"></div>
                Автокраны
              </h3>
              <p className="text-white/70 mb-4 leading-relaxed">
                Мобильная подъемная техника для тяжелых грузов. <strong>Услуги автокрана 25 тонн, 32 тонны и выше</strong> востребованы как в масштабном монолитном строительстве, так и в частном секторе.
              </p>
              <ul className="text-sm text-white/50 space-y-2 font-medium">
                <li>• Разгрузка фур, длинномеров с тяжелыми плитами или арматурой</li>
                <li>• Монтаж металлоконструкций, ферм, сэндвич-панелей</li>
                <li>• Подъем стройматериалов на высоту 2-го этажа и выше</li>
                <li>• Установка ЖБИ колец, фундаментных блоков (ФБС), плит перекрытия</li>
                <li>• Подача бетона в бадьях на перекрытия</li>
              </ul>
            </div>

            {/* Автовышки */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <div className="w-3 h-8 bg-primary rounded-full"></div>
                Автовышки (АГП)
              </h3>
              <p className="text-white/70 mb-4 leading-relaxed">
                Безопасный подъем людей и инструмента на высоту. <strong>Аренда автовышки 18, 22 или 28 метров</strong> незаменима для фасадных, монтажных и коммунальных задач в условиях города.
              </p>
              <ul className="text-sm text-white/50 space-y-2 font-medium">
                <li>• Ремонт и обслуживание фасадов, заделка швов, покраска</li>
                <li>• Монтаж и демонтаж наружной рекламы, баннеров, вывесок</li>
                <li>• Установка кондиционеров на глухих стенах и крышах</li>
                <li>• Оклейка стекол, мойка окон на промышленных объектах</li>
                <li>• Кронирование и спил аварийных деревьев, украшение елок</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
