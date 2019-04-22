import gql from 'graphql-tag';

export const GET_PRODUCTS_QUERY = gql`
  {
    getProducts {
      id
      name
      stock
      price
    }
  }
`;

export const GET_PRODUCT_QUERY = gql`
  query getProduct($id: ID!) {
    getProduct(id: $id) {
      id
      name
      price
      stock
      description
      active
      warehouse {
        id
        name
      }
    }
  }
`;
