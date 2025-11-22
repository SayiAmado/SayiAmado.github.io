import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="relative h-8 w-24">
              <Image src="/logo.png" alt="RE Cambia" fill className="object-contain object-left brightness-0 invert" />
            </div>
            <p className="text-sm leading-relaxed max-w-xs text-gray-400">
              El mercado n.º 1 de estudiante a estudiante. Construyendo una comunidad sostenible para campus
              universitarios en todo el país.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Plataforma</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Mercado
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Cómo funciona
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Seguridad
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  App Móvil
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Soporte</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Centro de Ayuda
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Normas de la Comunidad
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Términos de Servicio
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Política de Privacidad
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Mantente Conectado</h4>
            <p className="text-sm text-gray-400 mb-4">
              Recibe las últimas actualizaciones sobre nuevas funciones y lanzamientos en campus.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Ingresa tu email"
                className="bg-gray-800 border-none rounded-md px-3 py-2 text-sm w-full focus:ring-1 focus:ring-primary outline-none text-white"
              />
              <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                Unirse
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} RE Cambia. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
