import React, { useState, useEffect } from 'react';
import { Store } from './Types';
import { fetchStores } from './MockApi';
import styles from './App.module.css';
import logo from './storeLogo.png';
import Card from 'react-bootstrap/Card';

function App(): React.ReactElement {
  const [stores, setStores] = useState<Store[]>([]);

  useEffect(() => {
    fetchStores().then(stores => setStores(stores));
  });

  return (
    <div>
      <header className={styles.header}></header>
      <main>
        <div className={styles.storeContainer}>
          <ul>
            {stores.map((store: Store) => {
              return (
                <li key={store.id}>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={logo} />
                    <Card.Body>
                      <Card.Title>{store.name}</Card.Title>
                      <Card.Text>{store.address}</Card.Text>
                      <Card.Text>{store.suburb}</Card.Text>
                      <Card.Text>{store.zipCode}</Card.Text>
                      <Card.Text>{store.deliveryRadiusKm}</Card.Text>
                      <Card.Text>{store.category}</Card.Text>
                    </Card.Body>
                  </Card>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
