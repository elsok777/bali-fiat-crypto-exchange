import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Key, Heart, Search, Users, Shield, Clock, Award } from "lucide-react";

const ServicesSection = ({ onContactClick }: { onContactClick: () => void }) => {
  const services = [
    {
      icon: Search,
      title: "Property Search",
      description: "We help you find the perfect property that meets your needs and budget with a personalized approach.",
      features: ["Individual selection", "Verified properties", "Best locations"]
    },
    {
      icon: Key,
      title: "Property Rental",
      description: "Quick rental processing for villas, houses or apartments with full legal support.",
      features: ["Secure transactions", "Document assistance", "Quality guarantee"]
    },
    {
      icon: Home,
      title: "Property Purchase",
      description: "Complete purchase support from property selection to ownership documentation.",
      features: ["Legal verification", "Property valuation", "Transaction support"]
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Licensed Company",
      description: "Officially registered company with a complete package of licenses"
    },
    {
      icon: Clock,
      title: "Fast Processing",
      description: "Quick resolution of all issues with minimum bureaucracy"
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "Professional realtors with years of experience"
    },
    {
      icon: Award,
      title: "Quality Guarantee",
      description: "Full guarantee on all our services and legal compliance"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50 bg-pattern relative overflow-hidden">
      {/* Floating Glass Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 glass rounded-full animate-float opacity-50"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 glass rounded-full animate-float opacity-50" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-1/2 right-20 w-16 h-16 glass rounded-full animate-tilt opacity-40"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Complete range of real estate services in Bali with professional approach and quality guarantee
          </p>
        </div>

        {/* Enhanced Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="glass-card group hover-lift card-3d bg-white/80 border-0 shadow-floating overflow-hidden relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4 relative">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-bl-3xl"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-emerald-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-button neon-glow">
                  <service.icon className="w-8 h-8 text-white group-hover:animate-glow-pulse" />
                </div>
                <CardTitle className="text-2xl mb-3 text-navy group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
                <CardDescription className="text-gray-600 text-base leading-relaxed">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-emerald-600 rounded-full group-hover:shadow-glow transition-all duration-300"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={onContactClick}
                  className="w-full mt-6 glass gradient-border hover:shadow-glow transition-all duration-500 hover:-translate-y-1 group-hover:neon-glow relative overflow-hidden"
                >
                  <span className="relative z-10">Learn More</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Button>
              </CardContent>
              
              {/* Decorative Glass Corner */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 glass rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
            </Card>
          ))}
        </div>

        {/* Enhanced Benefits Section */}
        <div className="glass-card bg-white/90 rounded-3xl p-8 md:p-12 shadow-floating border-0 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-emerald-600"></div>
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-navy">Why Choose Us?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group hover-lift card-3d" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-button neon-glow">
                  <benefit.icon className="w-10 h-10 text-white group-hover:animate-glow-pulse" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-navy group-hover:text-primary transition-colors duration-300">{benefit.title}</h4>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{benefit.description}</p>
                
                {/* Decorative Glass Element */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-emerald-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-floating hover-lift">
            {/* Enhanced Floating Elements */}
            <div className="absolute top-0 right-0 w-40 h-40 glass rounded-full -translate-y-20 translate-x-20 animate-float"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 glass rounded-full translate-y-16 -translate-x-16 animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/4 w-20 h-20 glass rounded-full animate-tilt opacity-30"></div>
            <div className="absolute bottom-1/4 right-1/4 w-16 h-16 glass rounded-full animate-float opacity-40" style={{ animationDelay: '4s' }}></div>
            
            <div className="relative z-10">
              <Heart className="w-16 h-16 mx-auto mb-6 text-accent animate-glow-pulse hover:scale-110 transition-transform duration-300" />
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Find Your Dream Home?</h3>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Start your journey to the perfect property in Bali with our experts
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="text-lg px-8 py-4 glass bg-white/20 text-white border-white/30 hover:bg-white hover:text-primary shadow-floating hover:shadow-glow transform hover:scale-105 hover:-translate-y-1 transition-all duration-500 relative overflow-hidden group"
                >
                  <span className="relative z-10">Start Search</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-4 glass border-2 border-white/50 text-white hover:bg-white/20 hover:backdrop-blur-md transition-all duration-500 shadow-glow hover:-translate-y-1 neon-glow"
                >
                  Get Consultation
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