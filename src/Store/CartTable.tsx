import React from 'react';
import Table from 'react-bootstrap/Table';
import { Cart, Product, Quantity } from '../Types';

function CartTable({ cart }: { cart: Cart }): React.ReactElement {
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

export default CartTable;
