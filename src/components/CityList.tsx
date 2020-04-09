import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import styles from './../App.module.css';

type CityProps = {
  readonly id: number;
  readonly sigla: string;
  readonly nome: string;
};

function CityList(): React.ReactElement {
  const [citys, setCitys] = useState<CityProps[]>([]);

  useEffect(() => {
    loadCitys();
  }, []);

  async function loadCitys() {
    const response = await axios({
      url: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados',
      method: 'GET',
    });

    setCitys(response.data);
  }

  return (
    <div className={styles.container}>
      <h1>Selecione lojas mais perto de você</h1>
      <Form>
        <Form.Group>
          <select name="city" className={styles.CitySelect}>
            {citys.map((city: CityProps) => {
              return (
                <option key={city.id}>
                  {city.nome} - {city.sigla}{' '}
                </option>
              );
            })}
          </select>
        </Form.Group>
      </Form>
    </div>
  );
}

export default CityList;
