import express from "express";

const router = express.Router();

/* TEMP PRODUCTS */

const products = [

    {
        _id: 1,
        name: "iPhone 15",
        description: "Latest Apple smartphone",
        price: 90000,
        image:
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1000&auto=format&fit=crop",
    },

    {
        _id: 2,
        name: "Gaming Laptop",
        description: "High performance laptop",
        price: 120000,
        image:
            "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1000&auto=format&fit=crop",
    },

    {
        _id: 3,
        name: "Smart Watch",
        description: "Fitness tracking watch",
        price: 12000,
        image:
            "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1000&auto=format&fit=crop",
    },

];

/* GET PRODUCTS */

router.get("/", (req, res) => {

    res.json(products);

});

export default router;