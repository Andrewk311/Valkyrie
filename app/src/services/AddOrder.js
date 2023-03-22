import { API } from 'aws-amplify';

export const CREATE_ORDER_MUTATION = `
  mutation MyMutation($input: CreateValkyrieOrdersInput!) {
    createValkyrieOrders(input: $input) {
        location {
          latitude
          longitude
        }
        orderSpecification {
          totalPrice
          totalWeight
        }
        orders {
          name
          quantity
        }
        email
        isActive
        order_number
        inTransit
        isAccepted
      }
    }
`;

export const createOrder = async (orderData) => {
  try {
    const result = await API.graphql({
      query: CREATE_ORDER_MUTATION,
      variables: {
        input: {
            location: {
                latitude: orderData.latitude,
                longitude: orderData.longitude
            },
            orderSpecification: {
                totalPrice: orderData.totalPrice,
                totalWeight: orderData.totalWeight
            },
            email: orderData.email,
            isActive: orderData.isActive,
            order_number: orderData.orderNumber,
            inTransit: orderData.inTransit,
            isAccepted: orderData.isAccepted,
            orders: orderData.orders
        }
      }
    });
    console.log("successfully added order #" + orderData.orderNumber + " to the database");
    return result.data.createValkyrieOrders;
  } catch (err) {
    console.log('Error creating order', err);
    return null;
  }
};