// Nota: Usaremos el tipo React.FC para definir el componente en TSX
import React from 'react';

// Define la interfaz para las especificaciones
interface Spec {
  name: string;
  value: string;
}

export default function Specs() {
  // Características más relevantes extraídas y optimizadas para el marketing
  const specs: Spec[] = [
    { name: "Presión de Succión", value: "4 kPa (4000 Pa)" },
    { name: "Limpieza 2 en 1", value: "Aspira y Trapea (Mopa Eléctrica)" },
    { name: "Autonomía de Batería", value: "2 horas (120 min) / Carga Automática" },
    { name: "Apto para el Hogar", value: "Alfombras y Pelo de Mascotas" },
    { name: "Navegación Inteligente", value: "Sensor de Obstáculos y Anticaídas" },
    { name: "Control Total", value: "Wi-Fi, App Móvil y Control por Voz" }, // Combina Con Wi-Fi, App y Control por voz
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-black to-gray-900 text-center text-white">
      <h2 className="text-4xl font-bold mb-10">
        <span className="text-blue-400">Especificaciones</span> Técnicas del Ropvacnic S1
      </h2>
      
      {/* Grid de 2 Columnas para las especificaciones (3 columnas en desktop si es necesario) */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {specs.map((s, i) => (
          <div
            key={i}
            className="border border-gray-800 rounded-xl py-6 px-4 bg-gray-950 shadow-lg hover:border-blue-500 transition duration-300"
          >
            <h3 className="text-blue-400 font-semibold text-lg uppercase tracking-wider">{s.name}</h3>
            <p className="text-xl mt-2 font-bold">{s.value}</p>
          </div>
        ))}
      </div>

      {/* Accesorios Destacados como un elemento adicional */}
      <div className="max-w-4xl mx-auto mt-12 bg-gray-800 p-6 rounded-xl text-left shadow-2xl">
          <h3 className="text-xl font-bold text-green-400 mb-3">
              Incluye Kit Completo de Accesorios
          </h3>
          <p className="text-gray-300">
             <span className="font-semibold">Destacados:</span> Tanque de Agua Controlado Eléctricamente, Filtro HEPA de repuesto, Paño de Mopa, 4 Cepillos Laterales y Base de Carga.
          </p>
      </div>

    </section>
  );
}