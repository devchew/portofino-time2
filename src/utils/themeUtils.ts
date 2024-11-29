import { RestaurantThemes, ThemeInfo } from '../types/restaurants';

export const getDayOfWeek = (date: Date = new Date()): string => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[date.getDay()];
};

export const getRestaurantThemeInfo = (
  restaurantName: string,
  themes: RestaurantThemes,
  date: Date = new Date()
): ThemeInfo | null => {
  const restaurant = themes[restaurantName];
  if (!restaurant) return null;

  const dayOfWeek = getDayOfWeek(date);
  
  // Check for specific day theme
  if (restaurant[dayOfWeek]) {
    return restaurant[dayOfWeek];
  }
  
  // Check for daily theme
  if (restaurant['N/A']) {
    return restaurant['N/A'];
  }

  return null;
};