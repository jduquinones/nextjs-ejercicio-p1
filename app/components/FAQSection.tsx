import React from 'react';
import { HelpCircle, Layers, Wifi, Trash2 } from 'lucide-react'; 

// Definición de la interfaz para cada pregunta/respuesta
interface FAQItem {
  question: string;
  answer: string;
  icon: React.ElementType;
}

const faqItems: FAQItem[] = [
  {
    question: "¿El Ropvacnic S1 realmente aspira y friega al mismo tiempo?",
    answer: "Sí. Cuenta con un diseño 2 en 1 que permite aspirar el polvo y la suciedad con su potente succión de 4000 Pa, mientras que simultáneamente utiliza su tanque de agua controlado electrónicamente para pasar la mopa y fregar.",
    icon: Layers,
  },
  {
    question: "¿Es apto para hogares con mascotas y alfombras?",
    answer: "Absolutamente. El robot S1 está diseñado específicamente para dueños de mascotas, con un sistema de cepillos que evita enredos de pelo. Además, es apto para alfombras de pelo bajo, ajustando la succión automáticamente si es necesario.",
    icon: Trash2,
  },
  {
    question: "¿Cómo se controla el robot y con qué dispositivos es compatible?",
    answer: "Se controla fácilmente a través de la aplicación móvil (Wi-Fi), que permite programar horarios de limpieza y personalizar modos. También es compatible con comandos de voz a través de asistentes inteligentes como Google Assistant y Alexa.",
    icon: Wifi,
  },
  {
    question: "¿El robot se cae por las escaleras o choca con los muebles?",
    answer: "No. El Ropvacnic S1 está equipado con sensores avanzados de obstáculos y anticaídas. Estos sensores le permiten navegar inteligentemente alrededor de muebles y detectar bordes y escaleras para evitar caídas.",
    icon: HelpCircle,
  },
  {
    question: "¿Cuál es la duración real de la batería?",
    answer: "La batería tiene una duración de hasta 2 horas (120 minutos) con una sola carga. Si la batería se agota a mitad de la limpieza, el robot regresará automáticamente a su base de carga y reanudará la tarea una vez recargado.",
    icon: HelpCircle,
  },
];

export default function FAQSection() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-4">
          Preguntas <span className="text-blue-600">Frecuentes</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          ¿Tienes dudas? Resuelve aquí las preguntas más comunes sobre el Ropvacnic S1.
        </p>

        {/* Contenedor de las preguntas (diseño de Acordeón) */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm transition duration-300 hover:border-blue-300"
            >
              {/* Pregunta */}
              <button className="flex justify-between items-start w-full text-left focus:outline-none">
                <div className="flex items-center">
                  <item.icon className={`h-6 w-6 text-blue-500 flex-shrink-0 mr-3`} aria-hidden="true" />
                  <span className="text-lg font-semibold text-gray-800">{item.question}</span>
                </div>
                {/* Aquí iría el ícono de '+' o '-' para abrir/cerrar */}
                <span className="text-2xl text-gray-500 font-light">+</span> 
              </button>

              {/* Respuesta (Visible por defecto, en un Acordeón real estaría oculto) */}
              <div className="mt-4 pt-3 border-t border-gray-100 ml-9">
                <p className="text-gray-600">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA final para el soporte */}
        <div className="text-center mt-12">
            <p className="text-gray-700 mb-4">
                ¿Aún tienes preguntas? Nuestro equipo de soporte está listo para ayudarte.
            </p>
            <a
                href="#contacto"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-full transition-all shadow-lg"
            >
                Contactar a Soporte
            </a>
        </div>

      </div>
    </section>
  );
}