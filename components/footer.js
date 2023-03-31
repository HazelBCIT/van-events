import styles from '../src/styles/Comps.module.css'

export default function Footer(props) {
  return (
    <>
      <div className={styles.footer_container}>
        <img className={styles.logo} src="/VanE_Logo@2x.png" alt="logo"/>
        <p style={{paddingBottom:60}}>© 2023 Hazel Wang. All rights reserved.</p>
      </div>
    </>
  );
}