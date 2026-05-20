import express from "express";

const router = express.Router();
router.post(
    "/login",
    (req, res) => {
        res.json({
            message: "Login Route",
        });
    }
);
export default router;