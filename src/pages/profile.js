import { useSession, signIn, signOut } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";
import styles from '../styles/Comps.module.css'
import Layout from "../../components/layout";


export default function Component() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
      <div className={styles.profilePage_container}>
        <Layout />
        <img className={styles.profilePage_img} src={session.user.image} /><br />
        Email:  {session.user.email} <br /> <br />
        Username: {session.user.name} <br /> <br />
        <button className={styles.regular_btn} onClick={() => signOut()}>Sign out</button>
      </div>
     
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);


  if (!session) {
    //redirect to login page
    return {
      redirect: {
        destination: "/api/auth/signin",
        permanent: false,
      },
    }
  }


  return {
    props: {
      session,
    },
  };
}
