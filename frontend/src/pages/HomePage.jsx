import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

import { useEffect, useState } from "react";
import axios from "axios";

function HomePage() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");

    // FETCH PRODUCTS FROM BACKEND
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data } = await axios.get(
                    "http://localhost:5000/api/products"
                );
                setProducts(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchProducts();
    }, []);

    // SEARCH FILTER
    const filteredProducts = products.filter((product) =>
        product.name
            .toLowerCase()
            .includes(search.toLowerCase())
    );
    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar />
            {/* HERO SECTION */}
            <section
                id="home"
                className="container text-center py-5"
            >
                <h1 className="fw-bold display-4">
                    Featured Products
                </h1>
                <p className="text-muted mt-3">
                    Welcome to NG Store Ecommerce Website
                </p>
            </section>

            {/* PRODUCTS SECTION */}
            <section
                id="products"
                className="container mb-5 flex-grow-1"
            >
                {/* SEARCH */}
                <div className="row justify-content-center mb-5">
                    <div className="col-md-6">
                        <input
                            type="text"
                            className="form-control shadow-sm"
                            placeholder="Search Products..."
                            value={search}
                            onChange={(e) =>
                                setSearch(e.target.value)
                            }
                        />
                    </div>
                </div>

                {/* PRODUCTS */}
                <div className="row g-4">
                    {filteredProducts.map((product) => (
                        <ProductCard
                            key={product._id}
                            product={product}
                        />
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default HomePage;