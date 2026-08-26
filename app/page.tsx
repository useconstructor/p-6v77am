import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sonrisa Perfecta — Clínica Dental Profesional',
  description: 'Cuidamos tu sonrisa con tecnología de punta. Servicios de limpieza, blanqueamiento, ortodoncia, implantes y emergencias 24/7.',
};

export default function Home() {
  return (
    <main className="min-h-screen font-sans" style={{ backgroundColor: '#FFFFFF' }}>

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