import Head from "next/head";
import NewEventForm from "../../components/new-event-form";
import styles from '../styles/Comps.module.css'
import { useState } from "react";
import Link from "next/link";

function AddEvent() {
  const [responseMessage, setResponseMessage] = useState()
  async function addEventHandler(eventData) {
    await fetch("/api/post-event", {
      method: "POST",
      body: JSON.stringify(eventData),
      header: {
        "Content-Type": "application/json",
      },
    })
    .then(response => response.json())
    .then(data => setResponseMessage(data.message))
  }

  return (
    <>
      <Head>
        <title>VanEvents</title>
      </Head>


      <div className={styles.addevent_popup_blur}>
        
        <div className={styles.addevent_popup_container}>
          <NewEventForm onAddEvent={addEventHandler} />
          {responseMessage && <strong>{responseMessage}</strong>}
          <Link href="/events">
          <button className={styles.regular_btn} style={{alignSelf:"center"}}>Back</button>
          </Link>
        </div>
    </div>

    </>
  );
}

export default AddEvent;
