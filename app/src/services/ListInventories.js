import { API } from 'aws-amplify';

export const LIST_INVENTORIES_QUERY = `
  query ListInventories($filter: ModelValkyrieInventoryFilterInput) {
    listValkyrieInventories(filter: $filter) {
      items {
        product_inventory
        product_name
        product_price
        product_type
        product_weight
      }
    }
  }
`;

export const getInventoriesByPartitionKey = async (productType) => {
  try {
    const filter = {
        product_type: {
            eq: productType,
        }
    }
    const result = await API.graphql({
      query: LIST_INVENTORIES_QUERY,
      variables: {
        filter
      }
    });
    return result.data.listValkyrieInventories.items;
  } catch (err) {
    console.log('Error fetching inventories', err);
    return [];
  }
};

export const getAllInventory = async () => {
  try {
    const filter = {
        product_inventory: {
            gt: 0,
        }
    }
    const result = await API.graphql({
      query: LIST_INVENTORIES_QUERY,
      variables: {
        filter
      }
    });
    return result.data.listValkyrieInventories.items;
  } catch (err) {
    console.log('Error fetching inventories', err);
    return [];
  }
};