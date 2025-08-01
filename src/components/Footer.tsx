import { Shield, MapPin, Phone, Mail, Building, Key, Users, Heart, Instagram, Facebook, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-navy via-gray-800 to-navy text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                <Building className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  BALI KAPITAL
                </h3>
                <p className="text-gray-400 font-medium">GRUP PROPERTI</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Ваш надежный партнер в мире недвижимости на Бали. Помогаем найти, арендовать и купить 
              недвижимость вашей мечты с полным профессиональным сопровождением.
            </p>
            <div className="flex items-center gap-3 text-sm mb-6">
              <Shield className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-gray-400">Лицензия: AHU-0074782.AH.01.02.Tahun 2024</span>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Наши услуги</h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-3 hover:text-primary transition-colors duration-300 cursor-pointer">
                <Building className="w-4 h-4 text-primary flex-shrink-0" />
                Аренда недвижимости
              </li>
              <li className="flex items-center gap-3 hover:text-primary transition-colors duration-300 cursor-pointer">
                <Key className="w-4 h-4 text-primary flex-shrink-0" />
                Покупка недвижимости
              </li>
              <li className="flex items-center gap-3 hover:text-primary transition-colors duration-300 cursor-pointer">
                <Users className="w-4 h-4 text-primary flex-shrink-0" />
                Консультации
              </li>
              <li className="flex items-center gap-3 hover:text-primary transition-colors duration-300 cursor-pointer">
                <Shield className="w-4 h-4 text-primary flex-shrink-0" />
                Юридическое сопровождение
              </li>
              <li className="flex items-center gap-3 hover:text-primary transition-colors duration-300 cursor-pointer">
                <Heart className="w-4 h-4 text-primary flex-shrink-0" />
                Персональный подбор
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Контакты</h4>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-medium text-white mb-1">Наш офис:</p>
                  <span>
                    NAKULA PLAZA B8, LEGIAN<br />
                    Badung, Bali 80361<br />
                    Indonesia
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-medium text-white mb-1">Телефон:</p>
                  <span>087855597788</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-medium text-white mb-1">Режим работы:</p>
                  <span>Пн-Пт: 9:00-18:00<br />Сб: 9:00-16:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; 2024 Bali Kapital Grup Properti. Все права защищены. Лицензированные услуги по недвижимости на Бали.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-primary transition-colors duration-300">Политика конфиденциальности</a>
              <a href="#" className="hover:text-primary transition-colors duration-300">Условия использования</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;