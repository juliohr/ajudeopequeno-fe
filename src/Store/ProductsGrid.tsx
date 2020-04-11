import React from 'react';
import { Product } from '../Types';
import styles from './ProductsGrid.module.css';
import productImg from './basic-tee.jpg';

function ProductsGrid({
  products,
}: {
  products: Product[];
}): React.ReactElement {
  return (
    <div className={styles.productsGridContaienr}>
      <ul className={styles.productList}>
        {products.map((product: Product) => {
          const priceStyle = product.promoPrice
            ? styles.strikethroughPrice
            : styles.price;
          return (
            <li key={product.id} className={styles.productItem}>
              <div>
                <img
                  className={styles.productImg}
                  alt="imagem do produto"
                  src={productImg}
                />
                <div className={styles.title}>{product.name}</div>
                <div className={styles.priceWrapper}>
                  <div className={priceStyle}>R$: {product.price}</div>
                  {product.promoPrice ? (
                    <div className={styles.promoPrice}>
                      R$: {product.promoPrice}
                    </div>
                  ) : null}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProductsGrid;
