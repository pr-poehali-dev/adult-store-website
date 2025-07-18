import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  return (
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
  );
};

export default Contacts;