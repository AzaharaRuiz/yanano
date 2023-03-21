import Image from "next/image";
import Link from "next/link";

import styles from "./TopBarLogo.module.css";

export default function TopBarLogo() {
  return (
    <Link href="/">
      <Image
        className={styles.logo}
        src="/images/logo.jpg"
        alt="Logo"
        width={100}
        height={50}
      />
    </Link>
  );
}
