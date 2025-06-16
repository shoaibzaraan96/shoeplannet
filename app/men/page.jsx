import products from '@/data/men.json'
import ProductCard from '../../components/ProductCard';


export default function MenPage() {
  return (
    <div className="p-6 sm:p-10 max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
