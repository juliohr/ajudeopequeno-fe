import React from 'react';
import { Product } from '../Types';
import styles from './ProductsGrid.module.css';
import productImg from './basic-tee.jpg';
import Card from 'react-bootstrap/Card';

function ProductsGrid({
  products,
}: {
  products: Product[];
}): React.ReactElement {
  return (
    <div className={styles.productsGridContaienr}>
      <ul>
        {products.map((product: Product) => {
          return (
            <li key={product.id}>
              <Card className={styles.productItem}>
                <Card.Img variant="top" src={productImg} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>R$: {product.price}</Card.Text>
                  {product.promoPrice ? (
                    <Card.Text className={styles.storeField}>
                      R$: {product.promoPrice}
                    </Card.Text>
                  ) : null}
                </Card.Body>
              </Card>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProductsGrid;
