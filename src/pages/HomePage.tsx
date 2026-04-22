import { HeroSection } from '@/components/HeroSection'
import { WhatWeDo } from '@/components/WhatWeDo'
import { NewsletterWidget } from '@/components/NewsletterWidget'
import { LatestNews } from '@/components/LatestNews'

export function HomePage() {
  return (
    <>
      <HeroSection />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <WhatWeDo />
          </div>
          
          <div className="space-y-8">
            <NewsletterWidget />
            <LatestNews />
          </div>
        </div>
      </div>
    </>
  )
}
