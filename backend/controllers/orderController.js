import Order from "../models/Order.js";

// CREATE ORDER
export const createOrder = async (req,res) => {
    try {
        const {
            items,
            totalPrice,
            shippingAddress,
        } = req.body;

        const order = await Order.create({
            items,
            totalPrice,
            shippingAddress,
        });

        res.status(201).json(order);

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

// GET ALL ORDERS
export const getOrders = async (req,res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};