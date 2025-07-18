import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
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
  );
};

export default Footer;