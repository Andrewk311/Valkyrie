import { API } from 'aws-amplify';

export const LIST_ORDERHISTORY_QUERY = `
  query ListValkyrieOrders($filter: TableValkyrieOrdersFilterInput) {
    listValkyrieOrders(filter: $filter) {
      items {
        email
        inTransit
        isAccepted
        isActive
        orderSpecification {
            totalPrice
            totalWeight
        }
        location {
            latitude
            longitude
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

export const fetchOrderHistoryByEmail = async (email) => {
    try {
      const filter = {
          email: {
              eq: email,
          }
      }
      const result = await API.graphql({
        query: LIST_ORDERHISTORY_QUERY,
        variables: {
          filter
        }
      });
      return result.data.listValkyrieOrders.items;
    } catch (err) {
      console.log('Error fetching order history', err);
      return [];
    }
  };