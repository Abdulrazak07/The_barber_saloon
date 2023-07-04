import * as React from "react";
import styles from "./index.module.scss";
import { Button, Card, Container } from "@mui/material";

export default function Services() {
   return (
     <>
       <div className={styles.services}>
         <div className={styles.description}>
           <h1 className={styles.title}>OUR SERVICES</h1>
           <p className={styles.paragraph}>
             Indulge in expert hairstyling, rejuvenating facials, and impeccable
             nail care at our luxurious salon.
             <br />
             Experience personalized services delivered by skilled professionals
             dedicated to enhancing your beauty and well-being.
           </p>
         </div>
         <div className={styles.container}>
           <div className={styles.card}>
             <img
               src="https://media.istockphoto.com/id/640281394/photo/young-man-enjoying-hairwash-at-beauty-salon.jpg?s=612x612&w=0&k=20&c=p1tv-0IjbCoeJ38nW1lyVlzzTwNsdLe-yzymC9M5xV8="
               alt="Image 1"
             />
             <div className={styles.description}>Description 1</div>
           </div>
           <div className={styles.card}>
             <img
               src="https://media.istockphoto.com/id/640281394/photo/young-man-enjoying-hairwash-at-beauty-salon.jpg?s=612x612&w=0&k=20&c=p1tv-0IjbCoeJ38nW1lyVlzzTwNsdLe-yzymC9M5xV8="
               alt="Image 2"
             />
             <div className={styles.description}>Description 2</div>
           </div>
           <div className={styles.card}>
             <img
               src="https://media.istockphoto.com/id/640281394/photo/young-man-enjoying-hairwash-at-beauty-salon.jpg?s=612x612&w=0&k=20&c=p1tv-0IjbCoeJ38nW1lyVlzzTwNsdLe-yzymC9M5xV8="
               alt="Image 2"
             />
             <div className={styles.description}>Description 2</div>
           </div>
           <div className={styles.card}>
             <img
               src="https://media.istockphoto.com/id/640281394/photo/young-man-enjoying-hairwash-at-beauty-salon.jpg?s=612x612&w=0&k=20&c=p1tv-0IjbCoeJ38nW1lyVlzzTwNsdLe-yzymC9M5xV8="
               alt="Image 2"
             />
             <div className={styles.description}>Description 2</div>
           </div>
           {/* Add more cards as needed */}
         </div>
         {/* <Card className={styles.menu}>View Menu</Card> */}
       </div>
       <div className={styles.menu}>
         <Button className={styles.viewMenu}>View Menu</Button>
       </div>
     </>
   );}