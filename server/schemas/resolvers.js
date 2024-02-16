const { AmazonData, EbayData } = require('../models');
const axios = require('axios');


const resolvers = {
  Query: {
    ebayItems: async () => {
        const options = {
          method: 'GET',
          url: 'https://ebay-search-result.p.rapidapi.com/search/iphone',
          headers: {
            'X-RapidAPI-Key': '436cdd3135msh8445120770b78e8p1081bbjsn0ccc605ad2a0',
            'X-RapidAPI-Host': 'ebay-search-result.p.rapidapi.com'
          }
        };

      try {
        const response = await axios.request(options);
        return response.data;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch eBay items');
      }
    },
    amazonItems: async () => {
      const options = {
        method: 'GET',
        url: 'https://amazon-product-data6.p.rapidapi.com/product-by-text',
        params: {
          keyword: 'iphone',
          page: '1',
          country: 'US'
        },
        headers: {
          'X-RapidAPI-Key': '436cdd3135msh8445120770b78e8p1081bbjsn0ccc605ad2a0',
          'X-RapidAPI-Host': 'amazon-product-data6.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        return response.data; // Adjust this as per your API response structure
      } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch Amazon items');
      }
    }
  }
};

module.exports = resolvers;

