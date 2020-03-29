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

export type Product = {
  name: string;
  description?: string;
};

export type Quantity = number;

export type Cart = [Product, Quantity][];
