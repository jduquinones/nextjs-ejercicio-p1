import React from 'react';

// Define la interfaz para una reseña
interface Review {
  text: string;
  date: string;
  stars: number;
}

// Datos basados en tu nueva imagen de Mercado Libre
const productData = {
  rating: 4.5,
  totalReviews: 2, // Basado en "2 calificaciones" de la imagen
  featuredReviews: [
    { text: "Este robot me parece fabuloso. Muy eficaz, 3 niveles de succión y muy fácil de limpiar. Muy buena inversión!!", date: "06 nov. 2024", stars: 5 },
    { text: "Excelente producto muy práctico.", date: "22 oct. 2025", stars: 5 },
    { text: "Me ha gustado.", date: "09 oct. 2025", stars: 4 }, 
    { text: "Me encantó tal cual lo esperaba.", date: "25 ago. 2025", stars: 5 },
  ] as Review[],
};

// Función CORREGIDA para renderizar estrellas usando Emojis Unicode (★ y ☆)
const renderStars = (rating: number): React.ReactElement => {
  const fullStar = '★'; // Estrella rellena
  const emptyStar = '☆'; // Estrella vacía
  const maxStars = 5;
  let starsOutput = '';

  for (let i = 1; i <= maxStars; i++) {
    // Si la calificación es mayor o igual al índice, es una estrella completa
    if (rating >= i) {
      starsOutput += fullStar;
    } else {
      starsOutput += emptyStar;
    }
  }

  return (
    <div className="flex text-yellow-500 text-lg tracking-wider" aria-label={`Calificación de ${rating} de 5 estrellas`}>
      {/* Usamos un span simple para renderizar la cadena de emojis */}
      <span className="star-rating">{starsOutput}</span>
    </div>
  );
};

// Componente principal de la sección
export default function TestimonialsSection() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          Opiniones Reales de Clientes
        </h2>

        {/* Contenedor principal de 2 columnas (Calificación vs. Comentarios) */}
        <div className="lg:grid lg:grid-cols-3 lg:gap-12">
          
          {/* Columna 1: Calificación General (Ocupa 1/3) */}
          <div className="col-span-1 border-b pb-8 lg:border-b-0 lg:pb-0 lg:pr-8">
            
            {/* Calificación General */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-6xl font-extrabold text-blue-600">
                  {productData.rating}
                </span>
                <div className="flex flex-col">
                  {renderStars(productData.rating)}
                  <span className="text-sm text-gray-500">
                    {productData.totalReviews} Calificaciones
                  </span>
                </div>
              </div>
              
              {/* Barras de progreso de Calificación (Simuladas) */}
              <div className="mt-4 space-y-2">
                {/* 5 Estrellas */}
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-6">5 ★</span>
                  <div className="h-2 bg-gray-200 rounded-full flex-grow mx-2">
                    <div className="h-full bg-blue-500 rounded-full w-[80%]"></div>
                  </div>
                </div>
                {/* 4 Estrellas */}
                 <div className="flex items-center text-sm text-gray-500">
                  <span className="w-6">4 ★</span>
                  <div className="h-2 bg-gray-200 rounded-full flex-grow mx-2">
                    <div className="h-full bg-blue-500 rounded-full w-[20%]"></div>
                  </div>
                </div>
                {/* Y así sucesivamente para 3, 2, 1 estrellas */}
              </div>
            </div>

            {/* CTA de refuerzo aquí es opcional pero útil */}
            <a href="#comprar" className="mt-6 w-full lg:w-auto inline-block text-center bg-green-500 text-white font-bold py-2 rounded-lg hover:bg-green-600 transition">
                ¡Pruébalo tú mismo!
            </a>

          </div> {/* Fin Columna 1 */}

          
          {/* Columna 2: Opiniones Destacadas y Comentarios (Ocupa 2/3) */}
          <div className="col-span-2 mt-8 lg:mt-0 lg:pl-4">
            
            <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-3">
              Opiniones Destacadas ({productData.featuredReviews.length} comentarios)
            </h3>
            
            {/* Comentarios Individuales */}
            <div className="space-y-6">
                {productData.featuredReviews.map((review, index) => (
                    <div key={index} className="border-b border-gray-100 pb-4">
                        <div className="flex justify-between items-center mb-1">
                            {renderStars(review.stars)}
                            <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                        <p className="text-gray-800 text-lg italic mb-3">"{review.text}"</p>
                        
                        <div className="flex gap-4">
                            <button className="text-sm text-gray-600 border px-3 py-1 rounded-full hover:bg-gray-100 transition">
                                Es útil 👍
                            </button>
                        </div>
                    </div>
                ))}
            </div>
          </div> {/* Fin Columna 2 */}
          
        </div> {/* Fin Contenedor Principal */}
      </div>
    </section>
  );
}