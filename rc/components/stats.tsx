import { Users, ShoppingBag, School } from "lucide-react"

export function Stats() {
  return (
    <section className="border-y bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="flex flex-col items-center text-center group">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-hover:scale-110">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-3xl font-bold text-foreground">4,000+</h3>
            <p className="text-sm text-muted-foreground">Estudiantes Activos</p>
          </div>
          <div className="flex flex-col items-center text-center group">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-secondary transition-transform group-hover:scale-110">
              <ShoppingBag className="h-6 w-6" />
            </div>
            <h3 className="text-3xl font-bold text-foreground">500+</h3>
            <p className="text-sm text-muted-foreground">Intercambios Activos</p>
          </div>
          <div className="flex flex-col items-center text-center group">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-hover:scale-110">
              <School className="h-6 w-6" />
            </div>
            <h3 className="text-3xl font-bold text-foreground">10+</h3>
            <p className="text-sm text-muted-foreground">Universidades</p>
          </div>
        </div>
      </div>
    </section>
  )
}
