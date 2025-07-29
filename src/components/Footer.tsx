import { Shield, MapPin, Phone, Mail } from "lucide-react";

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
              Licensed cryptocurrency exchange services in Bali, providing secure and professional 
              fiat to crypto conversion solutions with competitive rates and reliable support.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Shield className="w-4 h-4 text-accent" />
              <span>License: AHU-0074782.AH.01.02.Tahun 2024</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>Fiat to Crypto Exchange</li>
              <li>SWIFT Payments</li>
              <li>Pay by Link</li>
              <li>24/7 Support</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
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
          <p>&copy; 2024 Bali Kapital Grup Properti. All rights reserved. Licensed cryptocurrency exchange services.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;