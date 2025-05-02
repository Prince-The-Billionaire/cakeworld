"use client"
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

const ProductCard = () => {
  const [clicked, setClicked] = useState(false)
  const divref = useRef<HTMLDivElement>(null)
  const smalldivref = useRef<HTMLDivElement>(null)
  const pref =useRef<HTMLParagraphElement>(null)
  const handleClick = () => {
    setClicked((prev) => (!prev))
  }

  useEffect(() =>{
      gsap.to(divref.current,{
        rotateY:clicked ? 180: 0,
        duration:1.2
      })
  },[clicked])
  return (
    <div>
        <div ref={divref} onClick={handleClick} className='relative w-[300px] h-[300px] bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 animate-border p-1 shadow shadow-black/15 hover:cursor-pointer rounded-xl'>
            <div className={ ` w-full rounded-xl ${clicked ? 'bg-transparent':'bg-gray-100'}`}>

                <Image src={'/meatpie.jpg'} alt='female' width={300} height={3000} className={`rounded-xl transition duration-300 ${clicked ? 'hidden' :'block'}`}/>

            </div>
            
            <div className={`${clicked ? 'block' :'hidden'}  text-white font-semibold rotate-y-180 pt-14 relative p-[3px] rounded-2xl   `}>
              <p className='absolute z-10 top-16 left-16 text-yellow-600 text-center w-36 font-bold  text-4xl font-sans'>Adult Birthday Cakes</p>
            </div>
        </div>
    </div>
  )
}

export default ProductCard