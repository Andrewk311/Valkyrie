/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createValkyrieInventory = /* GraphQL */ `
  mutation CreateValkyrieInventory(
    $input: CreateValkyrieInventoryInput!
    $condition: ModelValkyrieInventoryConditionInput
  ) {
    createValkyrieInventory(input: $input, condition: $condition) {
      product_type
      product_name
      product_inventory
      product_price
      product_weight
      createdAt
      updatedAt
    }
  }
`;
export const updateValkyrieInventory = /* GraphQL */ `
  mutation UpdateValkyrieInventory(
    $input: UpdateValkyrieInventoryInput!
    $condition: ModelValkyrieInventoryConditionInput
  ) {
    updateValkyrieInventory(input: $input, condition: $condition) {
      product_type
      product_name
      product_inventory
      product_price
      product_weight
      createdAt
      updatedAt
    }
  }
`;
export const deleteValkyrieInventory = /* GraphQL */ `
  mutation DeleteValkyrieInventory(
    $input: DeleteValkyrieInventoryInput!
    $condition: ModelValkyrieInventoryConditionInput
  ) {
    deleteValkyrieInventory(input: $input, condition: $condition) {
      product_type
      product_name
      product_inventory
      product_price
      product_weight
      createdAt
      updatedAt
    }
  }
`;
