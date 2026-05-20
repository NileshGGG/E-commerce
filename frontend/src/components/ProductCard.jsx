import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
    const {
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
    } = useContext(CartContext);

    const cartProduct = cartItems.find(
        (item) => item._id === product._id
    );
    return (
        <div className="col-md-4">
            <div className="card h-100 shadow border-0 rounded-4 overflow-hidden">

                {/* PRODUCT IMAGE */}
                <img
                    src={product.image}
                    alt={product.name}
                    className="card-img-top"
                    style={{
                        height: "250px",
                        width: "100%",
                        objectFit: "cover",
                    }}
                    onError={(e) => {
                        e.target.src =
                            "https://via.placeholder.com/400x300?text=Product+Image";
                    }}
                />

                {/* CARD BODY */}
                <div className="card-body text-center p-4">
                    <h3 className="fw-bold">
                        {product.name}
                    </h3>
                    <p className="text-muted">
                        {product.description}
                    </p>
                    <h4 className="text-warning fw-bold">
                        ₹{product.price}
                    </h4>

                    {/* ADD TO CART */}
                    {!cartProduct ? (
                        <button
                            className="btn btn-dark w-100 mt-3"
                            onClick={() => addToCart(product)}
                        >
                            Add To Cart
                        </button>
                    ) : (
                        <div className="mt-3">
                            <p className="text-success fw-bold mb-2">
                                Item Added To Cart
                            </p>
                            <div className="d-flex justify-content-center align-items-center gap-3">
                                {/* MINUS */}
                                <button
                                    className="btn btn-danger"
                                    onClick={() =>
                                        decreaseQuantity(product._id)
                                    }
                                >
                                    -
                                </button>

                                {/* QUANTITY */}
                                <span className="fw-bold fs-5">
                                    {cartProduct.quantity}
                                </span>
                                {/* PLUS */}
                                <button
                                    className="btn btn-success"
                                    onClick={() =>
                                        increaseQuantity(product._id)
                                    }
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
export default ProductCard;