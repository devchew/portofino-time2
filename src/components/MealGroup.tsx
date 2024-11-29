import React, { useState, useEffect } from 'react';
import { isCurrentlyOpen } from '../utils/timeUtils';
import { getRestaurantThemeInfo } from '../utils/themeUtils';
import { RestaurantCard } from './RestaurantCard';
import { restaurantThemes } from '../data/themeData';
import { translations } from '../utils/translations';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface MealGroupProps {
  name: string;
  restaurants: Record<string, { opening: string; closing: string }>;
  isNextGroup?: boolean;
}

export const MealGroup: React.FC<MealGroupProps> = ({ name, restaurants, isNextGroup }) => {
  const hasOpenRestaurant = Object.entries(restaurants).some(
    ([_, times]) => isCurrentlyOpen(times.opening, times.closing)
  );

  const [isExpanded, setIsExpanded] = useState(hasOpenRestaurant || isNextGroup);

  useEffect(() => {
    if (hasOpenRestaurant || isNextGroup) {
      setIsExpanded(true);
    }
  }, [hasOpenRestaurant, isNextGroup]);

  const translatedName = translations[name as keyof typeof translations] || name;

  return (
    <div className={`rounded-lg ${hasOpenRestaurant ? 'bg-green-50' : 'bg-gray-50'} mb-4 transition-all duration-200`}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg"
      >
        <h3 className="text-lg font-semibold">{translatedName}</h3>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>
      
      <div
        className={`grid gap-3 md:grid-cols-2 overflow-hidden transition-all duration-200 ${
          isExpanded ? 'max-h-[2000px] p-4 pt-0' : 'max-h-0'
        }`}
      >
        {Object.entries(restaurants).map(([restaurantName, times]) => (
          <RestaurantCard
            key={restaurantName}
            name={restaurantName}
            times={times}
            themeInfo={getRestaurantThemeInfo(restaurantName, restaurantThemes)}
            isOpen={isCurrentlyOpen(times.opening, times.closing)}
          />
        ))}
      </div>
    </div>
  );
};