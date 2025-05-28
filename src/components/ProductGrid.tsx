import React from 'react';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';

const ProductGrid = () => {
  const products = [
    {
      id: '1',
      name: 'Manchester United Home Jersey 2024',
      brand: 'Adidas',
      price: 1599.99,
      originalPrice: 1899.99,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center',
      isNew: true,
      isBestseller: true,
    },
    {
      id: '2',
      name: 'Liverpool FC Away Jersey 2024',
      brand: 'Nike',
      price: 1699.99,
      image: 'https://images.unsplash.com/photo-1594736797933-d0301ba2fe65?w=400&h=400&fit=crop&crop=center',
      isBestseller: true,
    },
    {
      id: '3',
      name: 'Real Madrid Home Jersey 2024',
      brand: 'Adidas',
      price: 1799.99,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center',
      isNew: true,
    },
    {
      id: '4',
      name: 'PSG Home Jersey 2024',
      brand: 'Nike',
      price: 1599.99,
      originalPrice: 1799.99,
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop&crop=center',
    },
    {
      id: '5',
      name: 'Chelsea FC Third Jersey 2024',
      brand: 'Nike',
      price: 1499.99,
      image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop&crop=center',
    },
    {
      id: '6',
      name: 'Barcelona Home Jersey 2024',
      brand: 'Nike',
      price: 1699.99,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center',
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
