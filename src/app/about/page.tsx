import { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
    title: 'О компании Спецтех Аренда | Надежный партнер в Москве',
    description: 'Информация о компании Спецтех Аренда. Наш автопарк, преимущества, гарантии и опыт работы на рынке спецтехники Москвы и МО.',
};

export default function AboutPage() {
    return (
        <div className="w-full">
            <section className="bg-card border-b border-border pt-20 pb-12">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">О компании</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Спецтех Аренда — ваш надежный партнер по обеспечению строительных и монтажных площадок качественной техникой.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden">
                        <Image
                            src="/images/First_frame_wide_establishing_shot_of_a_massive_ac_delpmaspu.png"
                            alt="Спецтехника в работе"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-6">Наш подход к работе</h2>
                        <p className="text-lg text-muted-foreground mb-6">
                            Мы понимаем, что простой на строительной площадке обходится дорого. Именно поэтому наша главная задача — обеспечить бесперебойную подачу технически исправных машин точно к назначенному времени. В нашем автопарке только проверенные модели экскаваторов, автокранов, автовышек и манипуляторов.
                        </p>
                        <p className="text-lg text-muted-foreground mb-8">
                            Каждая единица техники выходит на объект под управлением опытного машиниста-оператора с необходимыми допусками. Мы берем на себя ответственность за выполнение задач на вашем объекте.
                        </p>

                        <ul className="space-y-4">
                            {[
                                "Собственный автопарк без посредников",
                                "Подача техники от 1 часа по Москве",
                                "Техническое обслуживание перед каждым выездом",
                                "Квалифицированные операторы со стажем от 5 лет",
                                "Полный пакет закрывающих документов",
                                "Работа с НДС и без НДС"
                            ].map((adv, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-lg font-medium">
                                    <CheckCircle2 className="text-primary w-6 h-6 shrink-0" />
                                    {adv}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </section>
        </div>
    );
}
