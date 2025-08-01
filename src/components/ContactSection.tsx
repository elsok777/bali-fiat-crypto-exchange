import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Shield, Building2, Mail, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Готовы помочь вам найти идеальную недвижимость на Бали. Обратитесь к нашим экспертам для персональной консультации
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-navy mb-8">Как с нами связаться</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-navy">Наш офис</h4>
                    <p className="text-gray-600 leading-relaxed">
                      KOMPLEK, PERTOKOAN NAKULA PLAZA<br />
                      JL. NAKULA NO.B8, LEGIAN<br />
                      80361, LEGIAN, KUTA<br />
                      KABUPATEN BADUNG, BALI
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-accent to-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-navy">Телефон</h4>
                    <p className="text-gray-600">087855597788</p>
                    <p className="text-sm text-gray-500 mt-1">Доступен для звонков и WhatsApp</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-navy">Время работы</h4>
                    <p className="text-gray-600">
                      Понедельник - Пятница: 9:00 - 18:00<br />
                      Суббота: 9:00 - 16:00<br />
                      Воскресенье: По договоренности
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-navy">Онлайн консультации</h4>
                    <p className="text-gray-600">
                      Доступны видеозвонки и онлайн-встречи<br />
                      для удаленных клиентов
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Information */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-navy mb-8">О компании</h3>
              
              <Card className="shadow-xl bg-gradient-to-br from-white to-gray-50 border-0 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-primary to-emerald-600 text-white">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <Shield className="w-6 h-6" />
                    Лицензия и регистрация
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Номер лицензии</p>
                    <p className="font-mono text-lg font-semibold text-primary">
                      AHU-0074782.AH.01.02.Tahun 2024
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Название компании</p>
                    <p className="font-semibold text-navy">BALI KAPITAL GRUP PROPERTI</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Год основания</p>
                    <p className="font-semibold text-navy">2024</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl bg-gradient-to-br from-white to-gray-50 border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl text-navy">
                    <Building2 className="w-6 h-6 text-primary" />
                    Наши преимущества
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    "Полное соответствие индонезийскому законодательству",
                    "Прозрачные и честные сделки",
                    "Профессиональное сопровождение на всех этапах",
                    "Проверенная база качественной недвижимости",
                    "Индивидуальный подход к каждому клиенту"
                  ].map((advantage, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-emerald-600 rounded-full"></div>
                      <span className="text-gray-700">{advantage}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-navy via-gray-800 to-navy rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full translate-y-24 -translate-x-24"></div>
              <div className="relative z-10">
                <Mail className="w-16 h-16 mx-auto mb-6 text-accent" />
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Готовы начать поиск недвижимости?
                </h3>
                <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
                  Свяжитесь с нами сегодня для бесплатной консультации и начните путь к недвижимости вашей мечты на Бали
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="text-lg px-8 py-4 bg-gradient-to-r from-primary to-emerald-600 hover:from-emerald-600 hover:to-primary shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    Получить консультацию
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-navy transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Посмотреть каталог
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;