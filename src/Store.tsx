import React, { useState } from 'react';
import styles from './Store.module.css';
import logo from './storeLogo.png';
import { StoreBasic, Product, Cart, Quantity } from './Types';
import { RouteComponentProps } from 'react-router-dom';
import { fetchStore } from './MockApi';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

type StoreState = {
  store: StoreBasic | null;
  cart: Cart;
};

type StoreParams = {
  storeId?: string | undefined;
};

type ProductTableProps = {
  cart: Cart;
};

type FormProduct = { name: string | null; description: string | null };

//Validators can be extract to their own module
function valid(
  formProduct: FormProduct | null,
  quantity: Quantity | null
): boolean {
  return !!formProduct && !!formProduct.name && hasQuantity(quantity);
}

function hasQuantity(num: number | null): boolean {
  return !!num;
}
//End of validators

function CartTable({ cart }: ProductTableProps): React.ReactElement {
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
        {cart.map(([product, quantity]: [Product, Quantity], i: number) => {
          return (
            <tr key={i.toString()}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{quantity}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

type AddProductFormProps = {
  addProduct: (product: Product, quantity: Quantity) => void;
};

function AddProductForm({
  addProduct
}: AddProductFormProps): React.ReactElement {
  const [formProduct, setFormProduct] = useState<FormProduct>({
    name: null,
    description: null
  });

  const [formQuantity, setFormQuantity] = useState<Quantity | null>(null);

  function setName(event: React.ChangeEvent<HTMLInputElement>): void {
    setFormProduct({ ...formProduct, name: event.target.value });
  }
  function setDescription(event: React.ChangeEvent<HTMLInputElement>): void {
    setFormProduct({ ...formProduct, description: event.target.value });
  }
  function setQuantity(event: React.ChangeEvent<HTMLInputElement>): void {
    setFormQuantity(parseInt(event.target.value));
  }

  function clearForm(): void {
    setFormProduct({ name: null, description: null });
    setFormQuantity(null);
  }

  function onAddProductClick(event: React.MouseEvent<HTMLButtonElement>): void {
    if (valid(formProduct, formQuantity)) {
      const newProduct: Product = {
        name: formProduct.name || '',
        description: formProduct.description || ''
      };
      const newFormQuantity = formQuantity || 0;
      clearForm();
      addProduct(newProduct, newFormQuantity);
    } else {
      alert('o campo nome e quantidade devem estar preechidos');
    }
  }

  return (
    <Form>
      <Form.Group controlId="formProduct">
        <Form.Label>Produto</Form.Label>
        <Form.Control
          onChange={setName}
          type="text"
          placeholder="Nome do produto"
        />
      </Form.Group>

      <Form.Group controlId="formDescription">
        <Form.Label>Descrição</Form.Label>
        <Form.Control
          onChange={setDescription}
          type="text"
          placeholder="Descrição (opcional)"
        />
      </Form.Group>
      <Form.Group controlId="quantity">
        <Form.Label>Quantitade</Form.Label>

        <Form.Control
          onChange={setQuantity}
          type="number"
          placeholder="Quantitade"
        />
      </Form.Group>
      <Button onClick={onAddProductClick} variant="primary">
        + Adicionar
      </Button>
    </Form>
  );
}

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

  render() {
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
