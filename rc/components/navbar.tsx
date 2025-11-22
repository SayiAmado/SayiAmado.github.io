import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-10 w-32">
            <Image src="/logo.png" alt="RE Cambia" fill className="object-contain object-left" priority />
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="#features" className="hover:text-primary transition-colors">
            Características
          </Link>
          <Link href="#how-it-works" className="hover:text-primary transition-colors">
            Cómo funciona
          </Link>
          <Link href="#marketplace" className="hover:text-primary transition-colors">
            Mercado
          </Link>
          <Link href="#community" className="hover:text-primary transition-colors">
            Comunidad
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/login" className="hidden md:block text-sm font-medium hover:text-primary">
            Iniciar Sesión
          </Link>
          <Button className="bg-secondary hover:bg-secondary/90 text-white font-bold">Empezar a Cambiar</Button>
        </div>
      </div>
    </header>
  )
}
