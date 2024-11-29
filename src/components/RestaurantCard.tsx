import React from 'react';
import { Clock, UtensilsCrossed } from 'lucide-react';
import { ThemeInfo } from '../types/restaurants';
import { translations } from '../utils/translations';

interface RestaurantCardProps {
  name: string;
  times: {
    opening: string;
    closing: string;
  };
  themeInfo: ThemeInfo | null;
  isOpen: boolean;
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({
  name,
  times,
  themeInfo,
  isOpen,
}) => {
  const translateTheme = (theme: string) => translations[theme as keyof typeof translations] || theme;

  return (
    <div className="flex flex-col bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-medium text-gray-900">{name}</h4>
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            isOpen ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
          }`}
        >
          {isOpen ? translations.open : translations.closed}
        </span>
      </div>
      
      <div className="flex items-center text-gray-600 text-sm mb-2">
        <Clock className="w-4 h-4 mr-1" />
        <span>
          {times.opening} - {times.closing}
        </span>
      </div>

      {themeInfo && (
        <div className="mt-2 pt-2 border-t border-gray-100">
          <div className="flex items-center text-gray-700 text-sm mb-1">
            <UtensilsCrossed className="w-4 h-4 mr-1" />
            <span className="font-medium">{translations.theme}:</span>
            <span className="ml-1">{translateTheme(themeInfo.theme)}</span>
          </div>
          {themeInfo.buffet && (
            <div className="text-sm text-blue-600 font-medium">
              {translations.special}: {translateTheme(themeInfo.buffet)} {translations.buffet}
            </div>
          )}
        </div>
      )}
    </div>
  );
};