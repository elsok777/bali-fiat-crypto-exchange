import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRightLeft, CreditCard, Banknote, Shield, Clock, Users } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: ArrowRightLeft,
      title: "Fiat to Crypto Exchange",
      description: "Convert your traditional currency to cryptocurrency with competitive rates and instant processing.",
      features: ["Real-time exchange rates", "Low transaction fees", "Multiple cryptocurrencies supported"]
    },
    {
      icon: CreditCard,
      title: "Pay by Link",
      description: "Convenient payment processing through secure payment links for quick and easy transactions.",
      features: ["Secure payment gateway", "Multiple payment methods", "Instant confirmation"]
    },
    {
      icon: Banknote,
      title: "SWIFT Payments",
      description: "International wire transfer capabilities through the global SWIFT banking network.",
      features: ["Global reach", "Bank-grade security", "24/7 processing"]
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Licensed & Secure",
      description: "Fully licensed and regulated with advanced security measures"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your needs"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Professional team with years of cryptocurrency experience"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Exchange Services
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Professional cryptocurrency exchange services with secure payment processing and competitive rates
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center mb-12">Why Choose Bali Kapital?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-semibold mb-2">{benefit.title}</h4>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;