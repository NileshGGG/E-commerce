import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function CheckoutPage() {
    const {
        cartItems,
        setCartItems,
    } = useContext(CartContext);

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    // TOTAL PRICE
    const totalPrice = cartItems.reduce(
        (acc, item) =>
            acc + item.price * item.quantity,
        0
    );

    // PLACE ORDER
    const handlePlaceOrder = () => {

        // LOGIN CHECK
        if (!user) {
            alert("Please Login First");
            navigate("/login");
            return;
        }

        // SUCCESS
        alert("Order Placed Successfully");

        // EMPTY CART
        setCartItems([]);

        // REDIRECT HOME
        navigate("/");
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar />
            <div className="container my-5 flex-grow-1">
                <h1 className="text-center mb-5">
                    Checkout
                </h1>
                {cartItems.length === 0 ? (

                    <div className="alert alert-warning">
                        Cart is Empty
                    </div>
                ) : (
                    <div className="row">

                        {/* PRODUCTS */}
                        <div className="col-md-8">
                            {cartItems.map((item) => (
                                <div
                                    key={item._id}
                                    className="card mb-4 shadow border-0 rounded-4"
                                >
                                    <div className="row g-0 align-items-center">
                                       {/* IMAGE */}
                                        <div className="col-md-4">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="img-fluid rounded-start"
                                                style={{
                                                    height: "220px",
                                                    objectFit: "cover",
                                                    width: "100%",
                                                }}
                                            />
                                        </div>

                                        {/* DETAILS */}
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h4 className="fw-bold">
                                                    {item.name}
                                                </h4>
                                                <p className="text-muted">
                                                    {item.description}
                                                </p>
                                                <h5 className="text-warning fw-bold">
                                                    ₹{item.price}
                                                </h5>

                                                <p>
                                                    Quantity:
                                                    <strong>
                                                        {" "}
                                                        {item.quantity}
                                                    </strong>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* SUMMARY */}
                        <div className="col-md-4">
                            <div className="card shadow border-0 rounded-4 p-4">
                                <h3 className="fw-bold mb-4">
                                    Order Summary
                                </h3>
                                <h4 className="text-warning fw-bold">
                                    Total: ₹{totalPrice}
                                </h4>
                                <button
                                    className="btn btn-dark w-100 mt-4"
                                    onClick={handlePlaceOrder}
                                >
                                    Place Order
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}
export default CheckoutPage;