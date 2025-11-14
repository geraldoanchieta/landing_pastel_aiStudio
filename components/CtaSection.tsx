import React from 'react';
import { CheckIcon } from './Icons';

const guarantees = [
    "Resposta em até 24h",
    "Orçamento sem compromisso",
    "Primeira consultoria grátis"
];

const CtaSection: React.FC = () => {
    return (
        <section className="py-20 lg:py-32 yellow-gradient">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto bg-accent text-secondary p-8 md:p-12 rounded-2xl shadow-2xl">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <div data-aos="fade-right">
                            <h2 className="text-4xl font-extrabold mb-4">Pronto para fazer seu <span className="text-primary">pedido?</span></h2>
                            <p className="text-secondary/70 mb-8">
                                Não deixe sua ideia esfriar. Vamos transformar seu projeto em realidade ainda esta semana.
                            </p>
                            <div className="space-y-3">
                                {guarantees.map((guarantee, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <CheckIcon className="w-6 h-6 text-primary" />
                                        <span>{guarantee}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <form data-aos="fade-left" className="space-y-4">
                            <div>
                                <label htmlFor="name" className="sr-only">Nome</label>
                                <input type="text" id="name" placeholder="Nome" className="w-full p-3 bg-white/10 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-secondary/60"/>
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">Email</label>
                                <input type="email" id="email" placeholder="Email" className="w-full p-3 bg-white/10 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-secondary/60"/>
                            </div>
                            <div>
                                <label htmlFor="phone" className="sr-only">Telefone</label>
                                <input type="tel" id="phone" placeholder="Telefone" className="w-full p-3 bg-white/10 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-secondary/60"/>
                            </div>
                            <div>
                                <label htmlFor="project-type" className="sr-only">Tipo de projeto</label>
                                <select id="project-type" className="w-full p-3 bg-white/10 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary text-secondary/60">
                                    <option>Tipo de projeto</option>
                                    <option>Landing Page</option>
                                    <option>MVP</option>
                                    <option>IA & Chatbot</option>
                                    <option>Software customizado</option>
                                </select>
                            </div>
                            <button type="submit" className="w-full bg-primary text-accent font-bold py-3 rounded-lg transition-transform hover:scale-105 transform hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-primary/50">
                                Quero meu orçamento agora
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;
