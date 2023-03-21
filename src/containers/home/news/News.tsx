import Button from "../../../components/button/Button";
import Carousel from "../../../components/carousel/Carousel";
import styles from "./News.module.css";
import { type Product } from "../../../../config/product";
import { useRouter } from "next/router";

interface NewsProps {
  products: Product[];
}

export default function News({ products }: NewsProps) {
  const router = useRouter();
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Novedades</h3>
      <Carousel products={products} />
      <div className={styles.button}>
        <Button onClick={() => router.push("/catalog")} size="lg">
          Ver Más
        </Button>
      </div>
    </div>
  );
}
