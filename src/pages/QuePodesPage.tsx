import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { HandHeart, CurrencyDollar, Users, Megaphone, Gift, Buildings } from '@phosphor-icons/react'

const ways = [
  {
    icon: Users,
    title: 'Fai Voluntariado',
    description: 'Únete ao noso equipo de voluntarios e dedica o teu tempo a axudar á comunidade. Non necesitas experiencia previa, só ganas de colaborar.',
    actions: [
      'Acompañamento a persoas maiores',
      'Apoio educativo a menores',
      'Colaboración en eventos',
      'Tarefas administrativas'
    ],
    cta: 'Inscríbete como voluntario'
  },
  {
    icon: CurrencyDollar,
    title: 'Fai unha Doazón',
    description: 'As túas achegas económicas permítennos manter e ampliar os nosos programas sociais. Calquera cantidade marca a diferenza.',
    actions: [
      'Doazón puntual',
      'Colaboración mensual',
      'Doazón en memoria',
      'Doazón de empresas'
    ],
    cta: 'Contribúe agora'
  },
  {
    icon: Gift,
    title: 'Doa Materiais',
    description: 'Aceitamos doazóns de alimentos non perecedoiros, roupa, material escolar, libros e outros artigos en bo estado.',
    actions: [
      'Alimentos non perecedoiros',
      'Roupa e calzado',
      'Material escolar',
      'Libros e xoguetes'
    ],
    cta: 'Información sobre doazóns'
  },
  {
    icon: Megaphone,
    title: 'Difunde a Nosa Labor',
    description: 'Axúdanos a chegar a máis persoas compartindo información sobre os nosos proxectos nas túas redes sociais.',
    actions: [
      'Comparte nas redes sociais',
      'Fala de nós ao teu arredor',
      'Asiste aos nosos eventos',
      'Recomenda os nosos servizos'
    ],
    cta: 'Segue as nosas redes'
  },
  {
    icon: HandHeart,
    title: 'Patrocina un Proxecto',
    description: 'Empresas e particulares poden patrocinar proxectos específicos e ver o impacto directo da súa contribución.',
    actions: [
      'Patrocinio de programas educativos',
      'Financiamento de eventos',
      'Apoio a talleres formativos',
      'Colaboración en campañas'
    ],
    cta: 'Coñece os proxectos'
  },
  {
    icon: Buildings,
    title: 'Colaboración Empresarial',
    description: 'As empresas poden colaborar mediante convenios de RSC, doazóns, voluntariado corporativo ou prestación de servizos.',
    actions: [
      'Convenios de RSC',
      'Voluntariado corporativo',
      'Doazóns en especie',
      'Servizos profesionais'
    ],
    cta: 'Información para empresas'
  }
]

export function QuePodesPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6" style={{ fontFamily: 'Outfit' }}>
            ¿Qué <span className="text-secondary">Podes Facer</span>?
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Hai moitas formas de colaborar con XARELA e contribuír a construír unha sociedade máis 
            xusta e inclusiva. Descobre como podes axudar e formar parte do cambio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {ways.map((way, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/30"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center flex-shrink-0">
                    <way.icon size={40} weight="duotone" className="text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-foreground mb-3" style={{ fontFamily: 'Outfit' }}>
                      {way.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {way.description}
                    </p>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6 flex-grow">
                  {way.actions.map((action, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  {way.cta}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-12 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Outfit' }}>
              Cada acción conta
            </h2>
            <p className="text-lg text-primary-foreground/90 leading-relaxed mb-8">
              Non importa como elixas colaborar, o importante é formar parte dunha rede solidaria 
              que traballa cada día por un futuro mellor. Entre todos, facemos posible o cambio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              >
                Contacta con nós
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Descarga o noso dossier
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
