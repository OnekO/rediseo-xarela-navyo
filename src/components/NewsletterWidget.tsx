import { useState } from 'react'
import { EnvelopeSimple, PaperPlaneRight } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { toast } from 'sonner'
import { useKV } from '@github/spark/hooks'

export function NewsletterWidget() {
  const [email, setEmail] = useState('')
  const [subscribers, setSubscribers] = useKV<string[]>('newsletter-subscribers', [])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !email.includes('@')) {
      toast.error('Introduce un correo electrónico válido')
      return
    }

    setIsSubmitting(true)
    
    setTimeout(() => {
      setSubscribers((current = []) => {
        if (current.includes(email)) {
          toast.info('Xa estás subscrito ao boletín')
          return current
        }
        toast.success('Subscrito correctamente!')
        return [...current, email]
      })
      setEmail('')
      setIsSubmitting(false)
    }, 500)
  }

  return (
    <Card className="border-2 border-border overflow-hidden">
      <CardHeader className="bg-gradient-to-br from-accent to-secondary">
        <CardTitle className="flex items-center gap-2 text-primary-foreground">
          <EnvelopeSimple size={24} weight="duotone" />
          <span style={{ fontFamily: 'Outfit' }}>Subscríbete ao noso boletín</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          Ofertas de emprego, formación, eventos... todo directo á túa bandeja de entrada.
        </p>
        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            type="email"
            id="newsletter-email"
            placeholder="Introduce o teu correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-input focus:ring-accent"
            disabled={isSubmitting}
          />
          <Button 
            type="submit" 
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold tracking-wide transition-transform hover:scale-105"
            disabled={isSubmitting}
          >
            <span className="uppercase text-sm tracking-wider">Enviar</span>
            <PaperPlaneRight size={18} weight="bold" className="ml-2" />
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
