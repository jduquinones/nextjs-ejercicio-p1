import Image from 'next/image';

// Asumiendo que guardaste la imagen en 'public/img/robot.png'
import heroImage from '@/public/img/robot.webp'; 

export default function Hero() {
  return (
    // Ajusté el contenedor principal para centrar el contenido y usar un fondo oscuro.
    <section className="py-16 px-6 bg-gray-900">
      
      {/* Contenedor principal para las dos columnas */}
      {/* 'lg:flex' y 'lg:text-left' activan la disposición horizontal y alineación a la izquierda en pantallas grandes */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">

        {/* Columna 2: Contenido de Texto y CTA (Izquierda) */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 leading-snug text-white">
            Robot Aspirador Ropvacnic S1 2 En 1
            <span className="text-blue-500 block mt-2">Tu hogar, impecable sin esfuerzo.</span>
          </h1>
          <p className="text-gray-300 mb-8 text-xl">
            ¡Potencia 4000Pa y Navegación Láser! Olvídate de la limpieza manual.
            <span className='block mt-2 font-semibold'>Aspira y limpia al mismo tiempo con la máxima precisión.</span>
          </p>
          <a
            href="#comprar"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-lg px-10 py-4 rounded-full transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            ¡Comprar Ropvacnic S1 ahora!
          </a>
        </div>

        {/* Columna 1: Imagen (Derecha) */}
        <div className="w-full lg:w-1/2">
          {/* Aquí usaremos la imagen del robot, que es la más apropiada para el Hero */}
          <div className="w-full rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-transform duration-500">
            <Image
              src={heroImage}
              alt="Robot Aspirador Ropvacnic S1 con su base de carga, destacando su diseño y tecnología."
              width={1024}
              height={1024}
              // Ajusta las clases de la imagen. La hacemos ligeramente más pequeña en el diseño de dos columnas.
              className="w-full h-auto object-cover max-h-[500px]" 
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}