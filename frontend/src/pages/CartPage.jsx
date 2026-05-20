import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function CartPage() {
    const {
        cartItems,
        increaseQuantity,
        decreaseQuantity,
    } = useContext(CartContext);
    return (
        <div className="d-flex flex-column min-vh-100">
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <div className="container my-5 flex-grow-1">
                <h1 className="mb-5 text-center fw-bold">
                    Shopping Cart
                </h1>

                {/* Empty Cart */}
                {cartItems.length === 0 ? (
                    <div className="alert alert-warning text-center">
                        Cart is Empty
                    </div>
                ) : (
                    <div className="row g-4">
                        {cartItems.map((item, index) => (
                            <div
                                key={index}
                                className="col-md-4"
                            >
                                <div className="card shadow border-0 rounded-4 h-100 overflow-hidden">
                                    {/* PRODUCT IMAGE */}
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="card-img-top"
                                        style={{
                                            height: "250px",
                                            objectFit: "cover",
                                        }}
                                    />
                                    {/* CARD BODY */}
                                    <div className="card-body text-center">
                                        <h4 className="fw-bold">
                                            {item.name}
                                        </h4>
                                        <p className="text-muted">
                                            {item.description}
                                        </p>
                                        <h5 className="text-warning fw-bold">
                                            ₹{item.price}
                                        </h5>
                                        {/* ADDED MESSAGE */}
                                        <p className="text-success fw-bold mt-3">
                                            Item Added In Cart
                                        </p>
                                        {/* QUANTITY CONTROLS */}
                                        <div className="d-flex justify-content-center align-items-center gap-3 my-3">
                                            <button
                                                className="btn btn-danger"
                                                onClick={() =>
                                                    decreaseQuantity(item._id)
                                                }
                                            >
                                                -
                                            </button>
                                            <span className="fw-bold fs-5">
                                                {item.quantity}
                                            </span>
                                            <button
                                                className="btn btn-success"
                                                onClick={() =>
                                                    increaseQuantity(item._id)
                                                }
                                            >
                                            </button>
                                        </div>
                                        {/* CHECKOUT BUTTON */}
                                        <Link
                                            to="/checkout"
                                            className="btn btn-dark w-100 mt-3"
                                        >
                                            Checkout
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            {/* Footer */}
            <Footer />
        </div>
    );
}
export default CartPage;