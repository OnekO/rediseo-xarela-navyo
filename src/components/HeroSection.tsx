export function HeroSection() {
  return (
    <section id="inicio" className="relative h-[600px] mt-20 overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(233, 125, 46, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(233, 125, 46, 0.1) 0%, transparent 50%)'
        }}
      />
      
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-1/4 w-64 h-64 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 tracking-tight" style={{ fontFamily: 'Outfit', letterSpacing: '-0.02em' }}>
            Somos <span className="text-accent">XARELA</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
            Unha asociación de ámbito autonómico formada principalmente por profesionais do ámbito social e educativo. 
            A idea de crear esta asociación xurde en 1999, e parte do sentir dos seus membros que apreciaron ó longo da súa 
            traxectoria profesional, a necesidade de cubrir carencias sociais, asistenciais, culturais e lúdicas, tanto nas 
            distintas institucións relacionadas con colectivos sociais desfavorecidos como na propia administración.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
