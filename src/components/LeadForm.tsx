"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function LeadForm() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        equipment: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            await fetch("/api/lead", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    type: "Заявка с формы на сайте",
                    name: formData.name,
                    phone: formData.phone,
                    equipment: formData.equipment
                })
            });
            setSuccess(true);
        } catch (error) {
            console.error("Ошибка при отправке заявки:", error);
            alert("Произошла ошибка. Пожалуйста, попробуйте еще раз.");
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="bg-green-500/10 border border-green-500 p-6 rounded-xl text-center bg-white">
                <h3 className="font-bold text-xl mb-2 text-green-600">Заявка отправлена!</h3>
                <p className="text-gray-700 font-medium">Мы свяжемся с вами в течение 10 минут для расчета стоимости.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white border border-gray-200 p-6 rounded-xl shadow-lg w-full max-w-md">
            <h3 className="text-xl font-bold mb-4 text-black">Быстрый расчет стоимости</h3>
            <div className="space-y-4">
                <div>
                    <Input
                        required
                        name="name"
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-gray-50 border-gray-200 text-black placeholder:text-gray-400 focus-visible:ring-primary"
                    />
                </div>
                <div>
                    <Input
                        required
                        name="phone"
                        type="tel"
                        placeholder="+7 (999) 000-00-00"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-gray-50 border-gray-200 text-black placeholder:text-gray-400 focus-visible:ring-primary"
                    />
                </div>
                <div>
                    <Input
                        required
                        name="equipment"
                        placeholder="Какая техника нужна?"
                        value={formData.equipment}
                        onChange={handleChange}
                        className="bg-gray-50 border-gray-200 text-black placeholder:text-gray-400 focus-visible:ring-primary"
                    />
                </div>
                <Button disabled={loading} type="submit" className="w-full h-12 text-base shadow-md font-bold bg-primary text-black hover:bg-[#e6b800]">
                    {loading ? "Отправка..." : "Получить расчет"}
                </Button>
                <p className="text-xs text-gray-500 text-center mt-4">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
            </div>
        </form>
    );
}
