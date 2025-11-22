import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import Image from "next/image"

const items = [
  {
    title: "Calculus Early Transcendentals",
    price: "$45.00",
    category: "Libros",
    image: "/calculus-textbook.jpg",
    campus: "Campus Principal",
  },
  {
    title: "Graphing Calculator TI-84",
    price: "$80.00",
    category: "Electrónica",
    image: "/graphing-calculator.jpg",
    campus: "Facultad de Ciencias",
  },
  {
    title: "Kit de Dibujo Arquitectónico",
    price: "$35.00",
    category: "Materiales",
    image: "/architectural-drawing-kit.jpg",
    campus: "Facultad de Artes",
  },
  {
    title: "Mini Nevera para Dormitorio",
    price: "$50.00",
    category: "Muebles",
    image: "/mini-fridge.jpg",
    campus: "Residencia A",
  },
]

export function MarketplacePreview() {
  return (
    <section id="marketplace" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <p className="text-secondary font-medium mb-2 font-hand text-lg">Novedades</p>
            <h2 className="text-3xl font-bold tracking-tight">Destacados del Mercado</h2>
          </div>
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
          >
            Ver Todo
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-xl border bg-white shadow-sm transition-all hover:shadow-md"
            >
              <div className="relative aspect-square overflow-hidden bg-muted">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-gray-500 hover:text-red-500 transition-colors z-10">
                  <Heart className="h-4 w-4" />
                </button>
                <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded z-10">
                  {item.category}
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold truncate pr-2">{item.title}</h3>
                  <span className="font-bold text-primary">{item.price}</span>
                </div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                  {item.campus}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
