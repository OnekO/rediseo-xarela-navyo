import { Card } from '@/components/ui/card'
import { HandHeart, Users, GraduationCap, Heart, Target, House } from '@phosphor-icons/react'

const projects = [
  {
    icon: HandHeart,
    title: 'Programa de Inclusión Social',
    description: 'Desenvolvemento de proxectos integrais para persoas en risco de exclusión social, promovendo a súa plena participación na sociedade.',
    details: [
      'Atención personalizada a colectivos vulnerables',
      'Programas de inserción sociolaboral',
      'Apoio psicosocial e orientación',
      'Talleres de habilidades sociais'
    ]
  },
  {
    icon: Users,
    title: 'Colectivos Atendidos',
    description: 'Traballamos con diversos grupos sociais para garantir a igualdade de oportunidades e o desenvolvemento persoal de cada individuo.',
    details: [
      'Persoas maiores en situación de dependencia',
      'Menores en situación de vulnerabilidade',
      'Persoas con diversidade funcional',
      'Familias en situación de risco social'
    ]
  },
  {
    icon: GraduationCap,
    title: 'Formación e Educación',
    description: 'Programas educativos e formativos adaptados ás necesidades de cada colectivo, promovendo o crecemento persoal e profesional.',
    details: [
      'Formación en competencias básicas',
      'Cursos de cualificación profesional',
      'Apoio educativo a menores',
      'Alfabetización dixital'
    ]
  },
  {
    icon: Heart,
    title: 'Apoio Emocional',
    description: 'Servizos de acompañamento e apoio psicolóxico para persoas e familias que atravesan dificultades.',
    details: [
      'Terapia individual e grupal',
      'Grupos de apoio mutuo',
      'Intervención en crisis',
      'Orientación familiar'
    ]
  },
  {
    icon: Target,
    title: 'Proxectos Comunitarios',
    description: 'Iniciativas que fomentan a participación cidadá e o desenvolvemento das comunidades locais.',
    details: [
      'Dinamización comunitaria',
      'Actividades culturais e recreativas',
      'Promoción do asociacionismo',
      'Voluntariado social'
    ]
  },
  {
    icon: House,
    title: 'Asistencia Domiciliaria',
    description: 'Servizos de atención no fogar para persoas maiores ou con diversidade funcional que necesitan apoio nas súas actividades diarias.',
    details: [
      'Coidados persoais',
      'Tarefas domésticas',
      'Acompañamento',
      'Teleasistencia'
    ]
  }
]

export function LaborSocialPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6" style={{ fontFamily: 'Outfit' }}>
            Labor <span className="text-secondary">Social</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Desde 1999, traballamos incansablemente para promover a inclusión social e o benestar 
            dos colectivos máis vulnerables da nosa comunidade. A nosa labor social abarca unha 
            ampla gama de servizos e programas deseñados para mellorar a calidade de vida das persoas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/30"
            >
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center flex-shrink-0">
                  <project.icon size={40} weight="duotone" className="text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-foreground mb-3" style={{ fontFamily: 'Outfit' }}>
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <ul className="space-y-2">
                    {project.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-12 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Outfit' }}>
              Xuntos, facemos a diferenza
            </h2>
            <p className="text-lg text-primary-foreground/90 leading-relaxed mb-8">
              O noso compromiso é traballar cada día para construír unha sociedade máis xusta e inclusiva, 
              onde todas as persoas teñan as mesmas oportunidades de desenvolverse e alcanzar o seu máximo potencial.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold mb-2 text-accent">25+</div>
                <div className="text-sm text-primary-foreground/80">Anos de experiencia</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2 text-accent">1000+</div>
                <div className="text-sm text-primary-foreground/80">Persoas atendidas</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2 text-accent">15+</div>
                <div className="text-sm text-primary-foreground/80">Programas activos</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
