import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://mosspecteh.ru'),
  title: "Аренда спецтехники в Москве — цены от 16 000 ₽, подача от 1 часа",
  description: "Автокраны, автовышки, манипуляторы и экскаваторы в аренду по Москве и области. Цены от 16 000 ₽. Работаем 24/7, с оператором, по договору.",
  openGraph: {
    title: "Аренда спецтехники в Москве | Спецтех Аренда",
    description: "Автокраны, автовышки, манипуляторы и экскаваторы в аренду по Москве и области.",
    url: 'https://mosspecteh.ru',
    siteName: 'Спецтех Аренда',
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    title: "Аренда спецтехники в Москве — цены от 16 000 ₽",
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Спецтех Аренда',
    image: 'https://mosspecteh.ru/images/__project_spectech_moscow_landing__engine_nano_ban_delpmaspu.png',
    '@id': 'https://mosspecteh.ru',
    url: 'https://mosspecteh.ru',
    telephone: '+79959222336',
    email: '9959222336@mail.ru',
    priceRange: 'от 16000 RUB',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Москва',
      addressRegion: 'Московская область',
      addressCountry: 'RU'
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      opens: '00:00',
      closes: '23:59'
    }
  };

  return (
    <html lang="ru">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
