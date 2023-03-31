import Button from "./button";
import { useState } from "react";
import UpdateEventForm from "./update-event-form";
import styles from '../src/styles/Home.module.css';
import Link from "next/link";


function EventItem(props) {
  const { title, address, date, id} = props;
  const exploreLink = `/events/${id}`;

  const [updateForm, setUpdateForm] = useState(false);
  const [responseMessage, setResponseMessage] = useState()

  async function deleteEvent() {
    await fetch("/api/delete-event", {
      method: "DELETE",
      body: JSON.stringify(id),
      header: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setResponseMessage(data.message));
  }

  function showUpdateForm() {
    if(updateForm) {
        setUpdateForm(false);
    } else {
        setUpdateForm(true);
    }    
  }

  async function updateEventHandler(eventData) {
    const updateData = Object.assign({}, {id: id}, eventData);
    console.log(updateData);
    await fetch("/api/update-event", {
        method: "PATCH",
        body: JSON.stringify(updateData),
        header: {
          "Content-Type": "application/json",
        },
      })
      .then(response => response.json())
      .then(data => setResponseMessage(data.message))
  }

  return (
    <div className={styles.allEvents_container}>
      <time className={styles.allEvents_time}>{date}</time>
      <div className={styles.allEvents_box}>
        <h2 className={styles.allEvents_title}>
          {title}
        </h2>
        <address style={{fontStyle:"normal"}}>{address}</address>
      </div>
    
      <Link className={`${styles.regular_btn} ${styles.glow_on_hover}`} style={{width:175}}href={exploreLink}>
        <span>Explore More</span>
      </Link>
      <Button onClick={deleteEvent}>
        <span>Delete Event</span>
      </Button>
      <Button onClick={showUpdateForm}>
        <span>Update Event</span>
      </Button> 
      {updateForm && <UpdateEventForm onAddEvent={updateEventHandler}/>}
      {responseMessage && <strong>{responseMessage}</strong>}
    </div>
  );
}

export default EventItem;
