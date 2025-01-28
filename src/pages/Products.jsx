import { Link, Outlet } from "react-router-dom"; 
import { useProducts } from "../context/ProductContext";

const Products = () => {
    const products = useProducts();
    return (
        <div className="container">
            <h1 className="text-center mb-4">Products</h1>

            <div className="row">
                <div className="col-md-12">
                    <h2 className="h5 mb-3">Product List</h2>
                    <div className="list-group">
                        {products.map((product) => (
                            <div className="list-group-item d-flex justify-content-between align-items-center">
                                <span>{product.name}</span>
                                <Link
                                    to={`/products/${product.id}`}
                                    className="btn btn-primary"
                                >
                                    View Details
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Outlet/>
        </div>
    );
};

export default Products;
