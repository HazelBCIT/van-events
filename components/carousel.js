import React, {useState, useEffect} from "react";
import styles from "../src/styles/Events.module.css";
import Image from "next/image";

const CarouselData = [
  {
    title: "Beyoncé: Renaissance World Tour",
    img_src: '/carousel_image01.jpg'
  },
  {
    title: "Ed Sheeran: +-=÷x Tour",
    img_src: '/carousel_image02.png'
  },
  {
    title: "Drake: It's All A Blur Tour",
    img_src: '/carousel_image04.png'
  },
  {
    title: "Music Festival",
    img_src: '/carousel_image03.jpg'
  },
]
const len = CarouselData.length - 1;

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
   const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    let interval;
    if(autoPlay) {
      interval = setInterval(() => {
        setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
      }, 5000);
    }    
    return () => clearInterval(interval);
  }, [autoPlay, activeIndex]);

  return (
    <div className={styles.active}>

      <div className={styles.carouselImage} id="carouselImage">
        {CarouselData.map((img, index) => (
          <div
            key={index}
            className={index === activeIndex ? styles.active : styles.inactive}
          >
          <Image className={styles.carousel_Img} src={img.img_src} alt=""/>
          </div>        
        ))}
      </div>

      <div className={styles.carouselTitle} id="carouselTitle">
          {CarouselData.map((img, index) => (
            <div
              key={index}
              className={index === activeIndex ? styles.active : styles.inactive}
            >
              <div style={{position:"absolute", left:0, marginLeft:50}}>{img.title}</div>  
            </div>        
          ))}
      </div>

      {/* <div className={styles.row} style={{width:360, padding:"0 15px", justifyContent: "space-between", position: "absolute",top:120}}>
        <img 
          className={styles.icon} 
          src='/leftArrow.png'
          onClick={() =>
            setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)}
        />
        <img  
          className={styles.icon} 
          src='/rightArrow.png'
          onClick={() =>
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)}
        />
      </div> */}
    <div>
  </div>
</div>
);
}
