"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Cpu } from "lucide-react";

type Step = 'initial' | 'calculating' | 'result';

const taskTypes = [
    "Разгрузка материалов", "Рытье котлована", "Монтаж конструкций",
    "Подъем на высоту", "Уборка снега/мусора", "Свой вариант"
];

export function AICalculator() {
    const [step, setStep] = useState<Step>('initial');
    const [techType, setTechType] = useState("Не знаю, нужен подбор");
    const [duration, setDuration] = useState<number>(1);
    const [task, setTask] = useState<string>("");
    const [estimatedPrice, setEstimatedPrice] = useState(0);
    const [bookingLoading, setBookingLoading] = useState(false);
    const [bookingSuccess, setBookingSuccess] = useState(false);
    const [phone, setPhone] = useState("");

    const handleCalculate = (e: React.FormEvent) => {
        e.preventDefault();
        setStep('calculating');

        // Mock AI thinking delay
        setTimeout(() => {
            // Very simple mock logic for estimation
            let base = 15000;
            if (techType === "Автокран" || task.includes("Монтаж") || task.includes("Подъем")) base = 25000;
            if (techType === "Экскаватор" || task.includes("котлован") || task.includes("Уборка")) base = 20000;
            if (techType === "Автовышка") base = 16000;
            if (techType === "Манипулятор" || task.includes("Разгрузка")) base = 18000;

            const shifts = duration || 1;
            setEstimatedPrice(base * shifts);
            setStep('result');
        }, 2500);
    };

    const handleBook = async () => {
        if (!phone) {
            alert("Пожалуйста, введите номер телефона");
            return;
        }

        setBookingLoading(true);
        try {
            await fetch("https://spectehmosobl.anonosya.workers.dev", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    type: "Бронь через ИИ-калькулятор",
                    phone: phone,
                    task: task,
                    equipment: techType === "Не знаю, нужен подбор" ? "Подобрано ИИ" : techType,
                    duration: duration,
                    estimatedPrice: estimatedPrice
                })
            });
            setBookingSuccess(true);
        } catch (error) {
            console.error("Ошибка при бронировании:", error);
            alert("Произошла ошибка. Пожалуйста, попробуйте еще раз.");
        } finally {
            setBookingLoading(false);
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto bg-[#111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            <div className="bg-white/5 border-b border-white/10 p-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-black">
                    <Cpu className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white">Умный подбор и расчет стоимости</h3>
                    <p className="text-white/50 text-sm">ИИ-ассистент сформирует оптимальное предложение под вашу задачу</p>
                </div>
            </div>

            <div className="p-8 min-h-[400px] flex flex-col justify-center relative">
                <AnimatePresence mode="wait">
                    {step === 'initial' && (
                        <motion.form
                            key="form"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            onSubmit={handleCalculate}
                            className="space-y-8"
                        >
                            <div className="space-y-4">
                                <label className="block text-white mb-2 font-bold text-lg">1. Какая задача стоит?</label>
                                <div className="flex flex-wrap gap-3">
                                    {taskTypes.map((t) => (
                                        <button
                                            key={t}
                                            type="button"
                                            onClick={() => setTask(t)}
                                            className={`px-4 py-2 rounded-full border transition-all ${task === t
                                                ? "bg-primary border-primary text-black font-bold"
                                                : "bg-[#222] border-white/10 text-white/70 hover:border-white/30 hover:bg-[#333]"
                                                }`}
                                        >
                                            {t}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <label className="block text-white mb-2 font-bold text-lg">2. Какая техника? (если знаете)</label>
                                    <select
                                        required
                                        value={techType}
                                        onChange={(e) => setTechType(e.target.value)}
                                        className="w-full bg-[#222] border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                                    >
                                        <option value="Не знаю, нужен подбор">Не знаю, пусть выберет ИИ</option>
                                        <option value="Автокран">Автокран</option>
                                        <option value="Экскаватор">Экскаватор</option>
                                        <option value="Манипулятор">Манипулятор</option>
                                        <option value="Автовышка">Автовышка</option>
                                    </select>
                                </div>
                                <div>
                                    <div className="flex justify-between items-center mb-2">
                                        <label className="block text-white font-bold text-lg">3. На сколько смен?</label>
                                        <span className="text-primary font-bold">{duration} {duration === 1 ? 'смена' : duration > 4 ? 'смен' : 'смены'}</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="1"
                                        max="30"
                                        value={duration}
                                        onChange={(e) => setDuration(parseInt(e.target.value))}
                                        className="w-full h-2 bg-[#333] rounded-lg appearance-none cursor-pointer accent-primary mt-4"
                                    />
                                    <div className="flex justify-between text-white/40 text-sm mt-2 font-mono">
                                        <span>1</span>
                                        <span>30+</span>
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={!task}
                                className={`w-full font-bold text-lg p-4 rounded-lg transition-colors ${task ? "bg-primary text-black hover:bg-primary-dark" : "bg-[#333] text-white/50 cursor-not-allowed"
                                    }`}
                            >
                                {task ? "Рассчитать стоимость с помощью ИИ" : "Выберите задачу для расчета"}
                            </button>
                        </motion.form>
                    )}

                    {step === 'calculating' && (
                        <motion.div
                            key="calculating"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                            className="flex flex-col items-center justify-center text-center py-12"
                        >
                            <Loader2 className="w-16 h-16 text-primary animate-spin mb-6" />
                            <h4 className="text-2xl font-bold text-white mb-2">Анализируем вашу задачу...</h4>
                            <p className="text-white/50">Подбираем оптимальную технику и рассчитываем смены</p>

                            <div className="mt-8 space-y-3 text-left w-full max-w-sm">
                                <div className="flex items-center gap-3 text-white/70">
                                    <CheckCircle2 className="w-5 h-5 text-primary" /> Обработка описания задачи
                                </div>
                                <div className="flex items-center gap-3 text-white/70">
                                    <CheckCircle2 className="w-5 h-5 text-primary" /> Поиск свободной техники
                                </div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1 }}
                                    className="flex items-center gap-3 text-white/70"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-primary" /> Формирование сметы
                                </motion.div>
                            </div>
                        </motion.div>
                    )}

                    {step === 'result' && (
                        <motion.div
                            key="result"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center py-8"
                        >
                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/20 text-green-500 mb-6">
                                <CheckCircle2 className="w-10 h-10" />
                            </div>
                            <h4 className="text-3xl font-bold text-white mb-2">Расчет готов</h4>
                            <p className="text-white/70 mb-8 max-w-lg mx-auto">
                                Под вашу задачу <strong>&quot;{task}&quot;</strong> оптимально подойдет <strong className="text-white">{techType === "Не знаю, нужен подбор" ? "наша спецтехника" : techType}</strong>.
                            </p>

                            <div className="bg-[#222] rounded-xl p-8 mb-8 border border-white/5 inline-block w-full max-w-sm">
                                <span className="block text-white/50 mb-1">Ориентировочная стоимость:</span>
                                <span className="text-4xl font-black text-primary">~ {estimatedPrice.toLocaleString('ru-RU')} ₽</span>
                            </div>

                            <div className="space-y-4 max-w-sm mx-auto">
                                {bookingSuccess ? (
                                    <div className="bg-green-500/20 text-green-500 p-4 rounded-lg border border-green-500/30">
                                        <h5 className="font-bold mb-1">Заявка отправлена!</h5>
                                        <p className="text-sm text-green-500/80">Мы свяжемся с вами в течение 10 минут для подтверждения брони.</p>
                                    </div>
                                ) : (
                                    <>
                                        <input
                                            type="tel"
                                            placeholder="+7 (999) 000-00-00"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            className="w-full bg-[#222] border border-white/10 rounded-lg p-4 text-white text-center focus:outline-none focus:border-primary"
                                        />
                                        <button
                                            onClick={handleBook}
                                            disabled={bookingLoading}
                                            className="w-full bg-primary text-black font-bold p-4 rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50"
                                        >
                                            {bookingLoading ? "Отправка..." : "Забронировать по этой цене"}
                                        </button>
                                    </>
                                )}
                                <button
                                    onClick={() => {
                                        setStep('initial');
                                        setBookingSuccess(false);
                                        setPhone("");
                                    }}
                                    className="text-white/50 text-sm hover:text-white transition-colors"
                                >
                                    Сделать новый расчет
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
