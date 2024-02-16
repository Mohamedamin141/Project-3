const mongoose = require('mongoose');

const AmazonData = new mongoose.Schema({
  
  product_title: {
     type: String, 
     required: true,
    },

  product_price: {
     type: Number
    },

  product_photo: {
     type: String
    },

  product_url: 
   { type: String
},

});


module.exports = AmazonData;



