import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  cartItemCount: number;
}

const Header = ({ isDarkMode, setIsDarkMode, activeTab, setActiveTab, cartItemCount }: HeaderProps) => {
  return (
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
              {cartItemCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs min-w-[20px] h-5 flex items-center justify-center rounded-full">
                  {cartItemCount}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;