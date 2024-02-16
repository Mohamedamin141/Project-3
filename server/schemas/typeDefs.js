
const typeDefs = `
  type EbayItem {
    id: ID!
    title: String!
    price: Float!
    image: String!
    url: String!
  }

  type AmazonItem {
    id: ID!
    product_title: String!
    product_price: Float
    product_photo: String
    product_url: String
  }

  type Query {
    ebayItems: [EbayItem!]!
    amazonItems: [AmazonItem!]!
  }
`;

module.exports = typeDefs;
