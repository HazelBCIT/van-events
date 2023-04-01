import EventList from "../../../components/event-list";
import { useState, useEffect } from "react";
import Layout from "../../../components/layout";
import styles from '../../styles/Events.module.css';
import Footer from "../../../components/footer";
import AddEvent_Popup from "../../../components/addEvent_popup";


function AllEventsPage() {
  const [events, setEvents] = useState([]);
  const [ifEventIsNull,setIfEventIsNull] = useState(true)

  useEffect(() => {
    fetch("/api/get-events")
      .then((response) => response.json())
      .then((data) => {
        if(data.length !== 0) {
          setEvents(data)
          setIfEventIsNull(false)
          console.log(events);
        }
        });
  }, [events]);


  return (
    <>
    <div className={styles.main}>
      <Layout />
      <img className={styles.navBar_logo} src="/VanE_Logo@2x.png" alt="Nav Bar Logo" />
      <img className={styles.banner_img} src="/carousel_image02.png" alt="Banner Image" />

      <hr />
      <h1>Trending events</h1>
      

      <div className={styles.trending_container}>

        <div className={styles.trending_box}>
          <img className={styles.trending_img} src="/Trending-1.jpeg" alt="Banner Image" />
          <h2>title</h2>
          <time>Date:</time>
          <address>Address: </address>
        </div>


        <div className={styles.trending_box}>
          <img className={styles.trending_img} src="/Trending-2.jpeg" alt="Banner Image" />
          <h2>title</h2>
          <time>Date:</time>
          <address>Address: </address>
        </div>

        <div className={styles.trending_box}>
          <img className={styles.trending_img} src="/Trending-3.jpeg" alt="Banner Image" />
          <h2>title</h2>
          <time>Date:</time>
          <address>Address: </address>
        </div>
      </div>

      <hr />
      <div className={styles.all_events_title}>
      <h1>All events</h1>
      <AddEvent_Popup />
      </div>
      {ifEventIsNull && <p>No event yet!</p>}
      {!ifEventIsNull && <EventList events={events} />}
      <Footer />
    </div>

    </>
  );
}

export default AllEventsPage;
