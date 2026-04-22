import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'
import { MapPin, Phone, Envelope, Clock, FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

export function ContactoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success('Mensaxe enviada correctamente! Contactaremos contigo pronto.')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6" style={{ fontFamily: 'Outfit' }}>
            <span className="text-secondary">Contacto</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Estamos aquí para axudarche. Ponte en contacto con nós para calquera consulta, 
            suxestión ou información sobre os nosos servizos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center mx-auto mb-4">
              <MapPin size={32} weight="duotone" className="text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3" style={{ fontFamily: 'Outfit' }}>
              Visítanos
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Rúa Principal, 123<br />
              15001 Santiago de Compostela<br />
              A Coruña, Galicia
            </p>
          </Card>

          <Card className="p-8 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center mx-auto mb-4">
              <Phone size={32} weight="duotone" className="text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3" style={{ fontFamily: 'Outfit' }}>
              Chámanos
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Teléfono: +34 981 123 456<br />
              Móbil: +34 666 123 456<br />
              Luns a Venres
            </p>
          </Card>

          <Card className="p-8 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center mx-auto mb-4">
              <Envelope size={32} weight="duotone" className="text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3" style={{ fontFamily: 'Outfit' }}>
              Escríbenos
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              info@xarela.com<br />
              voluntariado@xarela.com<br />
              Resposta en 24-48h
            </p>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card className="p-8">
              <h2 className="text-3xl font-bold text-foreground mb-6" style={{ fontFamily: 'Outfit' }}>
                Envíanos unha mensaxe
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome completo *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="O teu nome"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo electrónico *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="teu@email.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+34 666 123 456"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Asunto *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="¿Sobre que queres falar?"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensaxe *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Escribe aquí a túa mensaxe..."
                    rows={6}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg py-6"
                >
                  Enviar mensaxe
                </Button>
              </form>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center flex-shrink-0">
                  <Clock size={24} weight="duotone" className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3" style={{ fontFamily: 'Outfit' }}>
                    Horario de atención
                  </h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex justify-between gap-4">
                      <span>Luns a Xoves:</span>
                      <span className="font-medium">9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span>Venres:</span>
                      <span className="font-medium">9:00 - 15:00</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span>Sábado e Domingo:</span>
                      <span className="font-medium">Pechado</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
              <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Outfit' }}>
                Síguenos nas redes
              </h3>
              <p className="text-primary-foreground/90 mb-6 leading-relaxed">
                Mantente ao día das nosas actividades, eventos e novas a través das nosas redes sociais.
              </p>
              <div className="flex gap-4">
                <Button 
                  size="icon" 
                  className="w-12 h-12 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  <FacebookLogo size={24} weight="fill" />
                </Button>
                <Button 
                  size="icon" 
                  className="w-12 h-12 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  <InstagramLogo size={24} weight="fill" />
                </Button>
                <Button 
                  size="icon" 
                  className="w-12 h-12 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  <LinkedinLogo size={24} weight="fill" />
                </Button>
              </div>
            </Card>

            <Card className="p-8 bg-muted">
              <h3 className="text-xl font-semibold text-foreground mb-4" style={{ fontFamily: 'Outfit' }}>
                Como chegar
              </h3>
              <div className="aspect-video bg-gradient-to-br from-secondary/20 to-accent/20 rounded-lg flex items-center justify-center">
                <MapPin size={48} className="text-muted-foreground" />
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Estamos situados no centro de Santiago de Compostela, con fácil acceso en transporte público. 
                Liñas de bus 1, 5 e 10. Aparcamento público a 100 metros.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
