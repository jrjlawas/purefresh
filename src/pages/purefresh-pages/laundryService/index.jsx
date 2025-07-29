import PageMeta from "@/components/PageMeta.jsx";
import Header from "../../purefresh-components/header";
import LaundryAbout from "../../purefresh-components/laundryAbout";
import LaundryPackaging from "../../purefresh-components/laundryPackaging";
import Contact from "../../purefresh-components/ordernow";
import CtaArea from "../../purefresh-components/cta";
import Footer from "../../purefresh-components/footer";
import BackToTop from "@/components/BackToTop.jsx";
import favLogo3 from "@/assets/img/logo/fav-logo3.png";

const laundryServicePage = () => {
  return (
    <>
      <PageMeta title="PureFresh" icon={favLogo3} />
      <Header />
      <LaundryAbout />
      <LaundryPackaging />
      <Contact />
      <CtaArea />
      <Footer />
      <BackToTop />
    </>
  );
};
export default laundryServicePage;
