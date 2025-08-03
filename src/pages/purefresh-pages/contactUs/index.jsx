import PageMeta from "@/components/PageMeta.jsx";
import Header from "../../purefresh-components/header";
// import Contact from "../../purefresh-components/ordernow";
import Contact from "../../purefresh-components/contact";
import CtaArea from "../../purefresh-components/cta";
import Footer from "../../purefresh-components/footer";
import BackToTop from "@/components/BackToTop.jsx";
import favLogo3 from "@/assets/img/logo/fav-logo3.png";

const contactUsPage = () => {
  return (
    <>
      <PageMeta title="Helpy 3" icon={favLogo3} />
      <Header />
      <Contact />
      <CtaArea />
      <Footer />
      <BackToTop />
    </>
  );
};
export default contactUsPage;
