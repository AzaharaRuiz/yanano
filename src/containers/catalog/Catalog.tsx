import Card from "../../components/card/Card";
import Page from "../../components/page/Page";
import useCart from "../../libs/hooks/useAddToCart";
import Filters from "./components/filters/Filters";
import useCatalog from "./useCatalog";
import styles from "./Catalog.module.css";
import cx from "classnames";
import { Divider } from "@chakra-ui/react";

export default function Catalog() {
  const { addToCart } = useCart();
  const { state, actions } = useCatalog();
  const { isLoading, newProducts, products, filters } = state;
  const { handleUpdateFilters } = actions;

  return (
    <Page isLoading={isLoading} title="Catalog">
      <Filters onChangeFilters={handleUpdateFilters} sort={filters.sort} />
      <div className={styles.wrapper}>
        <div className={cx(styles.title, styles.news)}>
          <h2>Novedades yanano</h2>
        </div>

        <div className={styles.content}>
          {newProducts.map((product) => (
            <Card
              key={product.id}
              product={product}
              width={360}
              addToCart={() =>
                addToCart({ id: product.id, title: product.title, units: 1 })
              }
            />
          ))}
        </div>
        <Divider />
        <div className={cx(styles.title, styles.fav)}>
          <h2>Los favoritos de yanano</h2>
        </div>
        <div className={styles.content}>
          {products.map((product) => (
            <Card
              key={product.id}
              product={product}
              width={360}
              addToCart={() =>
                addToCart({ id: product.id, title: product.title, units: 1 })
              }
            />
          ))}
        </div>
      </div>
    </Page>
  );
}
