import styles from "./Banner.module.css";
import Image from "next/image";

export default function Banner() {
  return (
    <Image
      className={styles.wrapper}
      src="/images/campaign.jpg"
      alt="Logo"
      width={377}
      height={550}
    />
  );
}
