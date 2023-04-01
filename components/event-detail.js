import styles from '../src/styles/Comps.module.css'

function EventDetail(props) {
  const { title, address, content, date} = props;

  return (
    <>
    <div className={styles.detail_banner_container}>
      <img className={styles.detail_banner_img} src="/detail-bg-3.jpg" alt={title}/>
      <div className={styles.detail_banner_overlay}> </div>
      <h2 className={styles.detail_banner_title} style={{top:"155px", fontSize:20}}>EVENT DETAIL</h2>
      <h2 className={styles.detail_banner_title} style={{top:"180px"}}>
        {title}
      </h2>
    </div>
    <div className={styles.detail_info_container}>

      <div className={styles.detail_info_container_row}>
        <img className={styles.detail_info_icon}  style={{marginRight:5}} src="/date-icon.png" alt='icon'/>
        <time>{date}</time>
        <img className={styles.detail_info_icon} style={{padding:6, marginLeft:80}}src="/adress-icon.png" alt='icon'/>
        <address style={{fontStyle: 'normal'}}>{address}</address>
      </div>

      <p style={{textAlign:"center", marginTop:15}}>{content}</p>

    </div>

    </>
  );
}

export default EventDetail;
