import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        items: [
            {
                name: String,
                price: Number,
                quantity: Number,
                image: String,
            },
        ],

        totalPrice: {
            type: Number,
            required: true,
        },

        shippingAddress: {
            type: String,
            required: true,
        },
    },

    {
        timestamps: true,
    }
);

const Order = mongoose.model(
    "Order",
    orderSchema
);
export default Order;