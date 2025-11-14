import React from 'react';

const FoundersSection: React.FC = () => {
    return (
        <section className="py-20 lg:py-32 bg-white">
            <div className="container mx-auto px-6 text-center">
                <h2 data-aos="fade-up" className="text-4xl md:text-5xl font-extrabold text-accent mb-6 tracking-tight">Quem <span className="text-primary">cozinha</span> seu código</h2>
                <p data-aos="fade-up" data-aos-delay="100" className="text-lg text-accent/70 mb-12 max-w-3xl mx-auto">
                    Geraldo e Pedro. Dois devs que cansaram de prazos impossíveis e promessas vazias. Criamos a Pastel para entregar o que os outros só prometem: velocidade real com qualidade real.
                </p>
                <div className="flex flex-col md:flex-row justify-center items-center gap-12">
                    <div data-aos="fade-right" data-aos-delay="200" className="text-center">
                        <img src="https://picsum.photos/seed/geraldo/300/300" alt="Foto do fundador Geraldo" className="w-48 h-48 rounded-full mx-auto mb-4 object-cover shadow-lg border-4 border-primary"/>
                        <h3 className="text-2xl font-bold">Geraldo</h3>
                        <p className="text-accent/60">Cozinheiro-Chefe de Código</p>
                    </div>
                    <div data-aos="fade-left" data-aos-delay="300" className="text-center">
                        <img src="https://picsum.photos/seed/pedro/300/300" alt="Foto do fundador Pedro" className="w-48 h-48 rounded-full mx-auto mb-4 object-cover shadow-lg border-4 border-primary"/>
                        <h3 className="text-2xl font-bold">Pedro</h3>
                        <p className="text-accent/60">Mestre dos Ingredientes Digitais</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FoundersSection;
