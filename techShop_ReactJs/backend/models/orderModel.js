const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    user: { type : mongoose.Schema.ObjectId , required: true, ref: 'User'},
    oderItems: [{
        name: {type: String, required: true},
        qty: {type: Number, required: true},
        imge: {type: String, required: true},
        price: {type: Number, required: true},
        product: {type: mongoose.Schema.ObjectId, required: true, ref:'Product'},
    }],
    shippingAddress: { 
        address: {type : String , required: true},
        city:{type : String , required: true},
        postalCode:{type : String , required: true},
        country:{type : String , required: true},
    },
    paymentMethod: { type : String , required: true},
    paymentResult: { 
        id:{type: String},
        status:{type: String},
        update_time:{type: String},
        email_address:{type: String},
    },
    taxPrice: { type : Number , required: true,default:0},
    totalPrice: { type : Number , required: true,default:0},
    isPaid: { type : Boolean , required: true,default:false},
    paidAt:{ trype: Date},
    isDelivered:{type : Boolean , required: true,default:false},
    deleveredAt:{ trype: Date},


}, {
    timestamps: true
})

const Order= mongoose.model('Order', orderSchema);
export default Order; 