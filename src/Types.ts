export type StoreBasic = {
  readonly id: number;
  readonly logoUrl?: string;
  readonly name: string;
  readonly address: string;
  readonly suburb: string;
  readonly zipCode: string;
  readonly deliveryRadiusKm: number;
  readonly category: string[];
};

export type StoreDetail = {
  readonly id: number;
  readonly logoUrl?: string;
  readonly name: string;
  readonly address: string;
  readonly suburb: string;
  readonly zipCode: string;
  readonly deliveryRadiusKm: number;
  readonly category: string[];
  readonly products: Product[];
};

export type Product = {
  id: number;
  name: string;
  description: string;
};

export type Quantity = number;

export type Cart = {
  products: [Product, Quantity][];
};
