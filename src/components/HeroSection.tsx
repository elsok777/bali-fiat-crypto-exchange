import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, MapPin, Star, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-amber-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Licensed Badge */}
          <div className="mb-8 animate-fade-in">
            <Badge className="bg-primary/10 text-primary border-primary/20 px-6 py-2 text-sm font-medium">
              <Shield className="w-4 h-4 mr-2" />
              Лицензированная компания
            </Badge>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="bg-gradient-to-r from-primary via-emerald-600 to-primary bg-clip-text text-transparent">
              BALI KAPITAL
            </span>
            <span className="block text-3xl md:text-4xl text-navy mt-2 font-semibold">
              GRUP PROPERTI
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Ваш надежный партнер в мире недвижимости на Бали
            <span className="block text-lg md:text-xl mt-2 text-gray-500">
              Помогаем найти, арендовать и купить недвижимость вашей мечты
            </span>
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md border border-white/50">
              <Star className="w-5 h-5 text-accent fill-current" />
              <span className="text-gray-700 font-medium">Премиум объекты</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md border border-white/50">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-gray-700 font-medium">Лучшие локации</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md border border-white/50">
              <Users className="w-5 h-5 text-emerald-600" />
              <span className="text-gray-700 font-medium">Персональный подход</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button 
              size="lg" 
              className="text-lg px-8 py-4 bg-gradient-to-r from-primary to-emerald-600 hover:from-emerald-600 hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Найти недвижимость
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Получить консультацию
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600">Объектов недвижимости</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-gray-600">Довольных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-gray-600">Лет на рынке</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-600">Поддержка клиентов</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;