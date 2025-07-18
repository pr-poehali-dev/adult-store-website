import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
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

interface CartProps {
  cart: Product[];
  onRemoveFromCart: (productId: number) => void;
  onGoToCatalog: () => void;
}

const Cart = ({ cart, onRemoveFromCart, onGoToCatalog }: CartProps) => {
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="animate-slide-up">
      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Корзина</h3>
      
      {cart.length === 0 ? (
        <div className="text-center py-12">
          <Icon name="ShoppingCart" className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">Ваша корзина пуста</p>
          <Button 
            onClick={onGoToCatalog}
            className="bg-pink-600 hover:bg-pink-700 text-white"
          >
            Перейти к покупкам
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          {cart.map((item, index) => (
            <Card key={`${item.id}-${index}`} className="border-pink-100 dark:border-pink-800">
              <CardContent className="flex items-center justify-between p-4">
                <div className="flex items-center space-x-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{item.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.category}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-lg font-bold text-pink-600">{item.price.toLocaleString()} ₽</span>
                  <Button 
                    onClick={() => onRemoveFromCart(item.id)}
                    variant="outline"
                    size="sm"
                    className="text-red-600 border-red-200 hover:bg-red-50 dark:border-red-800 dark:text-red-400"
                  >
                    <Icon name="Trash2" className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
          
          <Separator />
          
          <div className="flex items-center justify-between pt-4">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              Итого: {getCartTotal().toLocaleString()} ₽
            </span>
            <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white">
              <Icon name="CreditCard" className="h-5 w-5 mr-2" />
              Оформить заказ
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;