import { prisma } from "../../../server/db/client";
import EventDetail from "../../../components/event-detail";
import Comments from "../../../components/comments";
import styles from '../../styles/Events.module.css';
import Footer from "../../../components/footer";
import Layout from "../../../components/layout";

function EventDetailPage(props) {
  const selectedEvent = props.selectedEvent;

  return (
    <>
    <div className={styles.detail_container}>
      <Layout />
      <img className={styles.navBar_logo} src="/VanE_Logo@2x.png" alt="Nav Bar Logo" />
        <EventDetail
          key={selectedEvent}
          title={selectedEvent.title}
          address={selectedEvent.address}
          content={selectedEvent.content}
          date={selectedEvent.date}
        />
      <hr />
      <Comments eventId={selectedEvent.id} />
      <div className={styles.spacer} ></div>
      <Footer />
    </div>
    </>
  );
}

export async function getStaticProps(context) {
  const selectedEventId = context.params.eventId;
  const selectedEvent = await prisma.events.findUnique({
    where: { id: parseInt(selectedEventId) },
  });

  return {
    props: {
      selectedEvent: JSON.parse(JSON.stringify(selectedEvent)),
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const events = await prisma.events.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const paths = events.map((event) => ({
    params: { eventId: event.id.toString() },
  }));

  return {
    paths: paths,
    fallback: true,
  };
}

export default EventDetailPage;
