import Link from "next/link";
import Layout from "../../components/layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className={`${styles.main} ${styles.landing_container}`}>
        <Layout />
        <img className={styles.fancy_sphere} src="/bubble.png" alt="bubble" />
        <div className={styles.landing_logo}>
          <h2>VanEvents</h2>
          <h2>VanEvents</h2>
        </div>  
        <Link className={styles.expolre_btn} href="/events">
          <button className={`${styles.regular_btn} ${styles.glow_on_hover}`}>
            Explore Now
          </button>
        </Link>
      </div>
    </>
  );
}
