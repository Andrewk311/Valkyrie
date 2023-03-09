import { API } from 'aws-amplify';

export const GET_ORDER_QUERY = `
  query getValkyrieOrders($order_number: String!) {
    getValkyrieOrders(order_number: $order_number) {
        email
        isActive
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
`;

export const getOrdersByNumber = async (orderNumber) => {
    console.log('plz work 1')
  try {
    const order_number = {
        order_number: {
            eq: orderNumber,
        }
    }
    console.log('plz work')
    const result = await API.graphql({
      query: GET_ORDER_QUERY,
      variables: {
        order_number
      }
    });
    console.log('happens before this prob')
    return result.data.listValkyrieOrders.items;
  } catch (err) {
    console.log('Error fetching inventories', err);
    return [];
  }
};