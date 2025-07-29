import PageMeta from "@/components/PageMeta.jsx";
import Header from "../../purefresh-components/header";
import IceAbout from "../../purefresh-components/iceAbout";
import IcePackaging from "../../purefresh-components/icePackaging";
import IceDelivery from "../../purefresh-components/iceDelivery";
import Contact from "../../purefresh-components/ordernow";
import CtaArea from "../../purefresh-components/cta";
import Footer from "../../purefresh-components/footer";
import BackToTop from "@/components/BackToTop.jsx";
import favLogo3 from "@/assets/img/logo/fav-logo3.png";

const iceServicePage = () => {
  return (
    <>
      <PageMeta title="Helpy 3" icon={favLogo3} />
      <Header />
      <IceAbout />
      <IcePackaging />
      <IceDelivery />
      <Contact />
      <CtaArea />
      <Footer />
      <BackToTop />
    </>
  );
};
export default iceServicePage;
