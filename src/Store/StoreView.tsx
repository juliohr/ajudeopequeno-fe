import React from 'react';
import styles from './StoreView.module.css';
import logo from '../storeLogo.png';
import ProductsGrid from './ProductsGrid';
import { Store, Product, Cart, Quantity } from '../Types';
import { RouteComponentProps } from 'react-router-dom';
import { fetchStore } from '../MockApi';

type StoreState = {
  store: Store | null;
  cart: Cart;
};

type StoreParams = {
  storeId?: string | undefined;
};

class StoreView extends React.Component<
  RouteComponentProps<StoreParams>,
  StoreState
> {
  state: StoreState = {
    store: null,
    cart: [],
  };

  componentDidMount(): void {
    const storeId: string | undefined = this.props.match.params.storeId;
    storeId && fetchStore(storeId).then(store => this.setState({ store }));
  }

  addProduct = (product: Product, quantity: Quantity) => {
    const currentCart = this.state.cart || [];
    this.setState({ cart: [...currentCart, [product, quantity]] });
  };

  render(): React.ReactElement {
    const { store } = this.state;

    if (store) {
      const { name, address, suburb, deliveryRadiusKm, category } = store.info;
      return (
        <div className={styles.storeContainer}>
          <div className={styles.storeInfo}>
            <img src={logo} alt="logo da loja" className={styles.image} />
            <div className={styles.storeDescription}>
              <h1>{name}</h1>
              <div className={styles.StoreDetails}>Endereço: {address}</div>
              <div className={styles.StoreDetails}>Bairro: {suburb}</div>
              <div className={styles.StoreDetails}>
                Raio de Entrega: {deliveryRadiusKm} Km
              </div>
              <div className={styles.StoreDetails}>Categoria: {category}</div>
            </div>
          </div>
          <ProductsGrid products={store.products} />
        </div>
      );
    }
    return <h1>Could not load store</h1>;
  }
}

export default StoreView;
