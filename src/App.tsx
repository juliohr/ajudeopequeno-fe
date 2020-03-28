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
import StoreDetail from './StoreDetail';

const routes: RouteProps[] = [
  {
    path: '/stores/:storeId',
    component: StoreDetail
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
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Switch>
          {routes.map(route => (
            <Route {...route} />
          ))}
        </Switch>
      </main>
    </Router>
  );
}

export default App;
