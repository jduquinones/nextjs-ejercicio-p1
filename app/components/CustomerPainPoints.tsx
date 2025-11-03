import { Clock, Coffee } from 'lucide-react';

export default function BusyProfessionalSection() {
  return (
    <section className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-white mb-2">
                Tu Vida no Gira Alrededor de la Escoba
            </h2>
            <p className="text-xl text-gray-400">
                La solución para quienes trabajan sin parar y merecen descansar.
            </p>
        </div>

        {/* Estructura de Doble Columna */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Columna 1: Video (Izquierda en desktop, arriba en mobile) */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-[400px] aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl border-2 border-blue-500/30">
              {/* Video */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                {/* REEMPLAZA CON LA RUTA DE TU VIDEO */}
                <source src="/video/Aspiradora.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
              
              {/* Overlay inferior con badge */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <div className="inline-block px-4 py-1.5 bg-blue-500/90 rounded-full text-xs font-semibold mb-2">
                  ⚡ EN ACCIÓN
                </div>
                <div className="text-sm opacity-90">
                  Limpieza inteligente en tiempo real
                </div>
              </div>
            </div>
          </div>

          {/* Columna 2: Texto y Beneficios */}
          <div className="w-full lg:w-1/2 lg:pl-8">
            <h3 className="text-3xl font-bold mb-6 leading-tight">
                <span className="text-blue-500">Gana Tiempo, No Músculos.</span> Limpieza programada a tu ritmo.
            </h3>
            
            <div className="space-y-6">
                
                <div className="flex items-start">
                    <Clock className="h-7 w-7 text-yellow-400 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                        <h4 className="text-xl font-semibold mb-1">Libera tu Agenda</h4>
                        <p className="text-gray-300">
                            Programa la limpieza mientras estás en la oficina. Al llegar a casa, el piso estará impecable y tu única tarea será relajarte.
                        </p>
                    </div>
                </div>

                <div className="flex items-start">
                    <Coffee className="h-7 w-7 text-yellow-400 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                        <h4 className="text-xl font-semibold mb-1">Adiós al Estrés de la Suciedad</h4>
                        <p className="text-gray-300">
                            Gracias a los 4000Pa de succión, el polvo acumulado y las migas de la semana son historia. El robot hace el trabajo pesado por ti.
                        </p>
                    </div>
                </div>

            </div>
            
            
             <a   href="#comprar"
                className="mt-8 inline-block 
                           w-full lg:w-auto
                           bg-blue-600 hover:bg-blue-700 
                           text-white font-extrabold 
                           text-lg px-10 py-4 
                           rounded-full transition-all shadow-lg transform hover:scale-105 
                           text-center"
            >
                ¡Quiero mi Asistente de Limpieza!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}