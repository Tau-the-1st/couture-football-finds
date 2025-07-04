
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';
import NikeBanner from '@/components/NikeBanner';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProductGrid />
      <Footer />
      <NikeBanner />
    </div>
  );
};

export default Index;
