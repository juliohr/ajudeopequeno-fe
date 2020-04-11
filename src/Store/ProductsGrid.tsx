import React from 'react';
import { Product } from '../Types';
import styles from './ProductsGrid.module.css';
import productImg from './basic-tee.jpg';
import { Link, Switch, Route, RouteProps } from 'react-router-dom';

function ProductsGrid({
  storeId,
  products,
  routes,
}: {
  storeId: number;
  products: Product[];
  routes: RouteProps[];
}): React.ReactElement {
  return (
    <React.Fragment>
      <div className={styles.productsGridContaienr}>
        <ul className={styles.productList}>
          {products.map((product: Product) => {
            const priceStyle = product.promoPrice
              ? styles.strikethroughPrice
              : styles.price;
            return (
              <li key={product.id} className={styles.productItem}>
                <Link
                  to={`/stores/${storeId}/products/${product.id}`}
                  style={{ color: 'inherit', textDecoration: 'inherit' }}
                >
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
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <Switch>
        {routes.map((route, i) => (
          <Route key={i} {...route} />
        ))}
      </Switch>
    </React.Fragment>
  );
}

export default ProductsGrid;
