"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Phone, MapPin, ArrowRight, Check, Star } from "lucide-react"

export default function LandingPage() {
  const [showModal, setShowModal] = useState(false)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0])

  const handleContactClick = () => {
    setShowModal(true)
  }

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 z-0">
        {/* Imagen de fondo principal */}
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
          alt="Edificio de lujo"
          fill
          className="object-cover brightness-[0.5]"
          priority
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

        {/* Animated Light Effect */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/30 blur-[100px] animate-pulse"
            style={{ animationDuration: "7s" }}
          />
          <div
            className="absolute bottom-1/3 right-1/3 w-[300px] h-[300px] rounded-full bg-blue-500/30 blur-[100px] animate-pulse"
            style={{ animationDuration: "5s" }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="w-full py-6">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white font-bold text-2xl"
            >
              ELITE<span className="text-primary">HOMES</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black transition-all duration-300"
                onClick={handleContactClick}
              >
                <Phone className="mr-2 h-4 w-4" />
                Contáctanos
              </Button>
            </motion.div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="flex-1 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl"
              style={{ y: textY, opacity }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <motion.div
                className="inline-block bg-primary text-white px-4 py-1 rounded-full text-sm font-medium mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                OPORTUNIDAD EXCLUSIVA
              </motion.div>

              <motion.h1
                className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Tu Nuevo Hogar de <span className="text-primary">Ensueño</span> Te Espera
              </motion.h1>

              <motion.p
                className="text-xl text-white/80 mb-8 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                Descubre propiedades exclusivas con vistas espectaculares y acabados de lujo. Una oportunidad única para
                vivir la vida que siempre has soñado.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:-translate-y-1"
                  onClick={handleContactClick}
                >
                  ¡Quiero Saber Más!
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-6 rounded-full transition-all duration-300 transform hover:-translate-y-1"
                >
                  Ver Propiedades
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative py-20 bg-gradient-to-b from-black/0 via-black/80 to-black">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Características <span className="text-primary">Exclusivas</span>
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Nuestras propiedades están diseñadas para ofrecerte lo mejor en confort y lujo
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Ubicaciones Premium",
                  description: "En las zonas más exclusivas y con las mejores vistas de la ciudad",
                  icon: <MapPin className="h-10 w-10" />,
                },
                {
                  title: "Diseño Vanguardista",
                  description: "Arquitectura moderna con acabados de lujo y materiales de primera calidad",
                  icon: <Star className="h-10 w-10" />,
                },
                {
                  title: "Financiación Flexible",
                  description: "Opciones de pago personalizadas para adaptarse a tus necesidades",
                  icon: <Check className="h-10 w-10" />,
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <div className="bg-primary/20 p-4 rounded-xl w-fit mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-white/70">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(255,102,0,0.2),transparent_70%)]"></div>
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.2),transparent_70%)]"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="max-w-4xl mx-auto bg-gradient-to-r from-black/80 to-black/60 backdrop-blur-lg p-10 rounded-3xl border border-white/10"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  ¡No Pierdas Esta <span className="text-primary">Oportunidad Única</span>!
                </h2>
                <p className="text-white/70 max-w-2xl mx-auto">
                  Contáctanos ahora y obtén un descuento especial en la visita a nuestras propiedades exclusivas
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Input
                    placeholder="Nombre completo"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12 rounded-lg focus:border-primary"
                  />
                  <Input
                    placeholder="Teléfono"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12 rounded-lg focus:border-primary"
                  />
                </div>
                <div className="space-y-4">
                  <Input
                    placeholder="Email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12 rounded-lg focus:border-primary"
                  />
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white h-12 rounded-lg shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:-translate-y-1">
                    ¡Quiero Información Ahora!
                  </Button>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-white/50 text-sm">
                  Al enviar tus datos, aceptas nuestra política de privacidad. Nos pondremos en contacto contigo lo
                  antes posible.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Lo Que Dicen <span className="text-primary">Nuestros Clientes</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  quote:
                    "La mejor decisión que tomamos fue comprar nuestra casa con EliteHomes. El proceso fue rápido y sin complicaciones.",
                  name: "María García",
                  role: "Propietaria",
                },
                {
                  quote:
                    "Encontramos el apartamento de nuestros sueños gracias a su equipo. El servicio personalizado marcó la diferencia.",
                  name: "Carlos Rodríguez",
                  role: "Propietario",
                },
                {
                  quote:
                    "La atención y el asesoramiento fueron excepcionales. Recomendaría EliteHomes a cualquiera que busque su hogar ideal.",
                  name: "Laura Martínez",
                  role: "Propietaria",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-white/80 italic mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold mr-3">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white font-medium">{testimonial.name}</p>
                      <p className="text-white/50 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-black border-t border-white/10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-white font-bold text-xl mb-4 md:mb-0">
                ELITE<span className="text-primary">HOMES</span>
              </div>
              <div className="text-white/50 text-sm">
                © {new Date().getFullYear()} EliteHomes. Todos los derechos reservados.
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Contact Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gradient-to-br from-gray-900 to-black border border-white/20 rounded-2xl p-8 max-w-md w-full relative"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
            >
              <button
                className="absolute top-4 right-4 text-white/50 hover:text-white"
                onClick={() => setShowModal(false)}
              >
                ✕
              </button>

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">¡Contáctanos Ahora!</h3>
                <p className="text-white/70">Déjanos tus datos y te contactaremos en menos de 24 horas</p>
              </div>

              <div className="space-y-4">
                <Input
                  placeholder="Nombre completo"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12 rounded-lg focus:border-primary"
                />
                <Input
                  placeholder="Teléfono"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12 rounded-lg focus:border-primary"
                />
                <Input
                  placeholder="Email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12 rounded-lg focus:border-primary"
                />
                <div className="pt-2">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white h-12 rounded-lg shadow-lg hover:shadow-primary/50 transition-all duration-300">
                    Enviar
                  </Button>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-center gap-4">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-white">+34 912 345 678</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-white">Madrid, España</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating CTA Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-40"
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <Button
          className="bg-primary hover:bg-primary/90 text-white h-16 w-16 rounded-full shadow-lg shadow-primary/30 flex items-center justify-center"
          onClick={handleContactClick}
        >
          <Phone className="h-6 w-6" />
        </Button>
      </motion.div>
    </div>
  )
}
