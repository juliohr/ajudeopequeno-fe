import React from 'react';
import styles from './App.module.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  RouteProps
} from 'react-router-dom';
import StoreList from './StoreList';
import Store from './Store/Store';
import ajudeoPequeno from './ajude-o-pequeno-logo.png';

const routes: RouteProps[] = [
  {
    path: '/stores/:storeId',
    component: Store
  },
  {
    path: '/',
    component: StoreList
  }
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
              <Link to="/" style={{ textDecoration: 'none' }}>
                Todas as lojas
              </Link>
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
