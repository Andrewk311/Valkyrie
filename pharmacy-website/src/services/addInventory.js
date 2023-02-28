import { API } from 'aws-amplify';

export const ADD_INVENTORY_MUTATION = `
  mutation CreateInventoryItem($input: CreateValkyrieInventoryD7eu4ny72jdj5metcmio223bm4DevInput!) {
    createValkyrieInventoryD7eu4ny72jdj5metcmio223bm4Dev(input: $input) {
        product_inventory
        product_name
        product_price
        product_type
        product_weight
    }
  }
`;

export const addInventoryItem = async (item) => {
  try {
    const result = await API.graphql({
      query: ADD_INVENTORY_MUTATION,
      variables: { input: item },
    });
    return result.data.createValkyrieInventoryD7eu4ny72jdj5metcmio223bm4Dev;
  } catch (err) {
    console.log('Error adding to inventory', err);
    return [];
  }
};