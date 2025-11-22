import { ShieldCheck, Zap, Leaf, GraduationCap } from "lucide-react"

const features = [
  {
    title: "Verificado en Campus",
    description: "Conecta solo con estudiantes verificados de tu universidad. Seguro y confiable.",
    icon: GraduationCap,
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "Ventas Instantáneas",
    description: "Publica tus artículos en segundos. Toma una foto, pon un precio y recibe ofertas rápido.",
    icon: Zap,
    color: "bg-secondary/20 text-secondary",
  },
  {
    title: "Pagos Seguros",
    description: "Sistema de pago integrado que protege a compradores y vendedores hasta la entrega.",
    icon: ShieldCheck,
    color: "bg-green-100 text-green-700",
  },
  {
    title: "Ecológico",
    description: "Dale una segunda vida a tus artículos. Reduce residuos intercambiando dentro de tu comunidad.",
    icon: Leaf,
    color: "bg-primary/20 text-primary",
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">¿Por qué RE Cambia?</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Todo lo que necesitas para intercambiar en el campus
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hemos construido una plataforma diseñada específicamente para las necesidades únicas de la vida
            universitaria.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white"
            >
              <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl ${feature.color}`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
