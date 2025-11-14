import React, { useEffect, useRef } from 'react';

const HeroSection: React.FC = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (headlineRef.current) {
        const text = headlineRef.current.innerText;
        headlineRef.current.innerText = '';
        const chars = text.split('').map(char => {
            const span = document.createElement('span');
            span.innerText = char === ' ' ? '\u00A0' : char;
            span.className = 'char inline-block opacity-0 transform translate-y-8';
            headlineRef.current?.appendChild(span);
            return span;
        });

        window.gsap.to(chars, {
            opacity: 1,
            y: 0,
            stagger: 0.03,
            duration: 0.5,
            ease: 'power3.out',
            delay: 0.5
        });
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white text-center px-6">
       <div 
        ref={el => {
            if (el) {
                window.gsap.to(el, {
                    y: -100,
                    ease: "none",
                    scrollTrigger: {
                        trigger: "body",
                        start: "top top",
                        end: "bottom top",
                        scrub: 1.5,
                    },
                });
            }
        }}
        className="absolute -top-20 -left-20 w-60 h-60 bg-primary/20 rounded-full filter blur-3xl opacity-50"
       />
       <div 
        ref={el => {
            if (el) {
                window.gsap.to(el, {
                    y: 100,
                    x: 50,
                    ease: "none",
                    scrollTrigger: {
                        trigger: "body",
                        start: "top top",
                        end: "bottom top",
                        scrub: 2,
                    },
                });
            }
        }}
        className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/30 rounded-full filter blur-3xl opacity-50"
       />

      <div className="relative z-10 max-w-4xl">
        <div data-aos="fade-down" data-aos-delay="1200" className="inline-block bg-primary/20 text-primary-dark font-semibold px-4 py-2 rounded-full text-sm mb-6">
          Entrega em até 7 dias
        </div>
        <h1 ref={headlineRef} className="text-5xl md:text-7xl lg:text-8xl font-black text-accent mb-4 tracking-tighter">
          Seu app feito na hora. De verdade.
        </h1>
        <p data-aos="fade-up" data-aos-delay="1000" className="text-lg md:text-xl max-w-2xl mx-auto text-accent/70 mb-8">
          Aqui não é pastel - aqui é Pastel. Desenvolvimento ágil, entrega rápida, qualidade quentinha.
        </p>
        <div data-aos="fade-up" data-aos-delay="1200" className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-primary text-accent font-bold py-3 px-8 rounded-lg w-full sm:w-auto transition-transform hover:scale-105 transform hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-primary/50">
            Fazer meu pedido
          </button>
          <button className="bg-accent/10 text-accent font-bold py-3 px-8 rounded-lg w-full sm:w-auto transition-transform hover:scale-105 transform hover:bg-accent/20 focus:outline-none focus:ring-4 focus:ring-accent/20">
            Ver o cardápio
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
