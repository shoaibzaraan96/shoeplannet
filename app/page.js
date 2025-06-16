
import Navbar from '../components/Navbar';

import Slider from '@/components/Slider'

export default function Home() {
  return (
    <div>
    
         <Navbar />
      {/* Centered Welcome Text */}
      

      {/* Auto Image Slider */}
      <div className="mt-2">
        <Slider />
      </div>
      <div className="text-center mt-6 text-3xl font-semibold text-blue-800">
        Welcome to Shoe-Planet- Best Fashion Deals!
      </div>
    </div>
  )
}
