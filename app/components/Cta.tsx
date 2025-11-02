import { ShoppingCart } from 'lucide-react';

export default function FinalCallToAction() {
    return (
        <section className="py-20 px-6 bg-blue-600 text-white text-center" id="comprar">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
                    ¡La Limpieza Inteligente Empieza Hoy!
                </h2>
                <p className="text-xl mb-8">
                    Deja de perder tu valioso tiempo barriendo. Invierte en el Ropvacnic S1 y recupera las horas para ti.
                </p>
                
                <a
                    href="#checkout" // Enlazar a la página de pago
                    className="inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-extrabold text-2xl px-12 py-5 rounded-full transition-all shadow-2xl transform hover:scale-105"
                >
                    <ShoppingCart className="h-6 w-6 mr-3" />
                    Comprar Ropvacnic S1 Ahora
                </a>
                
                <p className="mt-4 text-sm text-blue-200 font-semibold">
                    Envío gratis disponible por tiempo limitado.
                </p>
            </div>
        </section>
    );
}