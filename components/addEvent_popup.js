import NewEventForm from "../components/new-event-form";
import { useState } from "react";
import styles from '../src/styles/Comps.module.css'


function AddEvent_Popup() {
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

  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
    <button className={styles.add_new_button} onClick={() => setShowPopup(true)}> 
      <div className={styles.add_new_button_icon}>
          <img src="/+icon.png" />
        </div>
        <div className={styles.add_new_button_label}>
          Add
      </div>
    </button>

    {showPopup ? (
      <div className={styles.addevent_popup_blur}>
        <div className={styles.addevent_popup_container}>
          <NewEventForm onAddEvent={addEventHandler} />
          {responseMessage && <strong>{responseMessage}</strong>}
          <button className={styles.regular_btn} style={{alignSelf:"center"}} onClick={() => setShowPopup(false)}>Cancel</button>
        </div>
    </div>
  
) : null}
    </>
  );
}

export default AddEvent_Popup;