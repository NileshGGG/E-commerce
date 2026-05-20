import express from "express";

const router = express.Router();
router.post(
    "/",
    (req, res) => {
        res.json({
            message: "Order Created",
        });
    }
);
export default router;