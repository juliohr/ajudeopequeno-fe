import React, { useState, useEffect } from 'react';
import styles from './Store.module.css';
import logo from './storeLogo.png';
import { StoreDetail, Product } from './Types';
import { RouteComponentProps } from 'react-router-dom';
import { fetchStore } from './MockApi';
import Table from 'react-bootstrap/Table';

type StoreParams = {
  storeId?: string | undefined;
};

type ProductTableProps = {
  products: Product[];
};

function ProductTable({ products }: ProductTableProps): React.ReactElement {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Descrição</th>
          <th>Quantidade</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product: Product) => {
          return (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>1</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

function Store(props: RouteComponentProps<StoreParams>): React.ReactElement {
  const [store, setStore] = useState<StoreDetail | null>(null);

  useEffect(() => {
    props.match.params.storeId &&
      fetchStore(props.match.params.storeId).then(store => setStore(store));
  });

  if (store) {
    return (
      <div className={styles.storeContainer}>
        <div className={styles.storeBasicContainer}>
          <img className={styles.image} src={logo} alt="logo da loja" />
          <h1 className={styles.storeName}>{store.name}</h1>
          <div>Endereço: {store.address}</div>
          <div>Bairro: {store.suburb}</div>
          <div>Raio de Entrega: {store.deliveryRadiusKm} Km</div>
          <div>Categoria: {store.category}</div>
        </div>
        <ProductTable products={store.products} />
      </div>
    );
  }
  return <h1>Could not load store</h1>;
}

export default Store;
