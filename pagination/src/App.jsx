import { useEffect, useState } from "react";
import Products from "./components/products";
import "./App.css";

function App() {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await fetch("https://dummyjson.com/products?limit=200");

      const { products } = await data.json();

      setProductsList(products);
    };

    fetchProducts();
  }, []);

  return <Products productsList={productsList} />;
}

export default App;
