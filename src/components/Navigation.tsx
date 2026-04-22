import { useState } from 'react'
import { List, X } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'

const menuItems = [
  { label: 'INICIO', href: '#inicio' },
  { label: 'LABOR SOCIAL', href: '#labor-social' },
  { label: 'NOVAS', href: '#novas' },
  { label: '¿QUÉ PODES FACER?', href: '#que-podes-facer' },
  { label: 'AGRADECEMENTOS', href: '#agradecementos' },
  { label: 'CONTACTO', href: '#contacto' },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">X</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary-foreground tracking-wide" style={{ fontFamily: 'Outfit' }}>
                XARELA
              </span>
              <span className="text-xs text-primary-foreground/80">asociación</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-primary-foreground hover:text-accent transition-colors tracking-wide relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-3/4 group-hover:left-[12.5%]" />
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-primary-foreground hover:bg-primary-foreground/10"
            >
              {mobileMenuOpen ? <X size={24} /> : <List size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/10">
          <div className="px-4 py-4 space-y-1">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-primary-foreground hover:bg-primary-foreground/10 rounded-md transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
