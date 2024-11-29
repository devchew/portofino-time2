export interface Restaurant {
  opening: string;
  closing: string;
}

export interface MealGroup {
  [key: string]: Restaurant;
}

export interface RestaurantData {
  Posiłki: {
    [key: string]: MealGroup;
  };
}

export interface ThemeInfo {
  buffet: string | null;
  theme: string;
}

export interface RestaurantTheme {
  [key: string]: ThemeInfo;
}

export interface RestaurantThemes {
  [key: string]: RestaurantTheme;
}