import EventItem from "./event-item";

function EventList(props) {
  const { events } = props;
  
  return (
    <div style={{width:"100%", marginBottom:80}}>
      {events.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          address={event.address}
          date={event.date}
        />
      ))}
    </div>
  );
}

export default EventList;