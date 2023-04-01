import { prisma } from "../../../server/db/client";
import EventDetail from "../../../components/event-detail";
import Comments from "../../../components/comments";
import styles from '../../styles/Events.module.css';
import Footer from "../../../components/footer";
import Layout from "../../../components/layout";

function EventDetailPage(props) {

  const selectedEvents = [{id: 1, createdAt: '22023-03-31 15:23:19', title: 'NBA', address: 'BC Place Stadium', content: 'BC Place Stadium', date: '2023/6/17'},{id: 3, createdAt: '2023-03-31 15:25:03', title: 'Coding Lecture', address: 'BCIT', content: 'hahahha', date:'2023/6/17'},{id: 4, createdAt: '2023-03-31 16:10:41', title: 'Party Tonight', address: 'UBC', content: "Let's party", date:'2023/3/3'},{id: 3, createdAt: '2023-03-31 15:25:03', title: 'Coding Lecture', address: 'BCIT', content: 'hahahha', date:'2023/6/17'},{id: 5, createdAt: '2023-03-31 16:10:41', title: 'Parents meeting', address: '9330 Univercity Cres', content: "Lol!", date:'2023/9/30'}]
  const randomNumber = Math.floor(Math.random() * 5);
  const selectedEvent = selectedEvents[randomNumber];
  // const selectedEvent = props.selectedEvent;

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
