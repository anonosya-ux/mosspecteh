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
            await fetch("https://spectehmosobl.anonosya.workers.dev", {
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
            <div className="bg-primary/10 border border-primary text-primary-foreground p-6 rounded-lg text-center">
                <h3 className="font-bold text-xl mb-2 text-foreground">Заявка отправлена!</h3>
                <p className="text-foreground">Мы свяжемся с вами в течение 10 минут для расчета стоимости.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-card border border-border p-6 rounded-xl shadow-lg w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">Быстрый расчет стоимости</h3>
            <div className="space-y-4">
                <div>
                    <Input
                        required
                        name="name"
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={handleChange}
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
                    />
                </div>
                <div>
                    <Input
                        required
                        name="equipment"
                        placeholder="Какая техника нужна?"
                        value={formData.equipment}
                        onChange={handleChange}
                    />
                </div>
                <Button disabled={loading} type="submit" className="w-full h-12 text-base shadow-md">
                    {loading ? "Отправка..." : "Получить расчет"}
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-4">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
            </div>
        </form>
    );
}
