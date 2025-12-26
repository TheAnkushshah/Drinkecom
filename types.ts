
export type WineType = 'Red' | 'White' | 'Rosé' | 'Sparkling' | 'Dessert';

export type DrinkCategory = 
  | 'Scotch Whisky'
  | 'Irish Whiskey'
  | 'World Whiskies'
  | 'Cognac & Brandy'
  | 'Vodka'
  | 'Gin'
  | 'Liqueur & Bitters'
  | 'Rum'
  | 'Champagne'
  | 'Tequila & Mezcal'
  | 'Aperitif'
  | 'Wine';

export interface Wine {
  id: string;
  name: string;
  type: WineType;
  drinkCategory: DrinkCategory;
  vintage: number | string;
  varietal: string;
  region: string;
  price: number;
  abv: string;
  tastingNotes: string[];
  foodPairings: string[];
  body: 'Light' | 'Medium' | 'Full';
  tannins: 'Low' | 'Medium' | 'High';
  acidity: 'Low' | 'Medium' | 'High';
  rating: number;
  awards: string[];
  imageUrl: string;
  description: string;
  stock: number;
  certifications?: string[];
  // Granular Details
  appearance?: string;
  aroma?: string;
  palate?: string;
  finish?: string;
  sweetness?: string;
  oakAging?: string;
  fermentation?: string;
  productionNotes?: string;
  servingTemp?: string;
  glassware?: string;
  decanting?: string;
  peakDrinking?: string;
}

export interface CartItem extends Wine {
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  tier: 'None' | 'Silver' | 'Gold' | 'Platinum';
  orders: any[];
}

export interface OfficialReply {
  author: string;
  text: string;
  date: string;
}

export interface Review {
  id: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  comment: string;
  date: string;
  officialReply?: OfficialReply;
}
