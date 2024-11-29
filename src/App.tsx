import React, { useEffect, useState } from 'react';
import { MealGroup } from './components/MealGroup';
import { NextOpening } from './components/NextOpening';
import { restaurantData } from './data/restaurantData';
import { getNextOpeningTime } from './utils/timeUtils';
import { Clock } from 'lucide-react';
import { translations } from './utils/translations';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [nextOpening, setNextOpening] = useState(getNextOpeningTime(restaurantData.Posiłki));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      setNextOpening(getNextOpeningTime(restaurantData.Posiłki));
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-3xl mx-auto py-8 px-4">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-900">{translations.restaurantOpeningTimes}</h1>
            <div className="flex items-center text-gray-600">
              <Clock className="w-5 h-5 mr-2" />
              <span>{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
          </div>
          
          <NextOpening nextGroup={nextOpening} />

          <div className="space-y-4">
            {Object.entries(restaurantData.Posiłki).map(([groupName, restaurants]) => (
              <MealGroup
                key={groupName}
                name={groupName}
                restaurants={restaurants}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;