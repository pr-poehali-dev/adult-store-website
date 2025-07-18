import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  return (
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
  );
};

export default Hero;