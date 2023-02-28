import { API } from 'aws-amplify';

export const LIST_INVENTORIES_QUERY = `
  query ListInventories($filter: TableValkyrieInventoryD7eu4ny72jdj5metcmio223bm4DevFilterInput) {
    listValkyrieInventoryD7eu4ny72jdj5metcmio223bm4Devs(filter: $filter) {
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
    return result.data.listValkyrieInventoryD7eu4ny72jdj5metcmio223bm4Devs.items;
  } catch (err) {
    console.log('Error fetching inventories', err);
    return [];
  }
};