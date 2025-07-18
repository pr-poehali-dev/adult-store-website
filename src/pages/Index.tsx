import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductCatalog from '@/components/ProductCatalog';
import Cart from '@/components/Cart';
import Delivery from '@/components/Delivery';
import Contacts from '@/components/Contacts';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

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

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <Header
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartItemCount={getCartItemCount()}
      />

      {activeTab === 'catalog' && <Hero />}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'catalog' && (
          <ProductCatalog products={products} onAddToCart={addToCart} />
        )}

        {activeTab === 'cart' && (
          <Cart
            cart={cart}
            onRemoveFromCart={removeFromCart}
            onGoToCatalog={() => setActiveTab('catalog')}
          />
        )}

        {activeTab === 'delivery' && <Delivery />}

        {activeTab === 'contacts' && <Contacts />}

        {activeTab === 'faq' && <FAQ />}
      </main>

      <Footer />
    </div>
  );
};

export default Index;