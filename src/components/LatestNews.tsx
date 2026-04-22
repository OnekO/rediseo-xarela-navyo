import { Calendar } from '@phosphor-icons/react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useKV } from '@github/spark/hooks'

interface NewsItem {
  id: string
  title: string
  date: string
  image: string
}

export function LatestNews() {
  const [news] = useKV<NewsItem[]>('latest-news', [])

  return (
    <Card className="border-2 border-border">
      <div className="p-6 bg-primary">
        <h3 className="text-xl font-bold text-primary-foreground" style={{ fontFamily: 'Outfit' }}>
          Últimas Novas
        </h3>
      </div>
      <CardContent className="p-6">
        {!news || news.length === 0 ? (
          <p className="text-muted-foreground text-center py-8">
            Non hai novas disponibles
          </p>
        ) : (
          <div className="space-y-4">
            {news.map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer transition-transform hover:scale-[1.02]"
              >
                <div className="flex gap-4">
                  <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gradient-to-br from-secondary/20 to-accent/20">
                    <div className="w-full h-full flex items-center justify-center text-4xl">
                      {item.image}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                      {item.title}
                    </h4>
                    <Badge variant="outline" className="text-xs">
                      <Calendar size={12} weight="bold" className="mr-1" />
                      {item.date}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
