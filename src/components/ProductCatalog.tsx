import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: number;
}

interface ProductCatalogProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const ProductCatalog = ({ products, onAddToCart }: ProductCatalogProps) => {
  return (
    <div className="animate-slide-up">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Наш каталог</h3>
        <div className="flex items-center space-x-4">
          <Badge variant="secondary" className="bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300">
            {products.length} товаров
          </Badge>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in border-pink-100 dark:border-pink-800" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="aspect-square overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="text-xs border-pink-200 text-pink-700 dark:border-pink-800 dark:text-pink-300">
                  {product.category}
                </Badge>
                <div className="flex items-center space-x-1">
                  <Icon name="Star" className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">{product.rating}</span>
                </div>
              </div>
              <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">{product.name}</CardTitle>
              <CardDescription className="text-sm text-gray-600 dark:text-gray-400">{product.description}</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-pink-600">{product.price.toLocaleString()} ₽</span>
                <Button 
                  onClick={() => onAddToCart(product)}
                  size="sm"
                  className="bg-pink-600 hover:bg-pink-700 text-white"
                >
                  <Icon name="Plus" className="h-4 w-4 mr-1" />
                  В корзину
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;