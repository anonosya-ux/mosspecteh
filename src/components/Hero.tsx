"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative w-full h-[85vh] md:h-[90vh] min-h-[600px] overflow-hidden bg-[#0a0a0a] flex items-center">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/media__1773414075120.jpg"
                    alt="Аренда автокрана в Москве"
                    fill
                    className="object-cover object-center brightness-[0.4]"
                    priority
                    quality={100}
                />

                {/* Gradient overlay to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-[#0a0a0a]/80 pointer-events-none" />
            </div>

            {/* Content Layer */}
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 tracking-tight text-white leading-tight">
                            Бесперебойная подача <br className="hidden md:block" />
                            <span className="text-primary">спецтехники в Москве</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-lg md:text-2xl text-white/80 mb-10 font-medium max-w-3xl leading-relaxed"
                    >
                        Быстрая аренда автовышки, автокрана, крана-манипулятора и экскаватора на ваш объект от 1 часа. Надежный партнер для B2B без срыва сроков.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="flex flex-wrap items-center gap-4"
                    >
                        <a
                            href="#quote-form"
                            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-white/10 border border-white/20 rounded-lg overflow-hidden backdrop-blur-md hover:bg-white/20 hover:border-white/30 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,204,0,0.3)] w-full sm:w-auto text-lg"
                        >
                            <span className="relative z-10">Оставить заявку</span>
                        </a>

                        <a
                            href="tel:+79859222336"
                            className="inline-flex items-center justify-center px-8 py-4 font-bold text-primary hover:text-primary-dark transition-colors w-full sm:w-auto text-lg"
                        >
                            +7 (985) 922-23-36
                        </a>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
