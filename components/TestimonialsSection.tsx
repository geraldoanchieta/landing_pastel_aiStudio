import React from 'react';
import { StarIcon } from './Icons';

const testimonials = [
    {
        photo: "https://picsum.photos/seed/client1/100/100",
        name: "Juliana Souza",
        company: "CEO da InovaTech",
        text: "Incrível! A Pastel entregou nosso MVP em uma semana, como prometido. A qualidade é impecável e a velocidade, surreal. Recomendo de olhos fechados!",
        rating: 5,
    },
    {
        photo: "https://picsum.photos/seed/client2/100/100",
        name: "Marcos Andrade",
        company: "Fundador da StartupX",
        text: "Eles realmente entendem a urgência de uma startup. O processo foi transparente e ágil. O 'pastel' deles é o melhor do mercado!",
        rating: 5,
    },
    {
        photo: "https://picsum.photos/seed/client3/100/100",
        name: "Carla Ferreira",
        company: "Diretora de Marketing da Vende+",
        text: "Nossa landing page nova converte 3x mais. O design ficou moderno e o carregamento é instantâneo. Trabalho excepcional da equipe Pastel.",
        rating: 5,
    }
];

const TestimonialsSection: React.FC = () => {
    return (
        <section className="py-20 lg:py-32 yellow-gradient">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 data-aos="fade-up" className="text-4xl md:text-5xl font-extrabold text-accent mb-6 tracking-tight">Quem já provou, <span className="text-primary">recomenda</span></h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} data-aos="fade-up" data-aos-delay={100 * index} className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-start h-full transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
                            <div className="flex mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <StarIcon key={i} className="w-5 h-5 text-primary" />
                                ))}
                            </div>
                            <p className="text-accent/80 mb-6 flex-grow">"{testimonial.text}"</p>
                            <div className="flex items-center mt-auto">
                                <img src={testimonial.photo} alt={`Foto de ${testimonial.name}`} className="w-12 h-12 rounded-full mr-4 object-cover"/>
                                <div>
                                    <p className="font-bold text-accent">{testimonial.name}</p>
                                    <p className="text-sm text-accent/60">{testimonial.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
