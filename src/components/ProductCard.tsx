
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingCart, Eye } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  brand,
  price,
  originalPrice,
  image,
  isNew,
  isBestseller,
}) => {
  return (
    <Card className="luxury-card group cursor-pointer overflow-hidden">
      <div className="relative">
        {/* Product Image */}
        <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg mb-4 overflow-hidden">
          <div 
            className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{
              backgroundImage: `url('${image}')`,
              backgroundColor: '#2D2D2D'
            }}
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col space-y-2">
            {isNew && (
              <span className="bg-luxury-gold text-luxury-charcoal text-xs font-semibold px-2 py-1 rounded">
                NEW
              </span>
            )}
            {isBestseller && (
              <span className="bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
                BESTSELLER
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button size="icon" variant="secondary" className="bg-white/90 hover:bg-white">
              <Heart className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="secondary" className="bg-white/90 hover:bg-white">
              <Eye className="h-4 w-4" />
            </Button>
          </div>

          {/* Quick Add Button */}
          <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <Button className="w-full luxury-button">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Quick Add
            </Button>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          <div className="text-sm text-luxury-gold font-medium">{brand}</div>
          <h3 className="font-semibold text-white group-hover:text-luxury-gold transition-colors duration-300">
            {name}
          </h3>
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-luxury-gold">R{price}</span>
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through">R{originalPrice}</span>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
