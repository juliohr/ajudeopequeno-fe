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
          <div className={styles.storeBasicContainer}>
            <img className={styles.image} src={logo} alt="logo da loja" />
            <h1 className={styles.storeName}>{store.name}</h1>
            <div>Endereço: {store.address}</div>
            <div>Bairro: {store.suburb}</div>
            <div>Raio de Entrega: {store.deliveryRadiusKm} Km</div>
            <div>Categoria: {store.category}</div>
          </div>
          <CartTable cart={cart} />
          <AddProductForm addProduct={this.addProduct} />
        </div>
      );
    }
    return <h1>Could not load store</h1>;
  }
}

export default Store;
