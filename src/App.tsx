/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {motion} from 'motion/react';
import {useState} from 'react';
import {Calendar, Utensils, MessageCircle, Heart, User, CheckCircle} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center p-6 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl">S</div>
          <span className="text-xl font-semibold tracking-tight text-emerald-900">Dra. Sofía Martínez</span>
        </div>
        <nav className="flex gap-6 text-sm font-medium uppercase tracking-widest text-stone-500">
          <a href="#hero" className="hover:text-emerald-700">Inicio</a>
          <a href="#services" className="hover:text-emerald-700">Servicios</a>
          <a href="#about" className="hover:text-emerald-700">Sobre Mí</a>
          <a href="#contact" className="hover:text-emerald-700">Contacto</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative p-10 bg-emerald-900 flex flex-col justify-end min-h-[500px] rounded-3xl mx-6">
        <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} className="z-10 text-white max-w-2xl">
          <h1 className="text-5xl font-serif italic leading-tight mb-4 tracking-tight">Tu salud comienza en tu plato.</h1>
          <p className="text-emerald-100 text-lg mb-8 leading-relaxed">
            Nutrición funcional y personalizada para transformar tu vida y recuperar tu energía vital.
          </p>
          <button id="cta-hero" className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-3 rounded-full font-medium transition-colors shadow-lg">
            Agendar Consulta
          </button>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 mb-12 text-center">Nuestros Servicios</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {icon: <User />, title: "Consulta Presencial"},
            {icon: <MessageCircle />, title: "Consulta Virtual"},
            {icon: <Utensils />, title: "Plan Nutricional"},
            {icon: <CheckCircle />, title: "Seguimiento Mensual"}
          ].map((service, i) => (
            <motion.div key={i} whileHover={{y: -5}} className="bg-white p-8 rounded-2xl border border-stone-200 text-center shadow-sm">
              <div className="text-emerald-600 mb-4 flex justify-center">{service.icon}</div>
              <h3 className="font-semibold text-stone-800">{service.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="py-20 bg-emerald-50 text-stone-800 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-64 h-64 bg-emerald-100 rounded-full flex items-center justify-center">
            <User size={100} className="text-emerald-700" />
          </div>
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700 mb-4">Sobre Mí</h2>
            <p className="font-serif text-xl italic text-emerald-900 mb-4">"Mi misión es reconciliarte con la comida."</p>
            <p className="text-stone-600 leading-relaxed">
              Soy la Dra. Sofia Martínez, especialista en Nutrición Clínica y Funcional. 
              Con más de 10 años ayudando a mis pacientes a mejorar su relación con la comida y alcanzar sus objetivos de salud.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 px-6 max-w-2xl mx-auto">
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 mb-12 text-center">Contáctame</h2>
        <form id="contact-form" className="space-y-4 bg-stone-900 p-8 rounded-3xl text-white">
          <input type="text" placeholder="Nombre Completo" className="w-full bg-stone-800 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500" />
          <input type="email" placeholder="Correo Electrónico" className="w-full bg-stone-800 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500" />
          <textarea placeholder="¿En qué puedo ayudarte?" rows={4} className="w-full bg-stone-800 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500"></textarea>
          <button type="submit" className="w-full bg-white text-stone-900 font-bold py-3 rounded-xl hover:bg-emerald-400 transition-colors">Enviar Mensaje</button>
        </form>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-stone-900 text-stone-400 py-12 text-center text-xs uppercase tracking-widest">
        <p>&copy; 2026 Dra. Sofia Martínez — Nutrición Consciente</p>
        <div className="mt-4 flex justify-center gap-6">
          <a href="#" className="hover:text-emerald-400">Instagram</a>
          <a href="#" className="hover:text-emerald-400">Facebook</a>
        </div>
      </footer>
    </div>
  );
}
