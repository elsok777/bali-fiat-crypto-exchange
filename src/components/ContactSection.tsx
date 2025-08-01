import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Shield, Building2 } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-muted-foreground">
              Профессиональные услуги в сфере недвижимости на Бали
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Контактная информация</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Адрес офиса</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      KOMPLEK, PERTOKOAN NAKULA PLAZA<br />
                      JL. NAKULA NO.B8, LEGIAN<br />
                      80361, LEGIAN, KUTA<br />
                      KABUPATEN BADUNG, BALI
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Телефон</h4>
                    <p className="text-muted-foreground">087855597788</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Время работы</h4>
                    <p className="text-muted-foreground">
                      Понедельник - Пятница: 9:00 - 18:00<br />
                      Суббота: 9:00 - 16:00<br />
                      Воскресенье: Выходной
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* License Information */}
            <div>
              <h3 className="text-2xl font-bold mb-8">О компании</h3>
              
              <Card className="shadow-card bg-gradient-card border-border/50 mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-primary" />
                    Официальная лицензия
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Номер лицензии</p>
                    <p className="font-mono text-lg font-semibold text-primary">
                      AHU-0074782.AH.01.02.Tahun 2024
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Зарегистрированное название компании</p>
                    <p className="font-semibold">BALI KAPITAL GRUP PROPERTI</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Год регистрации</p>
                    <p className="font-semibold">2024</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Building2 className="w-6 h-6 text-primary" />
                    Наши преимущества
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm">Соответствие индонезийскому законодательству</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm">Прозрачные сделки</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm">Профессиональное сопровождение</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm">Проверенная база недвижимости</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-primary-foreground">
              <h3 className="text-3xl font-bold mb-4">Готовы найти идеальную недвижимость?</h3>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Свяжитесь с нами сегодня и начните путь к своему идеальному дому на Бали
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="accent" size="lg" className="text-lg px-8">
                  Найти недвижимость
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
                >
                  Записаться на консультацию
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;