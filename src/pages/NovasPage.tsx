import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, ArrowRight } from '@phosphor-icons/react'

interface NewsItem {
  id: number
  title: string
  excerpt: string
  content: string
  date: string
  category: string
  image: string
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: 'Nova campaña de recollida de alimentos',
    excerpt: 'Iniciamos unha nova campaña solidaria para apoiar ás familias da nosa comunidade que máis o necesitan.',
    content: 'Dende XARELA, estamos orgullosos de anunciar o comezo dunha nova campaña de recollida de alimentos que se estenderá durante todo o mes. Esta iniciativa nace da necesidade de apoiar ás familias da nosa comunidade que están pasando por dificultades económicas. Colaboramos con varios supermercados locais e centros comunitarios para facilitar a doación de produtos non perecedoiros. Agradecemos a solidariedade de todos os veciños.',
    date: '2024-01-15',
    category: 'Proxectos',
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&h=400&fit=crop'
  },
  {
    id: 2,
    title: 'Taller de formación en competencias dixitais',
    excerpt: 'Organizamos un taller gratuíto para persoas maiores sobre o uso de smartphones e tablets.',
    content: 'O vindeiro mes daremos comezo a un novo taller de formación en competencias dixitais especialmente deseñado para persoas maiores. Nestas sesións, aprenderán a utilizar smartphones e tablets, navegación por internet, correo electrónico, e aplicacións útiles para o día a día. O taller será gratuíto e durará 8 semanas con sesións de 2 horas cada unha. As prazas son limitadas, polo que recomendamos inscribirse canto antes.',
    date: '2024-01-10',
    category: 'Formación',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=400&fit=crop'
  },
  {
    id: 3,
    title: 'Programa de voluntariado 2024',
    excerpt: 'Abrimos as inscricións para o noso programa de voluntariado anual. Únete ao noso equipo!',
    content: 'Estamos emocionados de abrir as inscricións para o programa de voluntariado 2024. Buscamos persoas comprometidas e con ganas de axudar á nosa comunidade. Como voluntario, poderás participar en diversas actividades: apoio educativo a menores, acompañamento a persoas maiores, organización de eventos comunitarios e moito máis. Ofrecemos formación inicial e apoio continuo a todos os nosos voluntarios.',
    date: '2024-01-05',
    category: 'Voluntariado',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=400&fit=crop'
  },
  {
    id: 4,
    title: 'Éxito do programa de inserción laboral',
    excerpt: 'O 85% dos participantes no noso programa conseguiron emprego no último ano.',
    content: 'Estamos orgullosos de compartir os resultados do noso programa de inserción laboral 2023. Gracias ao esforzo dos nosos profesionais e á dedicación dos participantes, conseguimos que o 85% das persoas atendidas lograsen un emprego estable. O programa incluíu formación en competencias profesionais, preparación de entrevistas, e intermediación con empresas locais. Este éxito refórzanos no noso compromiso de seguir traballando pola inclusión sociolaboral.',
    date: '2023-12-20',
    category: 'Resultados',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop'
  },
  {
    id: 5,
    title: 'Celebración do 25 aniversario',
    excerpt: 'Conmemoramos 25 anos de traballo social na nosa comunidade con un evento especial.',
    content: 'Este ano celebramos o noso 25 aniversario! Desde 1999, XARELA ten traballado incansablemente para apoiar aos colectivos máis vulnerables da nosa sociedade. Para conmemorar este fito, organizaremos un evento especial o próximo mes onde compartiremos historias de éxito, recoñeceremos aos nosos colaboradores e voluntarios, e presentaremos os nosos plans de futuro. Convidamos a toda a comunidade a celebrar con nós este importante aniversario.',
    date: '2023-12-15',
    category: 'Eventos',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=400&fit=crop'
  },
  {
    id: 6,
    title: 'Nova alianza con universidades locais',
    excerpt: 'Establecemos colaboracións con universidades para prácticas profesionais en traballo social.',
    content: 'XARELA acaba de establecer alianzas estratéxicas con varias universidades da comunidade para facilitar prácticas profesionais aos estudantes de traballo social, educación social e psicoloxía. Esta colaboración permitirá aos futuros profesionais adquirir experiencia práctica en contextos reais, mentres que nós nos beneficiamos das súas perspectivas frescas e coñecementos actualizados. É unha iniciativa que fortalece a formación académica e mellora os nosos servizos.',
    date: '2023-12-10',
    category: 'Colaboracións',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=400&fit=crop'
  }
]

export function NovasPage() {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null)

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6" style={{ fontFamily: 'Outfit' }}>
            Novas e <span className="text-secondary">Actualidade</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Mantente informado sobre as nosas actividades, proxectos e eventos. 
            Aquí compartimos as últimas novidades de XARELA e o noso traballo na comunidade.
          </p>
        </div>

        {!selectedNews ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <Card 
                key={item.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedNews(item)}
              >
                <div className="aspect-video overflow-hidden bg-muted">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                      {item.category}
                    </Badge>
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar size={16} />
                      {new Date(item.date).toLocaleDateString('gl-ES', { 
                        day: 'numeric', 
                        month: 'long', 
                        year: 'numeric' 
                      })}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-secondary transition-colors" style={{ fontFamily: 'Outfit' }}>
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-secondary font-medium">
                    Ler máis
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <Button 
              variant="ghost" 
              onClick={() => setSelectedNews(null)}
              className="mb-8 text-secondary hover:text-secondary/80"
            >
              ← Volver ás novas
            </Button>
            
            <article className="bg-card rounded-lg overflow-hidden shadow-xl">
              <div className="aspect-video overflow-hidden bg-muted">
                <img 
                  src={selectedNews.image} 
                  alt={selectedNews.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-12">
                <div className="flex items-center gap-4 mb-6">
                  <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                    {selectedNews.category}
                  </Badge>
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <Calendar size={18} />
                    {new Date(selectedNews.date).toLocaleDateString('gl-ES', { 
                      day: 'numeric', 
                      month: 'long', 
                      year: 'numeric' 
                    })}
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{ fontFamily: 'Outfit' }}>
                  {selectedNews.title}
                </h1>
                
                <p className="text-lg text-foreground leading-relaxed whitespace-pre-line">
                  {selectedNews.content}
                </p>
              </div>
            </article>
          </div>
        )}
      </div>
    </div>
  )
}
