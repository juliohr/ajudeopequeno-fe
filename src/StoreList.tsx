import React, { useState, useEffect } from 'react';
import styles from './StoreList.module.css';
import logo from './storeLogo.png';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { StoreInfo } from './Types';
import { fetchStores } from './MockApi';
import { Link } from 'react-router-dom';

function StoreList(): React.ReactElement {
  const [stores, setStores] = useState<StoreInfo[]>([]);

  useEffect(() => {
    fetchStores().then(stores => setStores(stores));
  });

  return (
    <div className={styles.storeContainer}>
      <ul className={styles.storeList}>
        {stores.map((store: StoreInfo) => {
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
                  <Link to={`store/${store.id}`} className={styles.storeDetail}>
                    <Button variant="primary">Entrar na loja</Button>
                  </Link>
                </Card.Body>
              </Card>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default StoreList;
