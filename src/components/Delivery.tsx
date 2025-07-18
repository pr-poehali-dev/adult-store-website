import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Delivery = () => {
  return (
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
  );
};

export default Delivery;