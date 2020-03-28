import React, { useState, useEffect } from 'react';
import { Store } from './Types';
import { fetchStores } from './MockApi';
import styles from './App.module.css';
import logo from './storeLogo.png';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

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
          <ul className={styles.storeList}>
            {stores.map((store: Store) => {
              return (
                <li key={store.id}>
                  <Card className={styles.storeItem}>
                    <Card.Img variant="top" src={logo} />
                    <Card.Body>
                      <Card.Title className={styles.storeField}>
                        {store.name}
                      </Card.Title>
                      <Card.Text className={styles.storeField}>
                        Endereço: {store.address}
                      </Card.Text>
                      <Card.Text className={styles.storeField}>
                        Bairro: {store.suburb}
                      </Card.Text>
                      <Card.Text className={styles.storeField}>
                        Raio de entrega: {store.deliveryRadiusKm} Km
                      </Card.Text>
                      <Card.Text className={styles.storeField}>
                        Categoria: {store.category}
                      </Card.Text>
                      <Button className={styles.storeDetail} variant="primary">
                        Entrar na loja
                      </Button>
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
