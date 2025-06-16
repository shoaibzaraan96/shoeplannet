'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Heart, User } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-blue-600 text-white">
      
     
      <div className="flex items-center gap-4">
               <Image
                      src="/images/logo.png"
                       alt="Logo"
                       width={120}
                        height={120}
          className="object-contain"
        />
      
      </div>

   
      <div className="flex gap-14 text-lg font-medium">
        <Link href="/men" className="hover:underline">Men</Link>
        <Link href="/women" className="hover:underline">Women</Link>
        <Link href="/kid" className="hover:underline">Kids</Link>
      </div>

     
      <div className="flex items-center gap-8 text-2xl">
        <Link href="/wishlist"><Heart /></Link>
        <Link href="/profile"><User /></Link>
      </div>
    </nav>
  )
}
