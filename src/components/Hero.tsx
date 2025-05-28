
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(26, 26, 26, 0.8) 0%, rgba(212, 175, 55, 0.1) 100%), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"><rect width="1920" height="1080" fill="%23000"/><circle cx="960" cy="540" r="300" fill="%23D4AF37" opacity="0.05"/></svg>')`,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-luxury-gold/10 border border-luxury-gold/30 rounded-full px-4 py-2 mb-8">
            <Star className="h-4 w-4 text-luxury-gold" />
            <span className="text-luxury-gold font-medium">Premium Collection</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">Elevate Your</span>
            <br />
            <span className="text-gradient">Game</span>
          </h1>

          {/* Subheading */}
          <p className="text-gray-300 text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover our exclusive collection of premium football apparel. 
            Where performance meets luxury, and style defines excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Button className="luxury-button group">
              Shop Collection
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              className="border-luxury-gold/50 text-luxury-gold hover:bg-luxury-gold hover:text-luxury-charcoal transition-all duration-300"
            >
              View Catalog
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-luxury-gold mb-2">500+</div>
              <div className="text-gray-400">Premium Products</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-luxury-gold mb-2">50+</div>
              <div className="text-gray-400">Elite Brands</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-luxury-gold mb-2">10k+</div>
              <div className="text-gray-400">Happy Athletes</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-luxury-gold/20 rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-luxury-gold/10 rounded-full animate-pulse" />
      <div className="absolute top-1/3 right-20 w-2 h-2 bg-luxury-gold rounded-full animate-ping" />
    </section>
  );
};

export default Hero;
