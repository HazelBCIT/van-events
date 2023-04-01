import Button from "./button";
import Link from "next/link";
import styles from '../src/styles/Comps.module.css'
import { useState } from "react";

function LogNav(props) {
  const { user, onSignIn, onSignOut } = props;

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.profile_container}>
        {!user ? (
          <Button onClick={onSignIn}>Sign In</Button>
        ) : (
          <>
            <div style={{display:"flex", alignItems:"center"}}>
              <img className={styles.profile_img} src={user?.image} alt=""/>
              <img className={styles.profile_triangle} onClick={toggleMenu} src="/Triangle.png" alt=""/>
            </div>
            <ul className={isOpen ? styles.show:null}>
              <li style={{paddingBottom:0}}><div>Signed in as</div></li>
              <li style={{fontWeight:400, paddingTop:0}}><div>{user?.name}</div></li>
              <hr />
              <li><Link href="/profile">Your Profile</Link></li>
              <li><Link href="/addEvent">Add Event</Link></li>
              <hr />
              <li><Button onClick={onSignOut}>Sign Out</Button></li>
            </ul>
          </>
        )}
      </div>
    </>
  );
}

export default LogNav;
