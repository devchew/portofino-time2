import { RestaurantThemes } from '../types/restaurants';

export const restaurantThemes: RestaurantThemes = {
  "Soprano Restaurant": {
    "Saturday": { "buffet": null, "theme": "German" },
    "Sunday": { "buffet": null, "theme": "Mediterranean" },
    "Monday": { "buffet": null, "theme": "Italian Sea Food" },
    "Tuesday": { "buffet": null, "theme": "BBQ" },
    "Wednesday": { "buffet": null, "theme": "Italian" },
    "Thursday": { "buffet": null, "theme": "Sea Food" },
    "Friday": { "buffet": null, "theme": "International" }
  },
  "El Khan Restaurant": {
    "Sunday": { "buffet": "Oriental BBQ", "theme": "Oriental Cuisine" }
  },
  "Shell Fish Restaurant": {
    "N/A": { "buffet": null, "theme": "A la carte restaurant (prior reservation 4 days in advance)" }
  },
  "Mediterranean Restaurant": {
    "Saturday": { "buffet": null, "theme": "Greek" },
    "Sunday": { "buffet": null, "theme": "Lebanese" },
    "Monday": { "buffet": null, "theme": "International" },
    "Tuesday": { "buffet": null, "theme": "Egyptian" },
    "Wednesday": { "buffet": null, "theme": "French" },
    "Thursday": { "buffet": null, "theme": "Turkish" },
    "Friday": { "buffet": "Oriental BBQ", "theme": "Oriental BBQ" }
  },
  "Alfredo Restaurant": {
    "N/A": { "buffet": null, "theme": "Italian Cuisine" }
  },
  "L'Asiatique Restaurant": {
    "Monday": { "buffet": "Seafood", "theme": "Asian Cuisine" },
    "Wednesday": { "buffet": "Asian Buffet", "theme": "Asian Cuisine" }
  }
};