import React from 'react';
import { Clock } from 'lucide-react';
import { translations } from '../utils/translations';

interface NextOpeningProps {
  nextGroup: { group: string; time: string } | null;
}

export const NextOpening: React.FC<NextOpeningProps> = ({ nextGroup }) => {
  if (!nextGroup) return null;

  const translatedGroup = translations[nextGroup.group as keyof typeof translations] || nextGroup.group;

  return (
    <div className="bg-blue-50 p-4 rounded-lg mb-6">
      <div className="flex items-center">
        <Clock className="w-5 h-5 text-blue-500 mr-2" />
        <div>
          <h3 className="font-semibold text-blue-900">{translations.nextOpening}</h3>
          <p className="text-blue-700">
            {translatedGroup} {translations.opensAt} {nextGroup.time}
          </p>
        </div>
      </div>
    </div>
  );
};