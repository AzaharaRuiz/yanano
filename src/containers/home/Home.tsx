import Page from "../../components/page/Page";
import Banner from "./banner/Banner";

import News from "./news/News";

const Home = ({ products = [] }) => {
  return (
    <Page title="Home">
      <Banner />
      <News products={products} />
    </Page>
  );
};

Home.getInitialProps = async () => {
  const res = await fetch(
    "https://fakestoreapi.com/products/category/jewelery"
  );
  const products = await res.json();
  return { products };
};

export default Home;
