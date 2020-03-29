import React from 'react';
import styles from './App.module.css';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  RouteProps
} from 'react-router-dom';
import { FiPower } from 'react-icons/fi';
import StoreList from './StoreList';
import Store from './Store/Store';
import ajudeoPequeno from './ajude-o-pequeno-logo.png';

const routes: RouteProps[] = [
  {
    path: '/loja/:storeId',
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
              <Link to="/" className={styles.button}>
                Todas as lojas
              </Link>
            </li>
            <li className={styles.navItem}>
              <button type="button" className={styles.buttonLogout}>
                <FiPower size={18} color="#E02041" className={styles.buttonLogoutI}/>
              </button>
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
