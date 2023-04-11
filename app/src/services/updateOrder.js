import { API } from 'aws-amplify';

export const UPDATE_ORDER_MUTATION = `
  mutation updateValkyrieOrder($order_number: ID!, $inTransit: Boolean, $isActive: Boolean) {
    updateValkyrieOrders(input: {order_number: $order_number, inTransit: $inTransit, isActive: $isActive}) {
      order_number
      inTransit
      isActive
    }
  }
`;

export const updateOrder = async (orderNumber, inTransit, isActive) => {
  try {
    const result = await API.graphql({
      query: UPDATE_ORDER_MUTATION,
      variables: {
        order_number: orderNumber,
        inTransit: inTransit,
        isActive: isActive,
      }
    });
    console.log(`Successfully updated order ${orderNumber}`);
    return result.data.updateValkyrieOrders;
  } catch (err) {
    console.log(`Error updating order ${orderNumber}`, err);
    return null;
  }
};