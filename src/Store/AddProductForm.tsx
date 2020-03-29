import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Product, Quantity } from '../Types';
import { FiPlusCircle } from 'react-icons/fi';
import './AddProductForm.css';

type FormProduct = { name: string | null; description: string | null };

//Validators can be extract to their own module
function valid(
  formProduct: FormProduct | null,
  quantity: Quantity | null
): boolean {
  return !!formProduct && !!formProduct.name && hasQuantity(quantity);
}

function hasQuantity(num: number | null): boolean {
  return !!num;
}
//End of validators

function AddProductForm({
  addProduct
}: {
  addProduct: (product: Product, quantity: Quantity) => void;
}): React.ReactElement {
  const [formProduct, setFormProduct] = useState<FormProduct>({
    name: null,
    description: null
  });

  const [formQuantity, setFormQuantity] = useState<Quantity | null>(null);

  function setName(event: React.ChangeEvent<HTMLInputElement>): void {
    setFormProduct({ ...formProduct, name: event.target.value });
  }
  function setDescription(event: React.ChangeEvent<HTMLInputElement>): void {
    setFormProduct({ ...formProduct, description: event.target.value });
  }
  function setQuantity(event: React.ChangeEvent<HTMLInputElement>): void {
    setFormQuantity(parseInt(event.target.value));
  }

  function clearForm(): void {
    setFormProduct({ name: null, description: null });
    setFormQuantity(null);
  }

  function onAddProductClick(event: React.MouseEvent<HTMLButtonElement>): void {
    if (valid(formProduct, formQuantity)) {
      const newProduct: Product = {
        name: formProduct.name || '',
        description: formProduct.description || ''
      };
      const newFormQuantity = formQuantity || 0;
      clearForm();
      addProduct(newProduct, newFormQuantity);
    } else {
      alert('o campo nome e quantidade devem estar preechidos');
    }
  }

  return (
    <div className="form-content">
      <h1>Adicionar Produto</h1>
      <Form>
        <Form.Group controlId="formProduct">
          <Form.Label>Produto</Form.Label>
          <Form.Control
            onChange={setName}
            type="text"
            placeholder="Nome do produto"
          />
        </Form.Group>

        <Form.Group controlId="formDescription">
          <Form.Label>Descrição</Form.Label>
          <Form.Control
            onChange={setDescription}
            type="text"
            placeholder="Descrição (opcional)"
          />
        </Form.Group>
        <Form.Group controlId="quantity">
          <Form.Label>Quantitade</Form.Label>

          <Form.Control
            onChange={setQuantity}
            type="number"
            placeholder="Quantitade"
          />
        </Form.Group>
        <Button onClick={onAddProductClick} variant="primary">
        <FiPlusCircle color="#FFF" size={15}/> Adicionar
      </Button>
      </Form>
    </div>

  );
}

export default AddProductForm;
