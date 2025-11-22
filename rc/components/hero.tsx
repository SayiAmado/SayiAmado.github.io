import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShoppingBag, RefreshCw } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-muted/30 py-20 lg:py-32">
      {/* Texture Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <Image src="/arrows.png" alt="texture" fill className="object-cover" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col items-start gap-6">
            <div className="inline-flex items-center rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary">
              <span className="flex h-2 w-2 rounded-full bg-secondary mr-2 animate-pulse"></span>
              En vivo en 10+ Universidades
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-primary font-hand">RE</span> Define Tu <br />
              <span className="text-secondary font-hand">Vida Estudiantil</span>
            </h1>

            <p className="text-lg text-muted-foreground md:text-xl max-w-lg leading-relaxed">
              El mercado exclusivo para estudiantes universitarios. Compra libros, vende electrónica e intercambia
              equipo de forma segura en tu comunidad universitaria.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button size="lg" className="gap-2 text-base font-semibold bg-primary hover:bg-primary/90 text-white">
                Explorar <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 text-base bg-white">
                <RefreshCw className="h-4 w-4" /> Cómo funciona
              </Button>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-background bg-gray-200 flex items-center justify-center text-xs overflow-hidden"
                  >
                    <Image
                      src={`/student-face.png?height=32&width=32&query=student face ${i}`}
                      alt="user"
                      width={32}
                      height={32}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <p>Con la confianza de 4,000+ estudiantes</p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 p-8 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-3xl"></div>
              <div className="relative h-full w-full bg-white rounded-2xl shadow-inner border overflow-hidden grid grid-cols-2 gap-4 p-4">
                {/* Mock UI Elements */}
                <div className="col-span-2 bg-muted/50 rounded-xl h-32 flex items-center justify-center border border-dashed border-gray-300">
                  <span className="text-muted-foreground font-medium">Intercambio de Libros</span>
                </div>
                <div className="bg-primary/10 rounded-xl h-32 flex items-center justify-center">
                  <ShoppingBag className="h-8 w-8 text-primary opacity-50" />
                </div>
                <div className="bg-secondary/10 rounded-xl h-32 flex items-center justify-center">
                  <RefreshCw className="h-8 w-8 text-secondary opacity-50" />
                </div>
                <div className="col-span-2 bg-gray-50 rounded-xl p-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-secondary/20"></div>
                  <div className="space-y-2 flex-1">
                    <div className="h-2 w-3/4 bg-gray-200 rounded"></div>
                    <div className="h-2 w-1/2 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-12 -right-12 h-24 w-24 bg-secondary/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-12 -left-12 h-32 w-32 bg-primary/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
