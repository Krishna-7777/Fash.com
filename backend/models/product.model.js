const { default: mongoose } = require("mongoose");

const productSchema = mongoose.Schema({
    name: String,
    price: Number,
    ratings: Number,
    brand:String,
    category:String,
    sub_category:String
});

const ProductModel=mongoose.model('product',productSchema);

module.exports={
    ProductModel
}