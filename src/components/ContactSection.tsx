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
              Contact & License Information
            </h2>
            <p className="text-xl text-muted-foreground">
              Fully licensed and regulated cryptocurrency exchange services in Bali
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Office Address</h4>
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
                    <h4 className="font-semibold mb-1">Phone Number</h4>
                    <p className="text-muted-foreground">087855597788</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Business Hours</h4>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* License Information */}
            <div>
              <h3 className="text-2xl font-bold mb-8">License & Compliance</h3>
              
              <Card className="shadow-card bg-gradient-card border-border/50 mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-primary" />
                    Official Business License
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">License Number</p>
                    <p className="font-mono text-lg font-semibold text-primary">
                      AHU-0074782.AH.01.02.Tahun 2024
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Registered Company Name</p>
                    <p className="font-semibold">BALI KAPITAL GRUP PROPERTI</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Registration Year</p>
                    <p className="font-semibold">2024</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Building2 className="w-6 h-6 text-primary" />
                    Regulatory Compliance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm">Fully compliant with Indonesian regulations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm">Regular compliance audits</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm">Anti-money laundering protocols</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm">Know Your Customer (KYC) procedures</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-primary-foreground">
              <h3 className="text-3xl font-bold mb-4">Ready to Start Trading?</h3>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Contact us today to begin your cryptocurrency exchange journey
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="accent" size="lg" className="text-lg px-8">
                  Get Started Now
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
                >
                  Schedule Consultation
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