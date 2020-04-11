import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

type ProductParams = {
  productId?: string | undefined;
};

function ProductDetail(
  routeProps: RouteComponentProps<ProductParams>
): React.ReactElement {
  return <div>Hello {routeProps.match.params.productId}</div>;
}

export default ProductDetail;
