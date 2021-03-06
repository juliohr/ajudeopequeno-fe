import React from 'react';
import styles from './App.module.css';
import { Button } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  RouteProps,
} from 'react-router-dom';
import { FiPower } from 'react-icons/fi';
import StoreList from './StoreList';
import StoreView from './Store/StoreView';
import ProductDetail from './ProductDetail';
import ajudeoPequeno from './ajude-o-pequeno-logo.png';

type NestedRouteProps = RouteProps & { routes?: RouteProps[] };

const routes: NestedRouteProps[] = [
  { path: '/stores/:storeId/products/:productId', component: ProductDetail },
  {
    path: '/stores/:storeId',
    component: StoreView,
  },
  {
    path: '/',
    component: StoreList,
  },
];

function App(): React.ReactElement {
  return (
    <Router>
      <header className={styles.header}>
        <img
          className={styles.brand}
          src={ajudeoPequeno}
          alt="ajude o pequeno logo"
        />
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link to="/">
                <Button size="lg">Todas as lojas</Button>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Button variant="light">
                <FiPower size={24} color="#E02041" />
              </Button>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Switch>
          {routes.map((route, i) => (
            <Route key={i} {...route} />
          ))}
        </Switch>
      </main>
    </Router>
  );
}

export default App;
