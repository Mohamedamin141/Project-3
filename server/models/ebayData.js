const mongoose = require('mongoose');

const EbayData = new mongoose.Schema({
  title: {
     type: String 
  },
  
  price: {
     type: Number 
  }, 

  image: {
     type: String
    },

  url: {
     type: String
    }

});


module.exports = EbayData;
