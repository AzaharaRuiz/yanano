import { useDisclosure } from "@chakra-ui/react";
import styles from "./TopBarNavigation.module.css";
import cx from "classnames";
import Link from "next/link";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

export default function TopBarNavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <div className={styles.wrapper}>
      <div className={styles.hamburguer}>
        <button onClick={onToggle}>
          <HamburgerIcon />
        </button>
      </div>
      <nav className={cx(styles.nav, isOpen && styles.isOpen)}>
        <div className={styles.header}>
          <button onClick={onToggle}>
            <CloseIcon />
          </button>
        </div>
        <ul className={styles.list}>
          <h2>YANANO</h2>
          <li key="collares">
            <Link href="/catalog">Collares</Link>
          </li>
          <li key="pendientes">
            <Link href="/catalog">Pendientes</Link>
          </li>
          <li key="novedades">
            <Link href="/catalog">Novedades</Link>
          </li>
          <li key="otros">Otros</li>
        </ul>
      </nav>
      <div
        aria-hidden
        className={cx(styles.overlay, isOpen && styles.isOpen)}
        onClick={onToggle}
      />
    </div>
  );
}
