'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const images = ['/images/slider1.webp', '/images/slider2.webp', '/images/slider3.webp']

export default function Slider() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
                   const timer = setInterval(() => {
                   setIndex((prev) => (prev + 1) % images.length)
                     }, 3000)
                  return () => clearInterval(timer)
    }, [])

  return (
    <div className="w-full h-[80vh]  relative  mt-[-10px]">
      {images.map((img, i) => (
        <Image
                    key={i}
                   src={img}
                     alt={`ad-${i}`}
                       fill
                       className={`object-cover transition-opacity duration-1000 ${i === index ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
    </div>
  )
}
