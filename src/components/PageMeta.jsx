import favicon from "@/assets/img/logo/icon.png";
const PageMeta = ({ title, description, icon }) => {
  return (
    <>
      <title>PureFresh | Freshness in Every Drop!</title>
      {description && <meta property="og:description" content={description} />}
      <link rel="icon" href={favicon} type="image/png" />
    </>
  );
};
export default PageMeta;
