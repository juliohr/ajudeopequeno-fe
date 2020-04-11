# Api request

`/stores` Lista todas as lojas.

```
[{
  id: number,
  logoUrl: string, //opcional
  name: string,
  address: string,
  suburb: string,
  zipCode: string,
  deliveryRadiusKm: number,
  category: [], //lista de strings
}]
```

`stores/:storeId` detalhe de uma loja

```
{
  id: number,
  logoUrl: string, //opcional
  name: string,
  address: string,
  suburb: string,
  zipCode: string,
  deliveryRadiusKm: number,
  category: [], //lista de strings
  products: [
    {
      id: number;
      name: string;
      description: string; //opcional
      storeId: number;
      price: number;
      promoPrice: number; //opcional
    }
  ]
}
```

`stores/storeId/products/productId` detalhe de um produto de uma loja

A ser definido
