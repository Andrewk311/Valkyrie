/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getValkyrieInventory = /* GraphQL */ `
  query GetValkyrieInventory($product_type: ID!, $product_name: ID!) {
    getValkyrieInventory(
      product_type: $product_type
      product_name: $product_name
    ) {
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
export const listValkyrieInventories = /* GraphQL */ `
  query ListValkyrieInventories(
    $product_type: ID
    $product_name: ModelIDKeyConditionInput
    $filter: ModelValkyrieInventoryFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listValkyrieInventories(
      product_type: $product_type
      product_name: $product_name
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        product_type
        product_name
        product_inventory
        product_price
        product_weight
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
