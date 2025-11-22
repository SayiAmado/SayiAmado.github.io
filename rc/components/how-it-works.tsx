import Image from "next/image"

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Texture for visual interest */}
      <div className="absolute right-0 top-0 h-full w-1/3 opacity-[0.03] pointer-events-none">
        <Image src="/arrows.png" alt="texture" fill className="object-cover" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="mx-auto max-w-2xl text-center mb-20">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground mb-4">Cómo funciona</h2>
          <div className="h-1 w-20 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          {[
            {
              step: "01",
              title: "Publica tu Artículo",
              desc: "Toma una foto, añade una descripción y fija tu precio. Tardas menos de 30 segundos.",
            },
            {
              step: "02",
              title: "Conecta y Chatea",
              desc: "Chatea de forma segura con estudiantes interesados. Acuerda un lugar seguro en el campus.",
            },
            {
              step: "03",
              title: "Intercambia y Gana",
              desc: "Reúnete, intercambia el artículo y recibe el pago al instante a través de nuestra app segura.",
            },
          ].map((item, i) => (
            <div key={i} className="relative flex flex-col items-center text-center group">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white border-2 border-primary shadow-sm text-xl font-bold text-primary transition-transform group-hover:scale-110">
                {item.step}
              </div>
              <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
              <p className="text-muted-foreground max-w-xs">{item.desc}</p>

              {/* Connecting arrow for desktop - simplified visual representation */}
              {i !== 2 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-primary/30 to-transparent pointer-events-none">
                  <div className="absolute right-0 -top-1 h-3 w-3 border-t-2 border-r-2 border-primary/30 rotate-45"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
