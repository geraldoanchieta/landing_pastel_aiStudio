import React from 'react';
import { LightningIcon, TargetIcon, PhoneIcon, SearchIcon } from './Icons';

const benefits = [
    { icon: LightningIcon, text: "Carregamento ultrarrápido" },
    { icon: TargetIcon, text: "Otimizada para conversão" },
    { icon: PhoneIcon, text: "Responsiva e mobile-first" },
    { icon: SearchIcon, text: "SEO que coloca você no topo" }
];

const LandingPagesSection: React.FC = () => {
    return (
        <section className="py-20 lg:py-32 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left">
                        <h2 data-aos="fade-up" className="text-4xl md:text-5xl font-extrabold text-accent mb-6 tracking-tight">A vitrine que vende <span className="text-primary">24/7</span></h2>
                        <p data-aos="fade-up" data-aos-delay="100" className="text-lg text-accent/70 mb-8 max-w-lg mx-auto lg:mx-0">
                            Enquanto você dorme, sua landing page trabalha. Design irresistível, copy persuasivo e otimização para conversão. Não é só bonito - é uma máquina de vendas.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {benefits.map((benefit, index) => (
                                <div key={index} data-aos="fade-up" data-aos-delay={200 + index * 100} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                                    <div className="bg-primary/20 text-primary-dark p-3 rounded-full">
                                        <benefit.icon className="w-6 h-6" />
                                    </div>
                                    <span className="font-semibold">{benefit.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div data-aos="zoom-in-up" className="relative h-96">
                        <img src="https://picsum.photos/seed/devices/600/400" alt="Mockup de Landing Page em Tablet" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500"/>
                        <img src="https://picsum.photos/seed/phone/200/400" alt="Mockup de Landing Page em Celular" className="absolute bottom-0 -left-10 w-32 rounded-lg shadow-2xl transform rotate-[-10deg] hover:rotate-[-5deg] hover:scale-110 transition-transform duration-500"/>
                        <div className="absolute top-10 -right-10 bg-white shadow-xl rounded-lg p-3 text-sm font-semibold transform rotate-[8deg] hover:rotate-[2deg] hover:scale-110 transition-transform duration-500">
                           <span className="text-green-500">+25%</span> Conversão
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LandingPagesSection;
