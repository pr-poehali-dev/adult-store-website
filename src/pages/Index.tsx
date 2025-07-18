import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
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

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [cart, setCart] = useState<Product[]>([]);
  const [activeTab, setActiveTab] = useState('catalog');

  const products: Product[] = [
    {
      id: 1,
      name: "Премиум набор №1",
      price: 2990,
      category: "Наборы",
      description: "Эксклюзивный набор для взрослых с премиальными материалами",
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop",
      rating: 4.8
    },
    {
      id: 2,
      name: "Романтический комплект",
      price: 1990,
      category: "Комплекты",
      description: "Изысканный комплект для особенных моментов",
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=300&fit=crop",
      rating: 4.9
    },
    {
      id: 3,
      name: "Элегантная коллекция",
      price: 3990,
      category: "Коллекции",
      description: "Роскошная коллекция премиум-класса",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      rating: 4.7
    },
    {
      id: 4,
      name: "Интимный набор",
      price: 1590,
      category: "Наборы",
      description: "Деликатный набор для интимных моментов",
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=300&fit=crop",
      rating: 4.6
    }
  ];

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId: number) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const getCartItemCount = () => {
    return cart.length;
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const faqData = [
    {
      question: "Как оформить заказ?",
      answer: "Выберите товары, добавьте их в корзину и следуйте инструкциям на странице оформления заказа."
    },
    {
      question: "Какие способы оплаты доступны?",
      answer: "Мы принимаем банковские карты, электронные кошельки и банковские переводы."
    },
    {
      question: "Как происходит доставка?",
      answer: "Доставка осуществляется в дискретной упаковке курьерской службой или почтой России."
    },
    {
      question: "Есть ли гарантия на товары?",
      answer: "Да, на все товары предоставляется гарантия качества. Возврат возможен в течение 14 дней."
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Heart" className="h-8 w-8 text-pink-600 animate-float" />
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">SensualShop</h1>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <button
                onClick={() => setActiveTab('catalog')}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeTab === 'catalog' 
                    ? 'bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300' 
                    : 'text-gray-700 hover:text-pink-600 dark:text-gray-300 dark:hover:text-pink-400'
                }`}
              >
                Каталог
              </button>
              <button
                onClick={() => setActiveTab('delivery')}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeTab === 'delivery' 
                    ? 'bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300' 
                    : 'text-gray-700 hover:text-pink-600 dark:text-gray-300 dark:hover:text-pink-400'
                }`}
              >
                Доставка
              </button>
              <button
                onClick={() => setActiveTab('contacts')}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeTab === 'contacts' 
                    ? 'bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300' 
                    : 'text-gray-700 hover:text-pink-600 dark:text-gray-300 dark:hover:text-pink-400'
                }`}
              >
                Контакты
              </button>
              <button
                onClick={() => setActiveTab('faq')}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeTab === 'faq' 
                    ? 'bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300' 
                    : 'text-gray-700 hover:text-pink-600 dark:text-gray-300 dark:hover:text-pink-400'
                }`}
              >
                FAQ
              </button>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Icon name="Sun" className="h-4 w-4" />
                <Switch
                  checked={isDarkMode}
                  onCheckedChange={setIsDarkMode}
                  className="data-[state=checked]:bg-pink-600"
                />
                <Icon name="Moon" className="h-4 w-4" />
              </div>
              
              <Button
                onClick={() => setActiveTab('cart')}
                variant="outline"
                size="sm"
                className="relative border-pink-200 text-pink-700 hover:bg-pink-50 dark:border-pink-800 dark:text-pink-300 dark:hover:bg-pink-900/20"
              >
                <Icon name="ShoppingCart" className="h-4 w-4 mr-2" />
                Корзина
                {getCartItemCount() > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs min-w-[20px] h-5 flex items-center justify-center rounded-full">
                    {getCartItemCount()}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      {activeTab === 'catalog' && (
        <section className="relative bg-gradient-to-r from-pink-50 via-white to-pink-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fade-in">
              <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Добро пожаловать в мир 
                <span className="text-pink-600"> чувственности</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                Откройте для себя эксклюзивную коллекцию премиальных товаров для взрослых. 
                Дискретная доставка, высокое качество, конфиденциальность.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3">
                  <Icon name="Sparkles" className="h-5 w-5 mr-2" />
                  Посмотреть каталог
                </Button>
                <Button size="lg" variant="outline" className="border-pink-200 text-pink-700 hover:bg-pink-50 dark:border-pink-800 dark:text-pink-300">
                  <Icon name="Shield" className="h-5 w-5 mr-2" />
                  Гарантия качества
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Catalog */}
        {activeTab === 'catalog' && (
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
                        onClick={() => addToCart(product)}
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
        )}

        {/* Cart */}
        {activeTab === 'cart' && (
          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Корзина</h3>
            
            {cart.length === 0 ? (
              <div className="text-center py-12">
                <Icon name="ShoppingCart" className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">Ваша корзина пуста</p>
                <Button 
                  onClick={() => setActiveTab('catalog')}
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
                          onClick={() => removeFromCart(item.id)}
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
        )}

        {/* Delivery */}
        {activeTab === 'delivery' && (
          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Доставка и оплата</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-pink-100 dark:border-pink-800">
                <CardHeader>
                  <CardTitle className="flex items-center text-pink-600">
                    <Icon name="Truck" className="h-6 w-6 mr-2" />
                    Способы доставки
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Курьерская доставка</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Доставка по Москве и области в течение 1-2 дней. Стоимость: 300 ₽
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Почта России</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Доставка по всей России в течение 5-10 дней. Стоимость: 250 ₽
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Самовывоз</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Забрать заказ в пункте выдачи. Бесплатно
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-pink-100 dark:border-pink-800">
                <CardHeader>
                  <CardTitle className="flex items-center text-pink-600">
                    <Icon name="CreditCard" className="h-6 w-6 mr-2" />
                    Способы оплаты
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Банковские карты</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Visa, MasterCard, МИР. Безопасная оплата через банк
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Электронные кошельки</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      ЮMoney, Qiwi, WebMoney
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Наличные</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Оплата при получении (только для курьерской доставки)
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Contacts */}
        {activeTab === 'contacts' && (
          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Контакты</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-pink-100 dark:border-pink-800">
                <CardHeader>
                  <CardTitle className="flex items-center text-pink-600">
                    <Icon name="Phone" className="h-6 w-6 mr-2" />
                    Связаться с нами
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" className="h-5 w-5 text-pink-600" />
                    <span className="text-gray-900 dark:text-white">+7 (495) 123-45-67</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" className="h-5 w-5 text-pink-600" />
                    <span className="text-gray-900 dark:text-white">info@sensualshop.ru</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="MapPin" className="h-5 w-5 text-pink-600" />
                    <span className="text-gray-900 dark:text-white">г. Москва, ул. Примерная, д. 123</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Clock" className="h-5 w-5 text-pink-600" />
                    <span className="text-gray-900 dark:text-white">Пн-Пт: 10:00-20:00, Сб-Вс: 11:00-18:00</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-pink-100 dark:border-pink-800">
                <CardHeader>
                  <CardTitle className="flex items-center text-pink-600">
                    <Icon name="Shield" className="h-6 w-6 mr-2" />
                    Конфиденциальность
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Дискретная упаковка</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Все товары отправляются в нейтральной упаковке без логотипов
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Защита данных</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Все персональные данные защищены и не передаются третьим лицам
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Анонимность</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Возможность оформления заказа без указания личных данных
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* FAQ */}
        {activeTab === 'faq' && (
          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Часто задаваемые вопросы</h3>
            
            <Card className="border-pink-100 dark:border-pink-800">
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  {faqData.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left font-semibold text-gray-900 dark:text-white hover:text-pink-600 dark:hover:text-pink-400">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 dark:text-gray-400">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Heart" className="h-6 w-6 text-pink-600" />
                <span className="text-xl font-bold text-gray-900 dark:text-white">SensualShop</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Премиальные товары для взрослых с гарантией качества и дискретной доставкой.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><a href="#" className="hover:text-pink-600 dark:hover:text-pink-400">О компании</a></li>
                <li><a href="#" className="hover:text-pink-600 dark:hover:text-pink-400">Политика конфиденциальности</a></li>
                <li><a href="#" className="hover:text-pink-600 dark:hover:text-pink-400">Условия использования</a></li>
                <li><a href="#" className="hover:text-pink-600 dark:hover:text-pink-400">Возврат и обмен</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@sensualshop.ru</li>
                <li>г. Москва, ул. Примерная, д. 123</li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © 2024 SensualShop. Все права защищены.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-pink-600 dark:hover:text-pink-400">
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-600 dark:hover:text-pink-400">
                <Icon name="Facebook" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-600 dark:hover:text-pink-400">
                <Icon name="Twitter" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;