import Image from 'next/image';
import { Clock, Coffee } from 'lucide-react';
import imagen1 from '@/public/img/mujer_cansada.png'; 


export default function BusyProfessionalSection() {
  return (
    // Sección con fondo oscuro para diferenciarla de otras secciones
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

        {/* Estructura de Doble Columna (Invertida en móviles) */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Columna 1: Imagen (Izquierda en desktop, arriba en mobile) */}
          <div className="w-full lg:w-1/2">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={imagen1}
                alt="Mujer profesional cansada en el sofá con el Robot Ropvacnic S1 limpiando."
                width={1024} 
                height={1024} 
                className="w-full h-auto object-cover max-h-[550px]"
              />
            </div>
          </div>

          {/* Columna 2: Texto y Beneficios (Derecha en desktop, abajo en mobile) */}
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
            
            <a
                href="#comprar"
                className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-lg px-10 py-4 rounded-full transition-all shadow-lg transform hover:scale-105"
            >
                ¡Quiero mi Asistente de Limpieza!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}