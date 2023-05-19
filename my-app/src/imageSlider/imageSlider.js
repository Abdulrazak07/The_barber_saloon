import { style } from "@mui/system";
import React, { useState, useEffect } from "react";
import styles from './imageSlider.module.scss'

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://content3.jdmagicbox.com/comp/chengalpattu/q3/9999pxx44.xx44.191216205452.c5q3/catalogue/the-barber-salon-and-spa-urapakkam-chengalpattu-salons-abuxdlt5sp.jpg",
    "https://content3.jdmagicbox.com/comp/chengalpattu/q3/9999pxx44.xx44.191216205452.c5q3/catalogue/the-barber-salon-and-spa-chengalpattu-d4lungfzcp.jpg",
    "https://images.jdmagicbox.com/comp/chengalpattu/g8/9999pxx44.xx44.170809153347.w5g8/catalogue/new-bright-white-chengalpattu-intje4a1n1.jpg",
  ];

  useEffect(() => {
    // Start the timer to switch images every 3 seconds
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    // Clear the timer on component unmount
    return () => clearInterval(timer);
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className={styles.imageContainer}>
      <img
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        className={styles.image}
      />
    </div>
  );
};

export default ImageSlider;
