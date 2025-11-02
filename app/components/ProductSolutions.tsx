import { Zap, Brush, Smartphone, Dog, BatteryCharging, CheckCircle } from 'lucide-react'; 
// Asegúrate de que estos iconos de Lucide React estén instalados:
// npm install lucide-react

// Definición de la interfaz para cada característica detallada
interface DetailedFeature {
  title: string;
  icon: React.ElementType; // Tipo para componentes de icono
  color: string;
  description: string;
}

// Estructura de la descripción para facilitar el mapeo en React
const detailedFeatures: DetailedFeature[] = [
  {
    title: "Limpieza 2 en 1: Aspirar y Fregar",
    icon: Brush,
    color: "text-blue-500",
    description: "Integra tecnología avanzada de trapeador controlado electrónicamente, eliminando huellas y suciedad. Con tanque de alta capacidad y ajuste de agua de cuatro etapas para adaptarse a cada tipo de suelo y mancha."
  },
  {
    title: "Control Inteligente: Manos Libres Total",
    icon: Smartphone,
    color: "text-green-500",
    description: "Múltiples modos de limpieza y ajustes personalizados desde tu smartphone. Compatible con Alexa y Google Assistant para que comandes la limpieza con tu voz. ¡Tu asistente personal está aquí!"
  },
  {
    title: "Potencia de Succión de 4000 Pa",
    icon: Zap,
    color: "text-red-500",
    description: "Un sistema de 3 puntos y succión de 4000 Pa que garantiza suelos libres de suciedad, polvo y migas. Ideal para madera, suelos duros y alfombras de pelo bajo, incluso en rincones difíciles."
  },
  {
    title: "Automatización Avanzada y Recarga Inteligente",
    icon: BatteryCharging,
    color: "text-yellow-500",
    description: "Sistema de detección y algoritmos que permiten inicio programado, detección de obstáculos y retorno automático a la recarga. Disfruta de un hogar limpio sin ninguna preocupación ni intervención."
  },
  {
    title: "¡Olvídate del Pelo de Mascotas enredado!",
    icon: Dog,
    color: "text-indigo-500",
    description: "Diseño único sin enredos que elimina la molestia de limpiar el pelo de perro o gato de los cepillos. Los cepillos laterales eléctricos lo recogen de manera eficiente, dejando tu hogar impecable."
  },
];

export default function ProductSolutions() {
  return (
    <section className="py-16 px-6 bg-white" id="solucion"> {/* Agregamos un ID para el CTA de la sección de problemas */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-4">
          La <span className="text-blue-600">Solución Definitiva</span> a tus Problemas de Limpieza
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-xl">
          El ROPVACNIC Robot S1 no solo limpia; te devuelve tu tiempo y la tranquilidad de un hogar impecable.
        </p>

        {/* Grid de 2 Columnas para los Beneficios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {detailedFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex p-6 border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition duration-300"
            >
              <feature.icon className={`h-8 w-8 ${feature.color} flex-shrink-0 mt-1`} aria-hidden="true" />
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Garantía de Fábrica */}
        <div className="text-center mt-12 p-4 bg-gray-50 rounded-lg">
            <p className="text-lg font-semibold text-gray-700">
                <CheckCircle className="inline-block h-6 w-6 text-green-600 mr-2" />
                Tu inversión está protegida: <span className="font-extrabold text-green-600">30 días de Garantía de Fábrica</span>
            </p>
        </div>
      </div>
    </section>
  );
}