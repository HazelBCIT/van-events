import Image from "next/image";

function EventDetail(props) {
  const { title, address, content, date} = props;

  return (
    <>
      <Image src="/event-samle.jpg" alt={title} width={250} height={160} />
      <h2>
        Event Name:
        {title ? title: null}
      </h2>
      <time>Date: {date ? date:null}</time>
      <address>Address: {address ? address:null}</address>
      <p>Content: {content? content:null}</p>
    </>
  );
}

export default EventDetail;
