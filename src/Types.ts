export type StoreInfo = {
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
  readonly id: number;
  readonly name: string;
  readonly description?: string;
  readonly storeId: number;
  readonly price: number;
  readonly promoPrice?: number;
};

export type Store = {
  readonly info: StoreInfo;
  readonly products: Product[];
};

export type Quantity = number;

export type Cart = [Product, Quantity][];
