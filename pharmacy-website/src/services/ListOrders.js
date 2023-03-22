import { API } from 'aws-amplify';

export const LIST_ORDERS_QUERY = `
  query listValkyrieOrders($filter: TableValkyrieOrdersFilterInput) {
    listValkyrieOrders(filter: $filter) {
        items {
            email
            isAccepted
            inTransit
            location {
                latitude
                longitude
            }
            orderSpecification {
                totalPrice
                totalWeight
            }
            order_number
            orders {
                name
                quantity
            }
        }
    }
  }
`;

export const getOrdersByNumber = async (orderNumber) => {
    console.log('plz work 1')
  try {
    const filter = {
        order_number: {
            eq: orderNumber,
        }
    }
    console.log('plz work')
    const result = await API.graphql({
      query: LIST_ORDERS_QUERY,
      variables: {
        filter
      }
    });
    console.log('happens before this prob')
    return result.data.listValkyrieOrders.items;
  } catch (err) {
    console.log('Error fetching inventories', err);
    return [];
  }
};