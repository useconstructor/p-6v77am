"use client"

import { useState } from 'react'
import {
  Menu,
  X,
  Phone,
  Mail,
  Clock,
  MapPin,
  ChevronRight,
  Sparkles,
  Shield,
  Heart,
  Star,
  Calendar,
  Users,
  Award,
  CheckCircle,
  MessageCircle,
  ArrowRight,
  Stethoscope,
  Smile,
  AlertCircle,
  Facebook,
  Instagram,
  Twitter
} from 'lucide-react'

export default function HomePage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  })

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Gracias por tu solicitud. Te contactaremos pronto para confirmar tu cita.')
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileNavOpen(false)
  }

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #0066CC 0%, #004999 100%)' }}
              >
                <Smile className="w-6 h-6 text-white" />
              </div>
              <span 
                className="text-xl font-bold"
                style={{ fontFamily: 'DM Sans, sans-serif', color: '#1A2B3C' }}
              >
                Sonrisa Perfecta
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection('servicios')}
                className="text-sm font-medium transition-colors hover:text-[#0066CC]"
                style={{ color: '#6B7D8C' }}
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('equipo')}
                className="text-sm font-medium transition-colors hover:text-[#0066CC]"
                style={{ color: '#6B7D8C' }}
              >
                Equipo
              </button>
              <button 
                onClick={() => scrollToSection('testimonios')}
                className="text-sm font-medium transition-colors hover:text-[#0066CC]"
                style={{ color: '#6B7D8C' }}
              >
                Testimonios
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="text-sm font-medium transition-colors hover:text-[#0066CC]"
                style={{ color: '#6B7D8C' }}
              >
                Contacto
              </button>
              <button 
                onClick={() => scrollToSection('cita')}
                className="px-6 py-2.5 rounded-full text-white text-sm font-semibold transition-all hover:shadow-lg hover:scale-105"
                style={{ backgroundColor: '#0066CC' }}
              >
                Reservar Cita
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2"
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              aria-label="Toggle menu"
            >
              {mobileNavOpen ? (
                <X className="w-6 h-6" style={{ color: '#1A2B3C' }} />
              ) : (
                <Menu className="w-6 h-6" style={{ color: '#1A2B3C' }} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            mobileNavOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
          style={{ backgroundColor: '#F0F7FF' }}
        >
          <div className="px-4 py-6 space-y-4">
            <button 
              onClick={() => scrollToSection('servicios')}
              className="block w-full text-left py-2 font-medium"
              style={{ color: '#1A2B3C' }}
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection('equipo')}
              className="block w-full text-left py-2 font-medium"
              style={{ color: '#1A2B3C' }}
            >
              Equipo
            </button>
            <button 
              onClick={() => scrollToSection('testimonios')}
              className="block w-full text-left py-2 font-medium"
              style={{ color: '#1A2B3C' }}
            >
              Testimonios
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="block w-full text-left py-2 font-medium"
              style={{ color: '#1A2B3C' }}
            >
              Contacto
            </button>
            <button 
              onClick={() => scrollToSection('cita')}
              className="w-full py-3 rounded-full text-white font-semibold"
              style={{ backgroundColor: '#0066CC' }}
            >
              Reservar Cita
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Split */}
      <section className="pt-20 lg:pt-24 min-h-screen flex items-center" style={{ backgroundColor: '#F0F7FF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full" style={{ backgroundColor: 'rgba(0, 102, 204, 0.1)' }}>
                <Sparkles className="w-4 h-4" style={{ color: '#0066CC' }} />
                <span className="text-sm font-medium" style={{ color: '#0066CC' }}>Cuidado dental de confianza</span>
              </div>
              
              <h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                style={{ fontFamily: 'DM Sans, sans-serif', color: '#1A2B3C' }}
              >
                Tu sonrisa merece
                <span className="block" style={{ color: '#0066CC' }}> el mejor cuidado</span>
              </h1>
              
              <p className="text-lg lg:text-xl leading-relaxed" style={{ color: '#6B7D8C' }}>
                En Sonrisa Perfecta combinamos tecnología avanzada con un trato humano y cercano. 
                Nuestro equipo de especialistas está comprometido con tu salud bucal y bienestar.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('cita')}
                  className="px-8 py-4 rounded-full text-white font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-xl hover:scale-105"
                  style={{ backgroundColor: '#0066CC' }}
                >
                  <Calendar className="w-5 h-5" />
                  Agenda tu cita
                </button>
                <button 
                  onClick={() => scrollToSection('servicios')}
                  className="px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all hover:bg-gray-100"
                  style={{ color: '#1A2B3C', border: '2px solid #1A2B3C' }}
                >
                  Ver servicios
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5" style={{ color: '#0066CC' }} />
                  <span className="text-sm" style={{ color: '#6B7D8C' }}>Equipos esterilizados</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5" style={{ color: '#0066CC' }} />
                  <span className="text-sm" style={{ color: '#6B7D8C' }}>Trato personalizado</span>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div 
                className="aspect-square rounded-3xl relative overflow-hidden"
                style={{ 
                  background: 'linear-gradient(135deg, #0066CC 0%, #004999 50%, #003366 100%)'
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <Smile className="w-24 h-24 mx-auto mb-6 opacity-90" />
                    <p className="text-2xl font-semibold" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      Sonrisas saludables
                    </p>
                    <p className="mt-2 opacity-80">desde el primer día</p>
                  </div>
                </div>
                <div 
                  className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full opacity-20"
                  style={{ backgroundColor: '#FFFFFF' }}
                />
                <div 
                  className="absolute -top-8 -left-8 w-48 h-48 rounded-full opacity-10"
                  style={{ backgroundColor: '#FFFFFF' }}
                />
              </div>

              {/* Floating Card */}
              <div 
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: '#F0F7FF' }}
                  >
                    <Star className="w-6 h-6" style={{ color: '#0066CC' }} />
                  </div>
                  <div>
                    <p className="font-bold" style={{ color: '#1A2B3C' }}>4.9/5 Estrellas</p>
                    <p className="text-sm" style={{ color: '#6B7D8C' }}>Pacientes satisfechos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section id="servicios" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span 
              className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4"
              style={{ backgroundColor: '#F0F7FF', color: '#0066CC' }}
            >
              Nuestros Servicios
            </span>
            <h2 
              className="text-3xl lg:text-4xl font-bold mb-6"
              style={{ fontFamily: 'DM Sans, sans-serif', color: '#1A2B3C' }}
            >
              Cuidado dental integral para toda la familia
            </h2>
            <p className="text-lg" style={{ color: '#6B7D8C' }}>
              Ofrecemos una amplia gama de tratamientos dentales con los más altos estándares de calidad
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Service 1 - Featured */}
            <div 
              className="md:col-span-2 lg:col-span-1 lg:row-span-2 rounded-3xl p-8 lg:p-10 text-white relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #0066CC 0%, #004999 100%)' }}
            >
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Blanqueamiento Dental
                </h3>
                <p className="opacity-90 mb-6 flex-grow">
                  Recupera el brillo natural de tus dientes con nuestro tratamiento profesional de blanqueamiento. 
                  Resultados visibles desde la primera sesión con tecnología LED de última generación.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm opacity-80">Consultar precio</span>
                  <button 
                    onClick={() => scrollToSection('cita')}
                    className="flex items-center gap-2 font-medium hover:gap-3 transition-all"
                  >
                    Reservar <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-white/10" />
            </div>

            {/* Service 2 */}
            <div 
              className="rounded-3xl p-6 lg:p-8 transition-all hover:shadow-lg"
              style={{ backgroundColor: '#F0F7FF' }}
            >
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: '#FFFFFF' }}
              >
                <Stethoscope className="w-7 h-7" style={{ color: '#0066CC' }} />
              </div>
              <h3 
                className="text-xl font-bold mb-3"
                style={{ fontFamily: 'DM Sans, sans-serif', color: '#1A2B3C' }}
              >
                Limpieza Dental
              </h3>
              <p className="mb-4" style={{ color: '#6B7D8C' }}>
                Elimina el sarro y la placa bacteriana con una limpieza profunda profesional. Recomendamos realizarla cada 6 meses.
              </p>
              <button 
                onClick={() => scrollToSection('cita')}
                className="flex items-center gap-2 font-medium transition-all hover:gap-3"
                style={{ color: '#0066CC' }}
              >
                Agendar <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Service 3 */}
            <div 
              className="rounded-3xl p-6 lg:p-8 transition-all hover:shadow-lg"
              style={{ backgroundColor: '#F0F7FF' }}
            >
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: '#FFFFFF' }}
              >
                <Smile className="w-7 h-7" style={{ color: '#0066CC' }} />
              </div>
              <h3 
                className="text-xl font-bold mb-3"
                style={{ fontFamily: 'DM Sans, sans-serif', color: '#1A2B3C' }}
              >
                Ortodoncia
              </h3>
              <p className="mb-4" style={{ color: '#6B7D8C' }}>
                Corrige la posición de tus dientes con brackets tradicionales o alineadores invisibles. Sonríe con confianza.
              </p>
              <button 
                onClick={() => scrollToSection('cita')}
                className="flex items-center gap-2 font-medium transition-all hover:gap-3"
                style={{ color: '#0066CC' }}
              >
                Consultar <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Service 4 */}
            <div 
              className="rounded-3xl p-6 lg:p-8 transition-all hover:shadow-lg"
              style={{ backgroundColor: '#F0F7FF' }}
            >
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: '#FFFFFF' }}
              >
                <Shield className="w-7 h-7" style={{ color: '#0066CC' }} />
              </div>
              <h3 
                className="text-xl font-bold mb-3"
                style={{ fontFamily: 'DM Sans, sans-serif', color: '#1A2B3C' }}
              >
                Implantes Dentales
              </h3>
              <p className="mb-4" style={{ color: '#6B7D8C' }}>
                Reemplaza dientes perdidos con implantes de titanio. Solución permanente que se ve y funciona como dientes naturales.
              </p>
              <button 
                onClick={() => scrollToSection('cita')}
                className="flex items-center gap-2 font-medium transition-all hover:gap-3"
                style={{ color: '#0066CC' }}
              >
                Más info <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Service 5 - Emergency */}
            <div 
              className="rounded-3xl p-6 lg:p-8 border-2 transition-all hover:shadow-lg"
              style={{ borderColor: '#0066CC', backgroundColor: '#FFFFFF' }}
            >
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: '#F0F7FF' }}
              >
                <AlertCircle className="w-7 h-7" style={{ color: '#0066CC' }} />
              </div>
              <h3 
                className="text-xl font-bold mb-3"
                style={{ fontFamily: 'DM Sans, sans-serif', color: '#1A2B3C' }}
              >
                Emergencias Dentales
              </h3>
              <p className="mb-4" style={{ color: '#6B7D8C' }}>
                Atención prioritaria para dolor intenso, traumatismos o infecciones. Estamos aquí cuando más nos necesitas.
              </p>
              <a 
                href="tel:+00000000000"
                className="flex items-center gap-2 font-medium transition-all hover:gap-3"
                style={{ color: '#0066CC' }}
              >
                Llamar ahora <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section 
        className="py-16 lg:py-20"
        style={{ background: 'linear-gradient(135deg, #1A2B3C 0%, #0066CC 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Users className="w-8 h-8 text-white/80" />
              </div>
              <p 
                className="text-4xl lg:text-5xl font-bold text-white mb-2"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                5000+
              </p>
              <p className="text-white/80">Pacientes atendidos</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Award className="w-8 h-8 text-white/80" />
              </div>
              <p 
                className="text-4xl lg:text-5xl font-bold text-white mb-2"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                15+
              </p>
              <p className="text-white/80">Años de experiencia</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Smile className="w-8 h-8 text-white/80" />
              </div>
              <p 
                className="text-4xl lg:text-5xl font-bold text-white mb-2"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                98%
              </p>
              <p className="text-white/80">Satisfacción</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Star className="w-8 h-8 text-white/80" />
              </div>
              <p 
                className="text-4xl lg:text-5xl font-bold text-white mb-2"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                4.9
              </p>
              <p className="text-white/80">Calificación promedio</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Cards */}
      <section id="equipo" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span 
              className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4"
              style={{ backgroundColor: '#F0F7FF', color: '#0066CC' }}
            >
              Nuestro Equipo
            </span>
            <h2 
              className="text-3xl lg:text-4xl font-bold mb-6"
              style={{ fontFamily: 'DM Sans, sans-serif', color: '#1A2B3C' }}
            >
              Especialistas comprometidos con tu salud
            </h2>
            <p className="text-lg" style={{ color: '#6B7D8C' }}>
              Nuestro equipo de profesionales está aquí para brindarte la mejor atención dental
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="group">
              <div 
                className="aspect-[4/5] rounded-3xl mb-6 relative overflow-hidden"
                style={{ background: 'linear-gradient(180deg, #F0F7FF 0%, #E0EFFF 100%)' }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                  <div 
                    className="w-32 h-32 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: '#0066CC' }}
                  >
                    <Stethoscope className="w-16 h-16 text-white" />
                  </div>
                  <div 
                    className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <p className="text-white text-sm text-center">
                      Especialista en restauraciones y estética dental
                    </p>
                  </div>
                </div>
              </div>
              <h3 
                className="text-xl font-bold mb-1"
                style={{ fontFamily: 'DM Sans, sans-serif', color: '#1A2B3C' }}
              >
                Director Clínico
              </h3>
              <p style={{ color: '#0066CC' }}>Odontología General y Estética</p>
            </div>

            {/* Team Member 2 */}
            <div className="group">
              <div 
                className="aspect-[4/5] rounded-3xl mb-6 relative overflow-hidden"
                style={{ background: 'linear-gradient(180deg, #F0F7FF 0%, #E0EFFF 100%)' }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                  <div 
                    className="w-32 h-32 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: '#0066CC' }}
                  >
                    <Smile className="w-16 h-16 text-white" />
                  </div>
                  <div 
                    className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <p className="text-white text-sm text-center">
                      Experto en corrección de malposiciones dentales
                    </p>
                  </div>
                </div>
              </div>
              <h3 
                className="text-xl font-bold mb-1"
                style={{ fontFamily: 'DM Sans, sans-serif', color: '#1A2B3C' }}
              >
                Especialista en Ortodoncia
              </h3>
              <p style={{ color: '#0066CC' }}>Brackets y Alineadores Invisibles</p>
            </div>

            {/* Team Member 3 */}
            <div className="group">
              <div 
                className="aspect-[4/5] rounded-3xl mb-6 relative overflow-hidden"
                style={{ background: 'linear-gradient(180deg, #F0F7FF 0%, #E0EFFF 100%)' }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                  <div 
                    className="w-32 h-32 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: '#0066CC' }}
                  >
                    <Shield className="w-16 h-16 text-white" />
                  </div>
                  <div 
                    className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <p className="text-white text-sm text-center">
                      Cirugía oral e implantes dentales de alta precisión
                    </p>
                  </div>
                </div>
              </div>
              <h3 
                className="text-xl font-bold mb-1"
                style={{ fontFamily: 'DM Sans, sans-serif', color: '#1A2B3C' }}
              >
                Cirujano Oral
              </h3>
              <p style={{ color: '#0066CC' }}>Implantología y Cirugía Maxilofacial</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: '#F0F7FF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span 
              className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4"
              style={{ backgroundColor: '#FFFFFF', color: '#0066CC' }}
            >
              Proceso Simple
            </span>
            <h2 
              className="text-3xl lg:text-4xl font-bold mb-6"
              style={{ fontFamily: 'DM Sans, sans-serif', color: '#1A2B3C' }}
            >
              Tu camino hacia una sonrisa perfecta
            </h2>
            <p className="text-lg" style={{ color: '#6B7D8C' }}>
              Hacemos que tu experiencia dental sea sencilla y sin estrés
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative">