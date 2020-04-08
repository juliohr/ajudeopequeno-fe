import React from 'react';
import styles from './Store.module.css';
import logo from '../storeLogo.png';
import { StoreBasic, Product, Cart, Quantity } from '../Types';
import { RouteComponentProps } from 'react-router-dom';
import { fetchStore } from '../MockApi';
import AddProductForm from './AddProductForm';
import CartTable from './CartTable';

type StoreState = {
  store: StoreBasic | null;
  cart: Cart;
};

type StoreParams = {
  storeId?: string | undefined;
};

class Store extends React.Component<
  RouteComponentProps<StoreParams>,
  StoreState
> {
  state: StoreState = {
    store: null,
    cart: []
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
    const { store, cart } = this.state;

    if (store) {
      return (
        <div className={styles.storeContainer}>
          <div className={styles.storeInfo}>
            <img src={logo} alt="logo da loja" className={styles.image} />
            <div className={styles.storeDescription}>
              <h1>{store.name}</h1>
              <div className={styles.StoreDetails}>
                Endereço: {store.address}
              </div>
              <div className={styles.StoreDetails}>Bairro: {store.suburb}</div>
              <div className={styles.StoreDetails}>
                Raio de Entrega: {store.deliveryRadiusKm} Km
              </div>
              <div className={styles.StoreDetails}>
                Categoria: {store.category}
              </div>
            </div>
            <div>
              <AddProductForm addProduct={this.addProduct} />
            </div>
          </div>
          <CartTable cart={cart} />
        </div>
      );
    }
    return <h1>Could not load store</h1>;
  }
}

export default Store;
