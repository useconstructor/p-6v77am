'use client';

import { useState } from 'react';

export default function Home() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const handleQuestionClick = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqs = [
    {
      question: '¿Cuánto dura una limpieza dental?',
      answer: 'Una limpieza dental profesional típicamente dura entre 30 y 60 minutos, dependiendo del estado de salud bucal del paciente y la cantidad de sarro acumulado.'
    },
    {
      question: '¿El blanqueamiento dental duele?',
      answer: 'No, el blanqueamiento dental no duele. Algunos pacientes pueden experimentar sensibilidad temporal en los dientes, pero esto es manejable y desaparece en pocos días.'
    },
    {
      question: '¿Cuánto tiempo dura un implante?',
      answer: 'Los implantes dentales están diseñados para durar toda la vida con el cuidado adecuado. Con buena higiene oral y visitas regulares al dentista, pueden durar más de 25 años.'
    },
    {
      question: '¿Desde qué edad se puede usar ortodoncia?',
      answer: 'Se recomienda la primera evaluación ortodóntica a los 7 años. Sin embargo, la ortodoncia puede realizarse a cualquier edad, tanto en niños como en adultos.'
    },
    {
      question: '¿Atienden emergencias los fines de semana?',
      answer: 'Sí, atendemos emergencias dentales las 24 horas del día, los 7 días de la semana, incluyendo fines de semana y días festivos. Llámanos al +57 300 000 0000.'
    }
  ];

  const beforeAfterCases = [
    {
      name: 'Laura Méndez',
      treatment: 'Blanqueamiento Dental',
      before: 'Dientes amarillentos por consumo de café y té durante años',
      after: 'Sonrisa blanca y radiante, 8 tonos más clara'
    },
    {
      name: 'Roberto Sánchez',
      treatment: 'Ortodoncia Invisible',
      before: 'Dientes desalineados y apiñados en la parte frontal',
      after: 'Sonrisa perfectamente alineada y armoniosa'
    },
    {
      name: 'Patricia Gómez',
      treatment: 'Implantes Dentales',
      before: 'Pérdida de dos piezas dentales superiores',
      after: 'Dentadura completa con implantes naturales'
    }
  ];

  const timelineEvents = [
    {
      year: '2010',
      title: 'Fundación',
      description: 'Abrimos nuestras puertas con la misión de transformar sonrisas y ofrecer atención dental de calidad a nuestra comunidad.'
    },
    {
      year: '2015',
      title: 'Primera Expansión',
      description: 'Ampliamos nuestras instalaciones y duplicamos nuestro equipo de especialistas para atender la creciente demanda de pacientes.'
    },
    {
      year: '2019',
      title: 'Certificación Internacional',
      description: 'Obtuvimos la certificación ISO 9001 y reconocimiento internacional por nuestros estándares de calidad y protocolos de atención.'
    },
    {
      year: '2024',
      title: 'Clínica Digital',
      description: 'Implementamos tecnología de vanguardia con escáneres 3D, radiografías digitales y sistema de citas en línea para una experiencia moderna.'
    }
  ];

  return (
    <main className="min-h-screen font-sans" style={{ backgroundColor: '#FFFFFF' }}>

      {/* Promo Banner */}
      <div className="w-full py-3 px-4 text-center" style={{ backgroundColor: '#065F46' }}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3">
          <span className="text-white text-sm sm:text-base font-medium">
            🎉 Oferta especial: 20% de descuento en blanqueamiento dental este mes. ¡Agenda hoy!
          </span>
          <a
            href="#cita"
            className="px-4 py-1.5 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#FFFFFF', color: '#065F46' }}
          >
            Ver oferta
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <span className="text-xl font-bold" style={{ color: '#10B981' }}>Sonrisa Perfecta</span>
          <nav className="hidden md:flex items-center gap-8">
            {['Servicios', 'Equipo', 'Testimonios', 'Contacto'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: '#1A2B3C' }}>{item}</a>
            ))}
          </nav>
          <a
            href="#cita"
            className="px-5 py-2 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#10B981' }}
          >
            Agendar Cita
          </a>
        </div>
      </header>

      {/* Emergency Banner */}
      <div className="fixed top-16 left-0 right-0 z-40 text-center py-2 px-4" style={{ backgroundColor: '#FEF3C7', color: '#92400E' }}>
        <span className="text-sm font-medium">🦷 Atención de Emergencias Dentales 24/7 — Llama ahora: +57 300 000 0000</span>
      </div>

      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28" style={{ background: 'linear-gradient(135deg, #ECFDF5 0%, #FFFFFF 60%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6" style={{ backgroundColor: '#ECFDF5', color: '#10B981' }}>
              ⭐ Mejor Clínica Dental 2024 — Más de 500 pacientes satisfechos
            </span>
            <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 leading-tight" style={{ fontFamily: 'DM Sans, sans-serif', color: '#1A2B3C' }}>
              Tu sonrisa perfecta empieza aquí
            </h1>
            <p className="text-lg lg:text-xl mb-8" style={{ color: '#4A5568', lineHeight: '1.7' }}>
              Clínica dental moderna con especialistas certificados. Tecnología de vanguardia, atención personalizada y resultados que duran toda la vida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#cita"
                className="px-8 py-4 rounded-xl text-white font-bold text-lg text-center transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#10B981' }}
              >
                Consulta Gratuita
              </a>
              <a
                href="#servicios"
                className="px-8 py-4 rounded-xl font-bold text-lg text-center border-2 transition-colors"
                style={{ borderColor: '#10B981', color: '#10B981' }}
              >
                Ver Servicios
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6">
              {[['+500', 'Pacientes atendidos'], ['10+', 'Años de experiencia'], ['3', 'Especialistas']].map(([n, l]) => (
                <div key={l}>
                  <div className="text-2xl font-extrabold" style={{ color: '#10B981' }}>{n}</div>
                  <div className="text-xs" style={{ color: '#6B7D8C' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: '#ECFDF5', color: '#10B981' }}>
              Nuestros Servicios
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold" style={{ fontFamily: 'DM Sans, sans-serif', color: '#1A2B3C' }}>
              Todo lo que necesitas para tu sonrisa
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '🦷', title: 'Limpieza Dental', desc: 'Eliminamos el sarro y manchas acumuladas para una higiene bucal impecable.' },
              { icon: '✨', title: 'Blanqueamiento', desc: 'Recupera el blanco natural de tus dientes con tratamientos seguros y efectivos.' },
              { icon: '😁', title: 'Ortodoncia', desc: 'Brackets tradicionales e invisibles para corregir la alineación de tu sonrisa.' },
              { icon: '🔧', title: 'Implantes', desc: 'Reemplazos dentales permanentes con materiales de alta calidad y larga duración.' },
              { icon: '🚨', title: 'Emergencias 24/7', desc: 'Atención inmediata para dolor dental, fracturas y cualquier urgencia bucal.' },
              { icon: '👶', title: 'Odontología Infantil', desc: 'Cuidado especializado y amigable para los más pequeños de la familia.' },
            ].map((s, i) => (
              <div key={i} className="p-8 rounded-2xl transition-shadow hover:shadow-lg" style={{ backgroundColor: '#ECFDF5' }}>
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#1A2B3C' }}>{s.title}</h3>
                <p style={{ color: '#6B7D8C', lineHeight: '1.6' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our History Timeline */}
      <section id="historia" className="py-20 lg:py-28" style={{ backgroundColor: '#F0FDF9' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: '#ECFDF5', color: '#10B981' }}>
              Nuestra Trayectoria
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: 'DM Sans, sans-serif', color: '#1A2B3C' }}>
              Nuestra Historia
            </h2>
            <p className="text-lg" style={{ color: '#6B7D8C' }}>
              Más de una década transformando sonrisas
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5" style={{ backgroundColor: '#10B981' }}></div>
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative pl-12 md:pl-0">
                  <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center" style={{ backgroundColor: '#10B981' }}>
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  </div>
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:ml-auto md:pl-12' : 'md:mr-auto md:pr-12 md:text-right'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <span className="text-2xl font-extrabold" style={{ color: '#10B981' }}>{event.year}</span>
                      <h3 className="text-xl font-bold mt-2 mb-2" style={{ color: '#1A2B3C' }}>{event.title}</h3>
                      <p style={{ color: '#6B7D8C', lineHeight: '1.6' }}>{event.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section id="antes-despues" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: '#ECFDF5', color: '#10B981' }}>
              Resultados Reales
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: 'DM Sans, sans-serif', color: '#1A2B3C' }}>
              Antes y Después
            </h2>
            <p className="text-lg" style={{ color: '#6B7D8C' }}>
              Conoce las transformaciones de nuestros pacientes
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {beforeAfterCases.map((caseItem, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 transition-shadow duration-300 cursor-pointer"
                style={{
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 10px 40px rgba(16, 185, 129, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
                }}
              >
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-1" style={{ color: '#1A2B3C' }}>{caseItem.name}</h3>
                  <span className="inline-block px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: '#ECFDF5', color: '#10B981' }}>
                    {caseItem.treatment}
                  </span>
                </div>
                <div className="flex gap-4">
                  <div
                    className="flex-1 rounded-xl p-4 flex flex-col justify-center min-h-32"
                    style={{ backgroundColor: '#9CA3AF' }}
                  >
                    <span className="text-xs font-bold text-white uppercase tracking-wide mb-2">Antes</span>
                    <p className="text-sm text-white leading-relaxed">{caseItem.before}</p>
                  </div>
                  <div
                    className="flex-1 rounded-xl p-4 flex flex-col justify-center min-h-32"
                    style={{ backgroundColor: '#10B981' }}
                  >
                    <span className="text-xs font-bold text-white uppercase tracking-wide mb-2">Después</span>
                    <p className="text-sm text-white leading-relaxed">{caseItem.after}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="equipo" className="py-20 lg:py-28" style={{ backgroundColor: '#F0FDF9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: '#ECFDF5', color: '#10B981' }}>
              Nuestro Equipo
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold" style={{ fontFamily: 'DM Sans, sans-serif', color: '#1A2B3C' }}>
              Especialistas a tu servicio
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { role: 'Directora Clínica', specialty: 'Ortodoncia y Oclusión', initial: 'D' },
              { role: 'Especialista', specialty: 'Implantología y Cirugía', initial: 'E' },
              { role: 'Odontólogo', specialty: 'Estética y Blanqueamiento', initial: 'O' },
            ].map((m, i) => (
              <div key={i} className="text-center p-8 rounded-2xl bg-white shadow-sm">
                <div className="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4" style={{ backgroundColor: '#10B981' }}>
                  {m.initial}
                </div>
                <h3 className="text-lg font-bold mb-1" style={{ color: '#1A2B3C' }}>{m.role}</h3>
                <p className="text-sm" style={{ color: '#10B981' }}>{m.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonios" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold" style={{ fontFamily: 'DM Sans, sans-serif', color: '#1A2B3C' }}>
              Lo que dicen nuestros pacientes
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'María G.', text: 'Increíble transformación, mis dientes quedaron perfectos en solo 3 sesiones.', rating: 5 },
              { name: 'Carlos R.', text: 'Llevé a mis hijos y quedaron encantados, personal muy amable.', rating: 5 },
              { name: 'Ana S.', text: 'Me atendieron de urgencia un domingo, servicio excepcional 100% recomendado.', rating: 5 },
            ].map((t, i) => (
              <div key={i} className="p-8 rounded-2xl" style={{ backgroundColor: '#ECFDF5' }}>
                <div className="flex mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <span key={j} style={{ color: '#FFD700', fontSize: '1.25rem' }}>★</span>
                  ))}
                </div>
                <p className="mb-6 italic" style={{ color: '#4A5568', lineHeight: '1.7' }}>"{t.text}"</p>
                <p className="font-semibold" style={{ color: '#1A2B3C' }}>— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 lg:py-28" style={{ backgroundColor: '#F0FDF9' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: '#ECFDF5', color: '#10B981' }}>
              Preguntas Frecuentes
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold" style={{ fontFamily: 'DM Sans, sans-serif', color: '#1A2B3C' }}>
              Resolvemos tus dudas
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => handleQuestionClick(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold" style={{ color: '#1A2B3C' }}>
                    {faq.question}
                  </h3>
                  <span
                    className="text-2xl font-light transition-transform duration-300"
                    style={{
                      color: '#10B981',
                      transform: openQuestion === index ? 'rotate(45deg)' : 'rotate(0deg)',
                      display: 'inline-block'
                    }}
                  >
                    +
                  </span>
                </button>
                {openQuestion === index && (
                  <div className="px-6 pb-5">
                    <p style={{ color: '#6B7D8C', lineHeight: '1.7' }}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precios" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: '#ECFDF5', color: '#10B981' }}>
              Planes y Precios
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: 'DM Sans, sans-serif', color: '#1A2B3C' }}>
              Elige el plan perfecto para ti
            </h2>
            <p className="text-lg" style={{ color: '#6B7D8C' }}>
              Precios transparentes, sin sorpresas. Todos los planes incluyen garantía de satisfacción.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Plan Básico */}
            <div className="rounded-2xl border-2 border-gray-200 p-8 relative bg-white">
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#1A2B3C' }}>Plan Básico</h3>
              <p className="text-sm mb-6" style={{ color: '#6B7D8C' }}>Para tu salud dental esencial</p>
              <div className="mb-6">
                <span className="text-sm" style={{ color: '#6B7D8C' }}>Desde</span>
                <div className="text-4xl font-bold" style={{ color: '#10B981' }}>$50.000</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span style={{ color: '#4A5568' }}>Limpieza dental profesional</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span style={{ color: '#4A5568' }}>Consulta y diagnóstico</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span style={{ color: '#4A5568' }}>Radiografía básica</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span style={{ color: '#4A5568' }}>Plan de tratamiento</span>
                </li>
              </ul>
              <a
                href="#cita"
                className="block w-full py-3 rounded-lg text-center font-semibold border-2 transition-colors"
                style={{ borderColor: '#10B981', color: '#10B981' }}
              >
                Elegir Plan Básico
              </a>
            </div>

            {/* Plan Familiar */}
            <div className="rounded-2xl border-2 p-8 relative bg-white" style={{ borderColor: '#10B981' }}>
              <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-1 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: '#10B981' }}>
                Más Popular
              </span>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#1A2B3C' }}>Plan Familiar</h3>
              <p className="text-sm mb-6" style={{ color: '#6B7D8C' }}>Ideal para toda la familia</p>
              <div className="mb-6">
                <span className="text-sm" style={{ color: '#6B7D8C' }}>Desde</span>
                <div className="text-4xl font-bold" style={{ color: '#10B981' }}>$120.000</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span style={{ color: '#4A5568' }}>Todo lo del Plan Básico</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span style={{ color: '#4A5568' }}>20% descuento para familiares</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span style={{ color: '#4A5568' }}>Fluorización gratuita</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span style={{ color: '#4A5568' }}>Sellantes preventivos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span style={{ color: '#4A5568' }}>2 limpiezas al año incluidas</span>
                </li>
              </ul>
              <a
                href="#cita"
                className="block w-full py-3 rounded-lg text-center font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#10B981' }}
              >
                Elegir Plan Familiar
              </a>
            </div>

            {/* Plan Premium */}
            <div className="rounded-2xl border-2 border-gray-200 p-8 relative bg-white">
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#1A2B3C' }}>Plan Premium</h3>
              <p className="text-sm mb-6" style={{ color: '#6B7D8C' }}>Cuidado dental completo</p>
              <div className="mb-6">
                <span className="text-sm" style={{ color: '#6B7D8C' }}>Desde</span>
                <div className="text-4xl font-bold" style={{ color: '#10B981' }}>$200.000</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span style={{ color: '#4A5568' }}>Todos los servicios disponibles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span style={{ color: '#4A5568' }}>Atención prioritaria sin citas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span style={{ color: '#4A5568' }}>Blanqueamiento anual incluido</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span style={{ color: '#4A5568' }}>30% descuento en tratamientos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span style={{ color: '#4A5568' }}>Emergencias 24/7 sin costo extra</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span style={{ color: '#4A5568' }}>Garantía extendida en todos los procedimientos</span>
                </li>
              </ul>
              <a
                href="#cita"
                className="block w-full py-3 rounded-lg text-center font-semibold border-2 transition-colors"
                style={{ borderColor: '#10B981', color: '#10B981' }}
              >
                Elegir Plan Premium
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <section id="cita" className="py-20 lg:py-28" style={{ backgroundColor: '#10B981' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">¿Listo para tu sonrisa perfecta?</h2>
          <p className="text-emerald-100 text-lg mb-10">Agenda tu consulta gratuita hoy. Sin compromiso.</p>
          <div className="bg-white rounded-2xl p-8 text-left">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#1A2B3C' }}>Nombre completo</label>
                <input type="text" placeholder="Tu nombre" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2" style={{ outlineColor: '#10B981' }} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#1A2B3C' }}>Teléfono</label>
                <input type="tel" placeholder="Tu número de teléfono" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2" style={{ outlineColor: '#10B981' }} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#1A2B3C' }}>Correo electrónico</label>
                <input type="email" placeholder="tu@correo.com" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2" style={{ outlineColor: '#10B981' }} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#1A2B3C' }}>Servicio de interés</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2" style={{ outlineColor: '#10B981' }}>
                  <option>Limpieza dental</option>
                  <option>Blanqueamiento</option>
                  <option>Ortodoncia</option>
                  <option>Implantes</option>
                  <option>Emergencia dental</option>
                </select>
              </div>
            </div>
            <button className="mt-6 w-full py-4 rounded-xl text-white font-bold text-lg transition-opacity hover:opacity-90" style={{ backgroundColor: '#10B981' }}>
              Agendar Consulta Gratuita
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12" style={{ backgroundColor: '#000000' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold mb-2" style={{ color: '#10B981' }}>Sonrisa Perfecta</h3>
          <p className="mb-4" style={{ color: '#6EE7B7' }}>Tu sonrisa es nuestra especialidad</p>
          <p className="text-sm" style={{ color: '#9CA3AF' }}>
            Lunes a Viernes: 8am – 6pm &nbsp;|&nbsp; Sábados: 9am – 2pm &nbsp;|&nbsp; Emergencias 24/7
          </p>
          <p className="text-xs mt-6" style={{ color: '#6B7280' }}>© 2024 Sonrisa Perfecta. Todos los derechos reservados.</p>
        </div>
      </footer>

    </main>
  );
}