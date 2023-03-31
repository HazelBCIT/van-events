import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { useSession, signIn, signOut } from "next-auth/react";
import LogNav from "./log-nav";

function MainNavigation() {
  const { data: session } = useSession();

  return (
    <>
      <div className={styles.navbar_container}>
        <div className={styles.navbar_container_left}>
          <Link className={styles.navbar_menubtn} href="/">
            Home
          </Link>

          <div> | </div>

          <Link className={styles.navbar_menubtn} href="/events">
            Events
          </Link>
        </div>

        <LogNav user={session?.user} onSignIn={signIn} onSignOut={signOut} />
      </div>
    </>
  );
}

export default MainNavigation;
