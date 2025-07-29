import PageMeta from "@/components/PageMeta.jsx";
import Header from "../../purefresh-components/header";
import Hero from "../../purefresh-components/hero";

import Service from "../../purefresh-components/service";
import Contact from "../../purefresh-components/contact";
import CtaArea from "../../purefresh-components/cta";
import OrderNow from "../../purefresh-components/ordernow";
import Footer from "../../purefresh-components/footer";

import BackToTop from "@/components/BackToTop.jsx";
import favLogo3 from "@/assets/img/logo/fav-logo3.png";

// import About from "./components/About";
// import Gallery from "./components/Gallery";
// import Testimonial from "./components/Testimonial";
// import Faq from "./components/Faq";
// import Blog from "./components/Blog";
// import Mission from "../.././/single-page/animal-rescue/components/About";

const WaterAidPage = () => {
  return (
    <>
      <PageMeta title="PureFresh" icon={favLogo3} />
      <Header />
      <Hero />
      <Service />
      {/* <About />
      <Service />
      <Gallery />
      <Testimonial />
      <Faq />
      <Contact />
      <Blog /> */}
      <OrderNow />
      <CtaArea />
      <Footer />
      <BackToTop />
    </>
  );
};
export default WaterAidPage;
