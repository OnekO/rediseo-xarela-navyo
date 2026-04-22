import { Card } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Heart, Buildings, Users, Storefront } from '@phosphor-icons/react'

const supporters = {
  institucions: [
    { name: 'Xunta de Galicia', type: 'Administración Autonómica', support: 'Financiamento de proxectos sociais' },
    { name: 'Deputación Provincial', type: 'Administración Local', support: 'Subvencións e apoio logístico' },
    { name: 'Concellos Colaboradores', type: 'Administración Local', support: 'Cesión de espazos e recursos' },
    { name: 'Universidade de Santiago', type: 'Institución Educativa', support: 'Prácticas e investigación social' }
  ],
  empresas: [
    { name: 'Banco Local S.A.', sector: 'Financeiro', support: 'Patrocinio anual de programas' },
    { name: 'Supermercados Unidos', sector: 'Distribución', support: 'Doazóns de alimentos' },
    { name: 'Construcciones Galegas', sector: 'Construcción', support: 'Melloras de instalacións' },
    { name: 'Tecnoloxía para Todos', sector: 'Tecnoloxía', support: 'Equipamento informático' },
    { name: 'Farmacia Central', sector: 'Saúde', support: 'Produtos de hixiene e saúde' },
    { name: 'Librería Cultura', sector: 'Educación', support: 'Material educativo' }
  ],
  voluntarios: [
    { name: 'María García', role: 'Coordinadora de voluntariado', years: '10 anos' },
    { name: 'Carlos Fernández', role: 'Apoio educativo', years: '8 anos' },
    { name: 'Ana Rodríguez', role: 'Acompañamento a maiores', years: '6 anos' },
    { name: 'José López', role: 'Dinamización comunitaria', years: '5 anos' },
    { name: 'Laura Martínez', role: 'Formación laboral', years: '7 anos' },
    { name: 'Pedro Sánchez', role: 'Apoio administrativo', years: '4 anos' }
  ],
  colaboradores: [
    { name: 'Asociación de Veciños Centro', contribution: 'Organización de eventos comunitarios' },
    { name: 'Club Deportivo Local', contribution: 'Actividades deportivas para menores' },
    { name: 'Coro Parroquial', contribution: 'Actuacións en eventos benéficos' },
    { name: 'Grupo de Teatro Aficionado', contribution: 'Talleres de expresión artística' },
    { name: 'Rede de Bibliotecas', contribution: 'Préstamo de espazos e materiais' },
    { name: 'Colexio Profesional Traballo Social', contribution: 'Asesoramento técnico' }
  ]
}

export function AgradecementosPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-accent mb-6">
            <Heart size={40} weight="fill" className="text-primary-foreground" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6" style={{ fontFamily: 'Outfit' }}>
            <span className="text-secondary">Agradecementos</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            O noso traballo non sería posible sen o apoio de moitas persoas e organizacións. 
            Queremos expresar o noso máis sincero agradecemento a todos os que fan posible a nosa labor social.
          </p>
        </div>

        <div className="space-y-16">
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                <Buildings size={32} weight="duotone" className="text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground" style={{ fontFamily: 'Outfit' }}>
                  Institucións Públicas
                </h2>
                <p className="text-muted-foreground">Gracias polo seu compromiso co benestar social</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {supporters.institucions.map((inst, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-foreground mb-2" style={{ fontFamily: 'Outfit' }}>
                    {inst.name}
                  </h3>
                  <p className="text-sm text-secondary font-medium mb-2">{inst.type}</p>
                  <p className="text-muted-foreground text-sm">{inst.support}</p>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                <Storefront size={32} weight="duotone" className="text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground" style={{ fontFamily: 'Outfit' }}>
                  Empresas Colaboradoras
                </h2>
                <p className="text-muted-foreground">Responsabilidade social corporativa en acción</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {supporters.empresas.map((empresa, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-semibold text-foreground mb-2" style={{ fontFamily: 'Outfit' }}>
                    {empresa.name}
                  </h3>
                  <p className="text-sm text-secondary font-medium mb-2">{empresa.sector}</p>
                  <p className="text-muted-foreground text-sm">{empresa.support}</p>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                <Heart size={32} weight="duotone" className="text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground" style={{ fontFamily: 'Outfit' }}>
                  Voluntarios Destacados
                </h2>
                <p className="text-muted-foreground">Persoas que dedican o seu tempo e talento</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {supporters.voluntarios.map((voluntario, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <Avatar className="w-12 h-12 bg-gradient-to-br from-secondary to-accent">
                      <AvatarFallback className="text-primary-foreground font-semibold">
                        {voluntario.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-1" style={{ fontFamily: 'Outfit' }}>
                        {voluntario.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">{voluntario.role}</p>
                      <p className="text-xs text-secondary font-medium">{voluntario.years} de colaboración</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                <Users size={32} weight="duotone" className="text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground" style={{ fontFamily: 'Outfit' }}>
                  Entidades Colaboradoras
                </h2>
                <p className="text-muted-foreground">Traballo en rede para o ben común</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {supporters.colaboradores.map((colab, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-semibold text-foreground mb-2" style={{ fontFamily: 'Outfit' }}>
                    {colab.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">{colab.contribution}</p>
                </Card>
              ))}
            </div>
          </section>
        </div>

        <Card className="p-12 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground mt-16">
          <div className="text-center max-w-3xl mx-auto">
            <Heart size={48} weight="fill" className="text-accent mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Outfit' }}>
              Grazas a todos
            </h2>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Se ti tamén queres formar parte desta rede solidaria e contribuír ao noso traballo, 
              estaremos encantados de contar contigo. Xuntos podemos facer moito máis.
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}
