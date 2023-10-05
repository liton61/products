import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";

const Products = () => {
    const { products } = useLoaderData();
    return (
        <div className="grid grid-cols-4 gap-5 p-5">
            {
                products.map(product => <Card key={product.id} product={product}></Card>)
            }
        </div>
    );
};

export default Products;