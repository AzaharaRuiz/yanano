import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <div className={styles.wrapper}>
        <section>
          <h6 className={styles.title}>YANANO</h6>
          <p className={styles.description}>
            Yanano es una marca de joyas personalizadas que se enfoca en crear
            piezas únicas y significativas, lo que permite tener una pieza de
            joyería única.
          </p>
        </section>
        <section>
          <h6 className={styles.title}>PRODUCTOS</h6>
          <nav>
            <ul className={styles.ul}>
              <li key="collares">
                <Link href="/catalog">Collares</Link>
              </li>
              <li key="pendientes">
                <Link href="/catalog">Pendientes</Link>
              </li>
              <li key="pulseras">
                <Link href="/catalog">Pulseras</Link>
              </li>
              <li key="novedades">
                <Link href="/catalog">Novedades</Link>
              </li>
            </ul>
          </nav>
        </section>
        <section>
          <h6 className={styles.title}>ENLACES DE INTERÉS</h6>
          <nav>
            <ul className={styles.ul}>
              <li>
                <Link href="/">Inicio</Link>
              </li>
              <li>
                <Link href="/catalog">Catálogo</Link>
              </li>
              <li>
                <Link href="">Acerca de</Link>
              </li>
              <li>
                <Link href="">Ayuda</Link>
              </li>
            </ul>
          </nav>
        </section>
        <section>
          <h6 className={styles.title}>CONTACTO</h6>
          <ul className={styles.ul}>
            <li>Avd. Andalucía, 5</li>
            <li>666 666 666</li>
            <li>958 000 000</li>
            <li>info@yanano.com</li>
          </ul>
        </section>
      </div>
      <div className={styles.copyright}>
        <p>Todos los derechos reservados YANANO &copy; 2023</p>
      </div>
    </footer>
  );
}
