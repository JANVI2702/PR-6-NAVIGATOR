import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../context/ProductContext";

const ProductDetail = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const products = useProducts();
    const product = products.find((p) => p.id === parseInt(productId));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="container py-2">
            <div className="card border-0 shadow mx-auto p-3 text-center" style={{ maxWidth: "300px" }}>
                <h3>{product.name}</h3>
                <img
                    src={product.image}
                    alt={product.name}
                    className="card-img-top rounded-top-3"
                    style={{ height: "300px"}}
                />
                <p>{product.description}</p>
                <p><strong>Price:</strong> ${product.price}</p>
                <div className="d-flex justify-content-center">
                    <button
                        className="btn btn-outline-secondary btn-lg"
                        onClick={() => navigate(-1)}
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
