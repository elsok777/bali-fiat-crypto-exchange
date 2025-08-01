import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Key, Heart, Search, Users, Shield, Clock, Award } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Search,
      title: "Поиск недвижимости",
      description: "Поможем найти идеальную недвижимость под ваши потребности и бюджет с персональным подходом.",
      features: ["Индивидуальный подбор", "Проверенные объекты", "Лучшие локации"]
    },
    {
      icon: Key,
      title: "Аренда жилья",
      description: "Быстрое оформление аренды виллы, дома или квартиры с полным юридическим сопровождением.",
      features: ["Безопасные сделки", "Помощь с документами", "Гарантия качества"]
    },
    {
      icon: Home,
      title: "Покупка недвижимости",
      description: "Полное сопровождение покупки от выбора объекта до оформления документов в собственность.",
      features: ["Юридическая проверка", "Оценка стоимости", "Сопровождение сделки"]
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Лицензированная компания",
      description: "Официально зарегистрированная компания с полным пакетом лицензий"
    },
    {
      icon: Clock,
      title: "Быстрое оформление",
      description: "Оперативное решение всех вопросов и минимум бюрократии"
    },
    {
      icon: Users,
      title: "Опытная команда",
      description: "Профессиональные риелторы с многолетним опытом работы"
    },
    {
      icon: Award,
      title: "Гарантия качества",
      description: "Полная гарантия на все наши услуги и юридическую чистоту"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Полный спектр услуг в сфере недвижимости на Бали с профессиональным подходом и гарантией качества
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white border-0 shadow-lg overflow-hidden"
            >
              <CardHeader className="pb-4 relative">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-accent/10 rounded-bl-3xl"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-emerald-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl mb-3 text-navy">{service.title}</CardTitle>
                <CardDescription className="text-gray-600 text-base leading-relaxed">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-emerald-600 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full mt-6 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                >
                  Узнать подробнее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-navy">Почему выбирают нас?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-navy">{benefit.title}</h4>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-emerald-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>
            <div className="relative z-10">
              <Heart className="w-16 h-16 mx-auto mb-6 text-accent" />
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Готовы найти дом мечты?</h3>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Начните свой путь к идеальной недвижимости на Бали вместе с нашими экспертами
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="text-lg px-8 py-4 bg-white text-primary hover:bg-gray-100 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Начать поиск
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Получить консультацию
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;