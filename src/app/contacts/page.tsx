import { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { LeadForm } from '@/components/LeadForm';

export const metadata: Metadata = {
    title: 'Контакты компании Спецтех Аренда | Аренда спецтехники',
    description: 'Как связаться с нами для заказа спецтехники в Москве и области. Телефон, email, время работы.',
};

export default function ContactsPage() {
    return (
        <div className="w-full">
            <section className="bg-card border-b border-border pt-20 pb-12">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Контакты</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Мы всегда на связи. Оставьте заявку или позвоните нам для быстрой консультации.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">

                    <div>
                        <h2 className="text-3xl font-bold mb-8">Контактная информация</h2>

                        <div className="space-y-8 mb-12">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl mb-1">Телефон</h3>
                                    <a href="tel:+79959222336" className="text-lg hover:text-primary transition-colors">+7 (995) 922-23-36</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl mb-1">E-mail</h3>
                                    <a href="mailto:9959222336@mail.ru" className="text-lg hover:text-primary transition-colors">9959222336@mail.ru</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl mb-1">Режим работы</h3>
                                    <p className="text-lg text-muted-foreground">Ежедневно, круглосуточно 24/7</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl mb-1">Зона обслуживания</h3>
                                    <p className="text-lg text-muted-foreground">Москва и Московская область (возможность выезда в соседние регионы уточняйте)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card border border-border rounded-xl p-8" id="quote-form">
                        <h3 className="text-2xl font-bold mb-6 text-center">Оставить заявку</h3>
                        <LeadForm />
                    </div>

                </div>
            </section>
        </div>
    );
}
