import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="card shadow p-4">
          <h1>Product ID: {id}</h1>
          <p>
            Product details page
          </p>
        </div>
      </div>
    </>
  );
}

export default ProductPage;