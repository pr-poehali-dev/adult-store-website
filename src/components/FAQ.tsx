import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
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
  );
};

export default FAQ;