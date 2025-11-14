import React from 'react';
import { RocketIcon, MoneyIcon, CheckIcon, CycleIcon } from './Icons';

const features = [
    { icon: RocketIcon, text: "Entrega em até 1 semana" },
    { icon: MoneyIcon, text: "Parcelamento facilitado" },
    { icon: CheckIcon, text: "Validação rápida de mercado" },
    { icon: CycleIcon, text: "Iterações ágeis" }
];

const MvpSection: React.FC = () => {
    return (
        <section className="py-20 lg:py-32 yellow-gradient">
            <div className="container mx-auto px-6 text-center">
                <h2 data-aos="fade-up" className="text-4xl md:text-5xl font-extrabold text-accent mb-6 tracking-tight">Da ideia ao mercado em <span className="text-primary">7 dias</span></h2>
                <p data-aos="fade-up" data-aos-delay="100" className="text-lg text-accent/70 mb-12 max-w-3xl mx-auto">
                    Tem uma ideia queimando na cabeça? A gente tira do papel antes que esfrie. MVP completo, testável e pronto para validar seu negócio. Pagamento parcelado porque sabemos que startups precisam de fôlego.
                </p>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
                    {features.map((feature, index) => (
                        <div key={index} data-aos="fade-up" data-aos-delay={200 + index * 100} className="flex flex-col items-center gap-4 p-6 bg-white rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl" data-cursor-hover>
                            <div className="bg-primary/20 text-primary-dark p-4 rounded-full">
                                <feature.icon className="w-8 h-8" />
                            </div>
                            <span className="font-bold text-center">{feature.text}</span>
                        </div>
                    ))}
                </div>
                <div data-aos="fade-up" data-aos-delay="600">
                    <button className="bg-accent text-secondary font-bold py-4 px-10 rounded-lg transition-transform hover:scale-105 transform hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-accent/50">
                        Quero validar minha ideia
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MvpSection;
