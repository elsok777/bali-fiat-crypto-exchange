import { Shield, MapPin, Phone, Mail, Building, Key, Users } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold">BALI KAPITAL</h3>
                <p className="text-sm text-background/80">GRUP PROPERTI</p>
              </div>
            </div>
            <p className="text-background/80 mb-4 leading-relaxed">
              Профессиональные услуги в сфере недвижимости на Бали. Помогаем в подборе, 
              аренде и покупке недвижимости с полным юридическим сопровождением.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Shield className="w-4 h-4 text-accent" />
              <span>Лицензия: AHU-0074782.AH.01.02.Tahun 2024</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li className="flex items-center gap-2">
                <Building className="w-3 h-3" />
                Аренда недвижимости
              </li>
              <li className="flex items-center gap-2">
                <Key className="w-3 h-3" />
                Покупка недвижимости
              </li>
              <li className="flex items-center gap-2">
                <Users className="w-3 h-3" />
                Консультации
              </li>
              <li className="flex items-center gap-2">
                <Shield className="w-3 h-3" />
                Юридическое сопровождение
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-3 text-sm text-background/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                <span>
                  NAKULA PLAZA B8, LEGIAN<br />
                  Badung, Bali 80361
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                <span>087855597788</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                <span>Available 24/7</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/60">
          <p>&copy; 2024 Bali Kapital Grup Properti. Все права защищены. Лицензированные услуги по недвижимости.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;