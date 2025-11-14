import React from 'react';

const steps = [
    { emoji: "🍽️", title: "Você faz o pedido", description: "Reunião de briefing" },
    { emoji: "👨‍🍳", title: "A gente cozinha", description: "Desenvolvimento ágil" },
    { emoji: "🔥", title: "Sai quentinho", description: "Entrega e deploy" },
    { emoji: "😋", title: "Você aprova", description: "Ajustes e satisfação garantida" }
];

const ProcessSection: React.FC = () => {
    return (
        <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
             <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 data-aos="fade-up" className="text-4xl md:text-5xl font-extrabold text-accent mb-6 tracking-tight">Do pedido ao prato: <span className="text-primary">nosso processo</span></h2>
                </div>
                <div className="relative">
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-primary/30 -translate-y-1/2"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {steps.map((step, index) => (
                            <div key={index} data-aos="fade-up" data-aos-delay={100 * index} className="relative bg-white p-6 rounded-xl border-2 border-gray-100 text-center shadow-lg transition-shadow hover:shadow-2xl">
                               <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 bg-primary rounded-full flex items-center justify-center text-3xl shadow-md border-4 border-white">
                                   {step.emoji}
                               </div>
                               <h3 className="text-xl font-bold mt-8 mb-2 text-accent">{step.title}</h3>
                               <p className="text-accent/60">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
             </div>
        </section>
    );
};

export default ProcessSection;
