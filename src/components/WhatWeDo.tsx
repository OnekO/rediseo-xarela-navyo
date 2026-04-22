import { HandHeart, Users, GraduationCap } from '@phosphor-icons/react'

const features = [
  {
    icon: HandHeart,
    title: 'Inclusión Social',
    description: 'Promovendo o desenvolvemento comunitario e a igualdade de oportunidades'
  },
  {
    icon: Users,
    title: 'Colectivos Sociais',
    description: 'Intervindo e promovendo co colectivos sociais máis desfavorecidos'
  },
  {
    icon: GraduationCap,
    title: 'Educación',
    description: 'Educación integral, voluntariado e participación social'
  }
]

export function WhatWeDo() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{ fontFamily: 'Outfit' }}>
            Que facemos?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Traballamos a favor da plena inclusión na sociedade dos colectivos sociais máis desfavorecidos 
            intervindo e promovendo o desenvolvemento comunitario, a igualdade de oportunidades, a educación 
            integral, o voluntariado e a participación social.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-xl">
                <feature.icon size={56} weight="duotone" className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3" style={{ fontFamily: 'Outfit' }}>
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
