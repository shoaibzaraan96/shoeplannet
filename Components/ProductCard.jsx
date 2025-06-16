import Image from 'next/image'
import Link from 'next/link'
import { Heart } from 'lucide-react'


export default function ProductCard({ product }) {
  return (
    <div className="relative bg-white rounded-2xl shadow-md p-4 flex flex-col h-full">
      
     
             <div className="absolute top-3 right-3 z-10">
                     <Heart className="h-5 w-5 text-gray-400 hover:text-red-500 cursor-pointer" />
            </div>

      <Image
        src={product.image || "/images/productCardDefaultImage.webp" }
        alt={product.title  }
        width={400}
        height={300}
        className="rounded-xl w-full h-48 object-contain"
        priority={true}
      />

      <h2 className="text-xl font-semibold mt-3">{product.title}</h2>
      <p className="text-gray-600 flex-grow">{product.description.slice(0, 50)}...</p>
      <p className="text-green-600 font-bold mt-2">${product.price}</p>

      <Link href={`/product/${product.id}`}>
        <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          View Details
        </button>
      </Link>
    </div>
  )
}
