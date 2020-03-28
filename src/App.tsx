import React, { useState, useEffect } from 'react';
import './App.css';
import { Store } from './Types';
import { fetchStores } from './MockApi';

function App(): React.ReactElement {
  const [stores, setStores] = useState<Store[]>([]);

  useEffect(() => {
    fetchStores().then(stores => setStores(stores));
  });

  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <div className="sideNav"></div>
        <div className="storeContainer">
          <ul>
            {stores.map((store: Store) => {
              return (
                <li key={store.id}>
                  <div className="card">
                    <div className="logo"></div>
                    <h3>{store.name}</h3>
                    <div>{store.address}</div>
                    <div>{store.suburb}</div>
                    <div>{store.zipCode}</div>
                    <div>{store.deliveryRadiusKm}</div>
                    <div>{store.category}</div>
                  </div>
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
