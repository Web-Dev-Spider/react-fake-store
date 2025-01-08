import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
function App() {
  const [products, setProducts] = useState([]);
  const [prodLoaded, setProdLoaded] = useState(false);
  const prodLoadedCode = (
    <div className="product-container row g-3">
      {products.map((product) => (
        <div className="col-md-4 col-lg-3" key={product.id}>
          <ProductCard item={product} />
        </div>
      ))}
    </div>
  );

  const prodLoadingCode = (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <p className="text-muted">Loading please wait....</p>
    </div>
  );

  // fetching product details using fetch()
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setProducts(json);
  //       setProdLoaded(true);
  //     });
  // }, []);

  //fetching using axios

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        // console.log(res.data);
        setProducts(res.data);
        setProdLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="d-flex flex-column vh-100">
        <Header />
        <main className="container my-2 flex-grow-1">
          <h3 className="text-center">Products</h3>
          {prodLoaded ? prodLoadedCode : prodLoadingCode}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
