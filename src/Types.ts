export type Store = {
  readonly id: number;
  readonly logoUrl?: string;
  readonly name: string;
  readonly address: string;
  readonly suburb: string;
  readonly zipCode: string;
  readonly deliveryRadiusKm: number;
  readonly category: string[];
};
