import React from 'react';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';

const ProductGrid = () => {
  const products = [
    {
      id: '1',
      name: 'Manchester United Home Jersey 2024',
      brand: 'Adidas',
      price: 89.99,
      originalPrice: 109.99,
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="%23e60026"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="white" font-size="24" font-family="Arial">Man United</text></svg>',
      isNew: true,
      isBestseller: true,
    },
    {
      id: '2',
      name: 'Liverpool FC Away Jersey 2024',
      brand: 'Nike',
      price: 94.99,
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="%23f0f0f0"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="%23c8102e" font-size="24" font-family="Arial">Liverpool FC</text></svg>',
      isBestseller: true,
    },
    {
      id: '3',
      name: 'Real Madrid Home Jersey 2024',
      brand: 'Adidas',
      price: 99.99,
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="%23ffffff"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="%23000" font-size="24" font-family="Arial">Real Madrid</text></svg>',
      isNew: true,
    },
    {
      id: '4',
      name: 'PSG Home Jersey 2024',
      brand: 'Nike',
      price: 89.99,
      originalPrice: 99.99,
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="%23001e5c"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="white" font-size="32" font-family="Arial">PSG</text></svg>',
    },
    {
      id: '5',
      name: 'Chelsea FC Third Jersey 2024',
      brand: 'Nike',
      price: 84.99,
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="%23034694"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="white" font-size="28" font-family="Arial">Chelsea FC</text></svg>',
    },
    {
      id: '6',
      name: 'Barcelona Home Jersey 2024',
      brand: 'Nike',
      price: 94.99,
      image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><defs><linearGradient id="barca" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:%23004d98"/><stop offset="50%" style="stop-color:%23a50044"/><stop offset="100%" style="stop-color:%23004d98"/></linearGradient></defs><rect width="400" height="400" fill="url(%23barca)"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="white" font-size="26" font-family="Arial">Barcelona</text></svg>',
      isNew: true,
    },
  ];

  return (
    <section id="collections" className="py-20 bg-luxury-charcoal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Featured </span>
            <span className="text-gradient">Collection</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover our handpicked selection of premium football jerseys from the world's most prestigious clubs.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-slide-up"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'both'
              }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button className="luxury-button">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
