import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import styles from "./TopBarAccount.module.css";
import useCart from "../../../../libs/hooks/useAddToCart";

export default function TopBarAccount() {
  const { cartItems } = useCart();

  return (
    <div className={styles.wrapper}>
      <Link href="">
        <FontAwesomeIcon icon={faUser} />
      </Link>
      <Link href="">
        <FontAwesomeIcon icon={faCartShopping} />
        {cartItems.length !== 0 && (
          <span className={styles.cart__number}>{cartItems.length}</span>
        )}
      </Link>
    </div>
  );
}
