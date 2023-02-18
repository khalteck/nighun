import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollToTop from "../ScrollToTop";
import productData from "../data/Product.json";
import EachProductCard from "../components/EachProductCard";

const Product = () => {
  const { name } = useParams();
  const eachProduct = productData?.filter((item) => item.name === name)[0];

  return (
    <>
      <Header />
      <section className="slide1 h-[300px] sm:h-[450px] relative ">
        <div className="overlay lg:px-[15%] px-5 py-10 flex items-center">
          <div className="text-white font-light mx-auto">
            <h1 className="text-[1.75rem] sm:text-[2.6rem] uppercase">
              {eachProduct?.name}
            </h1>
            <div className="w-full h-[1px] bg-gradient-to-r from-white to-white/10"></div>
          </div>
        </div>
      </section>
      <div className="w-full bg-white flex justify-center items-center py-16 lg:px-[15%] px-5">
        <div className="w-full grid sm:grid-cols-3 gap-4 mt-10">
          {eachProduct.parts?.map((item, index) => {
            return <EachProductCard key={index} item={item} />;
          })}
        </div>
      </div>
      <ScrollToTop />
      <Footer id="footer" />
    </>
  );
};

export default Product;
