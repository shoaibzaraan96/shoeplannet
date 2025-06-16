import products from '@/data/kid.json'
import ProductCard from '../../components/ProductCard';


export default function KidsPage() {
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
