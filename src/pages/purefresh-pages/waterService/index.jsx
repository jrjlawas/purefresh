import PageMeta from "@/components/PageMeta.jsx";
import Header from "../../purefresh-components/header";
import WaterAbout from "../../purefresh-components/waterAbout";
import WaterPackaging from "../../purefresh-components/waterPackaging";
import Contact from "../../purefresh-components/ordernow";
import CtaArea from "../../purefresh-components/cta";
import Footer from "../../purefresh-components/footer";
import BackToTop from "@/components/BackToTop.jsx";
import favLogo3 from "@/assets/img/logo/fav-logo3.png";

const waterServicePage = () => {
  return (
    <>
      <PageMeta title="PureFresh" icon={favLogo3} />
      <Header />
      <WaterAbout />
      <WaterPackaging />
      <Contact />
      <CtaArea />
      <Footer />
      <BackToTop />
    </>
  );
};
export default waterServicePage;
