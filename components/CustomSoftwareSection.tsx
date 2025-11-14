import React from 'react';

const projectTypes = [
    "Sistemas web personalizados",
    "Integrações e APIs",
    "Dashboards e painéis",
    "Automações de processos"
];

const CustomSoftwareSection: React.FC = () => {
    return (
        <section className="py-20 lg:py-32 yellow-gradient">
            <div className="container mx-auto px-6 text-center">
                <h2 data-aos="fade-up" className="text-4xl md:text-5xl font-extrabold text-accent mb-6 tracking-tight">O sistema que você precisa, <br className="hidden md:block" /> não o que <span className="text-primary">existe</span></h2>
                <p data-aos="fade-up" data-aos-delay="100" className="text-lg text-accent/70 mb-12 max-w-3xl mx-auto">
                    Chega de adaptar seu negócio ao software. Desenvolvemos a solução exata para o seu problema. Escalável, integrada e 100% sua.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
                    {projectTypes.map((type, index) => (
                        <div key={index} data-aos="fade-up" data-aos-delay={200 + index * 100} className="p-8 bg-white rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex items-center justify-center h-40" data-cursor-hover>
                            <h3 className="font-bold text-xl text-accent">{type}</h3>
                        </div>
                    ))}
                </div>
                <div data-aos="fade-up" data-aos-delay="600">
                    <button className="bg-accent text-secondary font-bold py-4 px-10 rounded-lg transition-transform hover:scale-105 transform hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-accent/50">
                        Agendar reunião estratégica
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CustomSoftwareSection;
