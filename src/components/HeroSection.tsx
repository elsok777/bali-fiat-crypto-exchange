import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, MapPin, Star, Users } from "lucide-react";

const HeroSection = ({ onContactClick }: { onContactClick: () => void }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-amber-50 bg-pattern">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-primary to-primary-glow rounded-full mix-blend-multiply filter blur-3xl animate-float opacity-20"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-accent to-yellow-400 rounded-full mix-blend-multiply filter blur-3xl animate-float opacity-20" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-r from-primary-glow to-emerald-400 rounded-full mix-blend-multiply filter blur-3xl animate-float opacity-20" style={{ animationDelay: '4s' }}></div>
        
        {/* Glass Orbs */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 glass rounded-full animate-tilt"></div>
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 glass rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Licensed Badge with Glass Effect */}
          <div className="mb-8 animate-fade-in">
            <Badge className="glass-button bg-primary/10 text-primary border-primary/20 px-6 py-2 text-sm font-medium hover-glow neon-glow">
              <Shield className="w-4 h-4 mr-2" />
              Licensed & Regulated Company
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
            Your trusted partner in Bali real estate
            <span className="block text-lg md:text-xl mt-2 text-gray-500">
              We help you find, rent and buy your dream property
            </span>
          </p>

          {/* Enhanced Features with Glass Morphism */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="glass-button hover-lift card-3d group">
              <Star className="w-5 h-5 text-accent fill-current group-hover:animate-glow-pulse" />
              <span className="text-gray-700 font-medium">Premium Properties</span>
            </div>
            <div className="glass-button hover-lift card-3d group" style={{ animationDelay: '0.1s' }}>
              <MapPin className="w-5 h-5 text-primary group-hover:animate-glow-pulse" />
              <span className="text-gray-700 font-medium">Best Locations</span>
            </div>
            <div className="glass-button hover-lift card-3d group" style={{ animationDelay: '0.2s' }}>
              <Users className="w-5 h-5 text-emerald-600 group-hover:animate-glow-pulse" />
              <span className="text-gray-700 font-medium">Personal Approach</span>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button 
              onClick={onContactClick}
              size="lg" 
              className="text-lg px-8 py-4 bg-gradient-to-r from-primary to-emerald-600 hover:from-emerald-600 hover:to-primary transition-all duration-500 shadow-floating hover:shadow-glow transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden group"
            >
              <span className="relative z-10">Find Property</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-glow to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Button>
            <Button 
              onClick={onContactClick}
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 glass gradient-border hover:shadow-glow transition-all duration-500 hover:-translate-y-1 group relative overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-primary-foreground transition-colors duration-300">Get Consultation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Button>
          </div>

          {/* Enhanced Stats with Glass Cards */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="glass-card text-center hover-lift card-3d group">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:animate-glow-pulse">500+</div>
              <div className="text-gray-600">Real Estate Properties</div>
            </div>
            <div className="glass-card text-center hover-lift card-3d group" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:animate-glow-pulse">98%</div>
              <div className="text-gray-600">Satisfied Clients</div>
            </div>
            <div className="glass-card text-center hover-lift card-3d group" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:animate-glow-pulse">5+</div>
              <div className="text-gray-600">Years in Business</div>
            </div>
            <div className="glass-card text-center hover-lift card-3d group" style={{ animationDelay: '0.3s' }}>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:animate-glow-pulse">24/7</div>
              <div className="text-gray-600">Customer Support</div>
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