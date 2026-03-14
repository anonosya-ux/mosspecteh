export type CategorySlug = 'excavators' | 'manipulators' | 'aerial-platforms' | 'cranes';

export interface PricingItem {
  id: string;
  name: string;
  spec1?: string;
  spec2?: string;
  price: number;
  badge?: string;
  available: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CategoryData {
  title: string;
  slug: CategorySlug;
  hero: {
    title: string;
    description: string;
    image: string;
  };
  features: string[];
  pricingItems: PricingItem[];
  pricesFrom: number;
  faq: FAQItem[];
  seo: {
    title: string;
    description: string;
  };
}

export const categoriesData: Record<CategorySlug, CategoryData> = {
  excavators: {
    title: 'Аренда экскаватора в Москве',
    slug: 'excavators',
    hero: {
      title: 'Аренда экскаватора в Москве',
      description: 'Экскаваторы-погрузчики, колесные и гусеничные экскаваторы для любых земляных работ. Подача от 1 часа.',
      image: '/images/Closeup_action_shot_of_a_heavy_yellow_caterpillar__delpmaspu.png'
    },
    pricesFrom: 23000,
    features: ['Котлован', 'Траншея', 'Планировка', 'Демонтаж'],
    pricingItems: [
      { id: 'exc-1', name: 'Экскаватор-погрузчик', spec1: 'стандарт', price: 23000, available: true },
      { id: 'exc-2', name: 'Экскаватор-погрузчик', spec1: 'с гидромолотом', price: 25000, available: true },
      { id: 'exc-3', name: 'Колесный экскаватор', spec1: 'ковш 1 м³', price: 25000, available: true },
      { id: 'exc-4', name: 'Колесный экскаватор', spec1: 'ковш 1,5 м³', price: 28000, available: true },
      { id: 'exc-5', name: 'Гусеничный экскаватор', spec1: 'ковш 1 м³', price: 24000, available: true }
    ],
    faq: [
      { question: 'Как быстро вы подаете экскаватор?', answer: 'При наличии свободной техники мы подаем ее в течение 1 часа по Москве.' },
      { question: 'Вы работаете с НДС?', answer: 'Да, мы предоставляем все закрывающие документы, возможна оплата с НДС.' }
    ],
    seo: {
      title: 'Аренда экскаватора в Москве — цена от 23 000 ₽',
      description: 'Экскаваторы в аренду по Москве и области. Цены от 23 000 ₽. Работаем 24/7, с оператором, по договору.'
    }
  },
  manipulators: {
    title: 'Аренда манипулятора в Москве',
    slug: 'manipulators',
    hero: {
      title: 'Аренда манипулятора в Москве',
      description: 'Манипуляторы различной грузоподъемности для перевозки стройматериалов, бытовок, погрузки и разгрузки.',
      image: '/images/Dynamic_shot_of_a_dirty_volvo_fh_flatbed_truck_wit_delpmaspu.png'
    },
    pricesFrom: 18000,
    features: ['Перевозка стройматериалов', 'Доставка бытовок', 'Погрузка/разгрузка'],
    pricingItems: [
      { id: 'man-1', name: 'Манипулятор 5 т', price: 18000, available: true },
      { id: 'man-2', name: 'Манипулятор 7 т', price: 20000, available: true },
      { id: 'man-3', name: 'Манипулятор 10 т', price: 22000, available: true },
      { id: 'man-4', name: 'Манипулятор 12 т', price: 26000, available: true },
      { id: 'man-5', name: 'Манипулятор-вездеход', price: 27000, available: true },
      { id: 'man-6', name: 'Манипулятор-длинномер', price: 28000, available: true }
      // NOTE: 1,5м3 - 29000 purposefully isolated/omitted.
    ],
    faq: [
      { question: 'Сколько стоит аренда манипулятора?', answer: 'Стоимость аренды начинается от 18 000 ₽ за смену.' }
    ],
    seo: {
      title: 'Аренда манипулятора в Москве — цена от 18 000 ₽',
      description: 'Манипуляторы в аренду по Москве и области. Цены от 18 000 ₽. Работаем 24/7, с оператором, по договору.'
    }
  },
  'aerial-platforms': {
    title: 'Аренда автовышки в Москве',
    slug: 'aerial-platforms',
    hero: {
      title: 'Аренда автовышки в Москве',
      description: 'Автовышки с высотой подъема от 18м для фасадных, монтажных работ и обслуживания зданий.',
      image: '/images/A_heavyduty_truck_with_a_straight_telescopic_aeria_delpmaspu.png'
    },
    pricesFrom: 16000,
    features: ['Фасадные работы', 'Монтаж', 'Освещение', 'Баннеры', 'Обслуживание зданий'],
    pricingItems: [
      { id: 'aer-1', name: 'Автовышка 18 м', price: 16000, available: true },
      { id: 'aer-2', name: 'Автовышка 22 м', price: 18000, available: true },
      { id: 'aer-3', name: 'Автовышка 28 м', price: 20000, available: true },
      { id: 'aer-4', name: 'Автовышка 32 м', price: 26000, available: true },
      { id: 'aer-5', name: 'Автовышка 40 м', price: 31000, available: true }
      // NOTE: 2м3 - 33000 purposefully isolated/omitted.
    ],
    faq: [
      { question: 'На какую минимальную смену вы выезжаете?', answer: 'Минимальный заказ стандартно рассчитывается на полную рабочую смену.' }
    ],
    seo: {
      title: 'Аренда автовышки в Москве — цена от 16 000 ₽',
      description: 'Автовышки в аренду по Москве и области. Цены от 16 000 ₽. Работаем 24/7, с оператором, по договору.'
    }
  },
  cranes: {
    title: 'Аренда автокрана в Москве',
    slug: 'cranes',
    hero: {
      title: 'Аренда автокрана в Москве',
      description: 'Мощные автокраны от 25т до 50т для монтажа, разгрузки, стройки и подъема тяжелых конструкций.',
      image: '/images/media__1773414725602.jpg'
    },
    pricesFrom: 21000,
    features: ['Монтаж', 'Разгрузка', 'Стройка', 'Подъем конструкций'],
    pricingItems: [
      { id: 'cra-1', name: 'Автокран 25 т', spec1: 'Стрела 22 м', price: 21000, available: true },
      { id: 'cra-2', name: 'Автокран 32 т', spec1: 'Стрела 21 м', price: 26000, available: true },
      { id: 'cra-3', name: 'Автокран 40 т', price: 30000, available: true },
      { id: 'cra-4', name: 'Автокран 50 т', price: 35000, available: true }
    ],
    faq: [
      { question: 'Есть ли у вас пропуск в центр Москвы?', answer: 'Наши автокраны имеют все необходимые пропуска для работы в любых зонах Москвы.' }
    ],
    seo: {
      title: 'Аренда автокрана в Москве — цена от 21 000 ₽',
      description: 'Автокраны в аренду по Москве и области. Цены от 21 000 ₽. Работаем 24/7, с оператором, по договору.'
    }
  }
};

export const categoriesList = Object.values(categoriesData);
