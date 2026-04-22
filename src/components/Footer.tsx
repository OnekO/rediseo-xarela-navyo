export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
              <span className="text-xl font-bold text-primary">X</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-wide" style={{ fontFamily: 'Outfit' }}>
                XARELA
              </span>
              <span className="text-xs text-primary-foreground/70">asociación</span>
            </div>
          </div>
          <div className="text-sm text-primary-foreground/80 text-center">
            © {new Date().getFullYear()} XARELA Asociación. Todos os dereitos reservados.
          </div>
        </div>
      </div>
    </footer>
  )
}
