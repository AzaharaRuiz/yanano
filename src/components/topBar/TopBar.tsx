import TopBarAccount from "./components/topBarAccount/TopBarAccount";
import TopBarLogo from "./components/topBarLogo/TopBarLogo";
import TopBarNavigation from "./components/topBarNavigation/TopBarNavigation";
import styles from "./TopBar.module.css";

export default function TopBar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.nav}>
        <TopBarNavigation />
      </div>
      <div className={styles.logo}>
        <TopBarLogo />
      </div>
      <div className={styles.account}>
        <TopBarAccount />
      </div>
    </div>
  );
}
