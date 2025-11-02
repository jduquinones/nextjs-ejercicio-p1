export default function Features() {
  const features = [
    {
      title: "Mapeo Inteligente",
      desc: "Detecta y memoriza el plano de tu hogar para una limpieza eficiente.",
      icon: "🗺️",
    },
    {
      title: "Control por App",
      desc: "Programa limpiezas desde tu teléfono y monitorea el progreso.",
      icon: "📱",
    },
    {
      title: "Autonomía Extrema",
      desc: "Hasta 150 minutos de limpieza continua con carga automática.",
      icon: "⚡",
    },
  ];

  return (
    <section className="py-20 px-6 bg-black text-center">
      <h2 className="text-4xl font-bold mb-12">Tecnología que limpia por ti</h2>
      <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform"
          >
            <div className="text-5xl mb-4">{f.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-400">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
