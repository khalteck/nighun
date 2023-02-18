import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollToTop from "../ScrollToTop";

const About = () => {
  return (
    <>
      <Header />
      <section className="slide3 h-[300px] sm:h-[450px] relative ">
        <div className="overlay lg:px-[15%] px-5 py-10 flex items-center">
          <div className="text-white font-light mx-auto">
            <h1 className="text-[1.75rem] sm:text-[2.6rem] uppercase">
              About us
            </h1>
            <div className="w-full h-[1px] bg-gradient-to-r from-white to-white/10"></div>
          </div>
        </div>
      </section>
      <section className="w-full lg:px-[15%] px-5 py-20">
        <p className="text-[1rem] sm:text-[1.3rem] font-light">
          Welcome to Nighun, a proud partner of RIELLO Power Solutions Spa in
          Hungary, a leading manufacturer of uninterruptible power supply (UPS)
          systems. We are a Nigerian-based company with a passion for delivering
          reliable and efficient power solutions to businesses and individuals
          across the country. As a partner of RIELLO, we have access to the
          latest technology and expertise in the industry.
          <br />
          <br /> Our team of professionals is highly trained and experienced in
          providing customized UPS solutions to meet the unique needs of our
          clients. We pride ourselves on our commitment to quality, and we are
          dedicated to delivering the best products and services to our
          customers. Our company is focused on providing excellent customer
          service, and we believe in building long-term relationships with our
          clients. We work closely with our customers to understand their needs
          and deliver customized solutions that meet their requirements.
          <br />
          <br /> Our goal is to help our clients achieve uninterrupted power
          supply, reduce downtime, and increase productivity. At our company, we
          are committed to providing cost-effective solutions without
          compromising on quality. We understand the importance of value for
          money, and we strive to offer competitive prices for our products and
          services. We take pride in our partnership with RIELLO and look
          forward to serving our customers with the best UPS solutions in the
          industry. Thank you for choosing our company as your trusted partner
          for your power supply needs. We look forward to helping you achieve
          uninterrupted power supply and maximize your productivity.
        </p>
      </section>
      <ScrollToTop />
      <Footer id="footer" />
    </>
  );
};

export default About;
