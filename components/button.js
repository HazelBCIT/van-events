import Link from "next/link";
import styles from '@/styles/Home.module.css'

function Button(props) {
  if (props.link) {
    return (
      <Link href={props.link}>
        {props.children}
      </Link>
    );
  }

  return (
    <button  className={styles.signin_btn} onClick={props.onClick}>
      {props.children}  
    </button>
  );
}

export default Button;
