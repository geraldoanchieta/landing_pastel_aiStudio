import React, { useEffect, useRef } from 'react';
import { AnimatedCounter } from './AnimatedCounter';

const AiSection: React.FC = () => {
    return (
        <section className="py-20 lg:py-32 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div data-aos="fade-right" className="bg-gray-100 p-6 rounded-2xl shadow-lg h-[450px] flex flex-col">
                        <div className="flex-shrink-0 flex items-center gap-3 p-4 border-b border-gray-200">
                          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-accent font-bold text-xl">P</div>
                          <div>
                            <p className="font-bold">PastelBot</p>
                            <p className="text-sm text-green-500 flex items-center gap-1"><span className="w-2 h-2 bg-green-500 rounded-full"></span>Online</p>
                          </div>
                        </div>
                        <div className="flex-grow space-y-4 p-4 overflow-y-auto">
                            <div className="flex justify-start">
                                <p className="bg-gray-200 p-3 rounded-lg max-w-xs">Olá! Como posso te ajudar a vender mais hoje?</p>
                            </div>
                            <div className="flex justify-end">
                                <p className="bg-primary text-accent p-3 rounded-lg max-w-xs">Gostaria de saber mais sobre o plano Pro.</p>
                            </div>
                             <div className="flex justify-start">
                                <p className="bg-gray-200 p-3 rounded-lg max-w-xs">Claro! O plano Pro é perfeito para escalar seu negócio. Ele inclui automações ilimitadas e suporte prioritário. Quer que eu prepare o checkout para você?</p>
                            </div>
                        </div>
                         <div className="flex-shrink-0 p-4 border-t border-gray-200">
                           <input type="text" placeholder="Digite sua mensagem..." className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                         </div>
                    </div>
                    <div data-aos="fade-left" className="text-center lg:text-left">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-accent mb-6 tracking-tight">IA que vende enquanto você <span className="text-primary">escala</span></h2>
                        <p className="text-lg text-accent/70 mb-8 max-w-lg mx-auto lg:mx-0">
                            Atendimento 24/7, respostas instantâneas, conversão automática. Seus concorrentes ainda deixam clientes esperando? Você não. Cada segundo conta - e cada conversa pode virar venda.
                        </p>
                        <div className="flex justify-center lg:justify-start gap-8 mb-8">
                           <div className="text-center">
                                <p className="text-4xl font-bold text-primary"><AnimatedCounter endValue={24} />/7</p>
                                <p className="text-accent/60">Atendimento</p>
                           </div>
                           <div className="text-center">
                                <p className="text-4xl font-bold text-primary">+<AnimatedCounter endValue={300} />%</p>
                                <p className="text-accent/60">em Conversão</p>
                           </div>
                        </div>
                        <button className="bg-primary text-accent font-bold py-3 px-8 rounded-lg transition-transform hover:scale-105 transform hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-primary/50">
                            Automatizar atendimento
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AiSection;
