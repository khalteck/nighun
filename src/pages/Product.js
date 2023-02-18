import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollToTop from "../ScrollToTop";

const Product = () => {
  return (
    <>
      <Header />
      <div className="w-full min-h-screen bg-white flex justify-center items-center">
        <h1>Product</h1>
      </div>
      <ScrollToTop />
      <Footer id="footer" />
    </>
  );
};

export default Product;
