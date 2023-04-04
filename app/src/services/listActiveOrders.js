import { API } from 'aws-amplify';

export const LIST_ACTIVEORDERS_QUERY = `
  query ListValkyrieOrders($email: String!) {
    listValkyrieOrders(filter: {isActive: {eq:true}, email: {eq: $email}}) {
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

export const fetchActiveOrdersByEmail = async (email) => {
    try {
      const emailObj = {
        email: email,
      };
      console.log('Fetching active orders for email:', email); // Log the email being used
      const result = await API.graphql({
        query: LIST_ACTIVEORDERS_QUERY,
        variables: emailObj,
      });
      console.log('Result from API:', result); // Log the API response
      return result.data.listValkyrieOrders.items;
    } catch (err) {
      console.log('Error fetching active orders', err);
      return [];
    }
  };