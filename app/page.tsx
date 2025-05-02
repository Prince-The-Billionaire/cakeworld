import Credibility from '@/components/Credibility'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import React from 'react'

const page = () => {
  return (
    <div className='overflow-x-hidden'>
      <Hero/>
      <Credibility/>
      <Products/>
    </div>
  )
}

export default page