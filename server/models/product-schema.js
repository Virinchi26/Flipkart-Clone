import mongoose, {mongo}  from "mongoose";

const productSchema = new mongoose.Schema({
    id:
    {
        type: String,
        required: true,
        unique: true,
    }
    ,
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    // title: {
    //     shortTitle: String,
    //     longTitle: String,
    // },
    // price: {
    //     mrp: Number,
    //     cost: Number,
    //     discount: String,
    // },
    quantity: Number,
    description: String,
    discount: String,
    tagline: String,

});

const Product =  mongoose.model("product", productSchema);

export default Product;