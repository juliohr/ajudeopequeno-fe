import { StoreInfo, Product, Store } from './Types';

const fakeStores: StoreInfo[] = [
  {
    id: 1,
    name: 'Fruteira do Zé',
    address: 'Rua que tem um nome, 10',
    suburb: 'Pinheiros',
    zipCode: '123456-789',
    deliveryRadiusKm: 10,
    category: ['fruteira'],
  },
  {
    id: 2,
    name: 'Café Baum',
    address: 'Rua que tem um nome relativamente grande, 1923',
    suburb: 'Boa Vista',
    zipCode: '789123-456',
    deliveryRadiusKm: 2,
    category: ['café'],
  },
  {
    id: 3,
    name: 'Restaurante Loucuras da vovó',
    address: 'Rua que tem um nome, 312',
    suburb: 'Copacabana',
    zipCode: '775741-111',
    deliveryRadiusKm: 4,
    category: ['restaurante'],
  },
  {
    id: 4,
    name: 'Padaria Pão McCaraDePão',
    address: 'Rua que tem um beeeeeeeem grande e pode quebrar o layout, 12130',
    suburb: 'Tabuão',
    zipCode: '432765-333',
    deliveryRadiusKm: 1,
    category: ['padaria'],
  },
  {
    id: 5,
    name: 'Fruteira do Zé',
    address: 'Rua que tem um nome, 10',
    suburb: 'Pinheiros',
    zipCode: '123456-789',
    deliveryRadiusKm: 10,
    category: ['grocery'],
  },
  {
    id: 6,
    name: 'Fruteira do Zé',
    address: 'Rua que tem um nome, 10',
    suburb: 'Pinheiros',
    zipCode: '123456-789',
    deliveryRadiusKm: 10,
    category: ['grocery'],
  },
];

const products: Product[] = [
  {
    id: 7,
    name: 'camiseta',
    description: 'camiseta branca básica',
    storeId: 1,
    price: 10,
    promoPrice: 5,
  },
  {
    id: 8,
    name: 'bermuda',
    description: 'bermida branca básica',
    storeId: 1,
    price: 15,
  },
  {
    id: 9,
    name: 'meia',
    description: 'meia preta',
    storeId: 1,
    price: 5,
  },
  {
    id: 10,
    name: 'camiseta',
    description: 'camiseta branca básica',
    storeId: 1,
    price: 10,
    promoPrice: 5,
  },
];

function delay(ms: number) {
  new Promise(resolve => setTimeout(resolve, ms));
}

export async function fetchStores(): Promise<StoreInfo[]> {
  await delay(300);
  return fakeStores;
}

export async function fetchStore(id: string): Promise<Store> {
  await delay(300);
  return { ...fakeStores[parseInt(id) - 1], products: products };
}
