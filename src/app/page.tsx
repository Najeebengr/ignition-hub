import React from 'react'
import Hero from '@/components/hero'
import Feature from '@/components/feature'
import CategorySection from '@/components/categorySection'
import Testimonials from '@/components/testimonials'
import { heroSectionContent } from '@/data'

function Home() {
  return (
    <main>
      <Hero page='home' content={heroSectionContent[0]} />
      <Feature />
      <CategorySection category='Tesla' />
      <Testimonials />
      <CategorySection category='Hyundai' />
    </main>
  )
}

export default Home
