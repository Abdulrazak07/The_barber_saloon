import * as React from "react";
import { Container } from "@mui/system";
import styles from "./index.module.scss";
import { Card } from "@mui/material";

export default function HomeDescription() {
   return (
     <div className={styles.container}>
       <div className={styles.description}>
         {/* Left side description content */}
         <h2 className={styles.title}>WHAT’S TRENDING?
         <br/> UFF TERI ADA LOOK</h2>
         <p className={styles.paragraph}>
           The Uff Teri Ada look from our Blockbuster Brides collection is
           designed for the coy bride whose excitement at her sangeet is
           palpable but measured. She is a vision of pure radiance as she
           prepares to embark on this new journey in her life. 
           
           <br/>
           <br/>
           The shades of
           mint green that this stunning bride adorns befits her strong sense of
           individuality and independence. 
           <br/>
           <br/>Check out our complete Blockbuster
           Bridal Collection.
         </p>
       </div>
       <div className={styles.image}>
         {/* Right side image */}
         <img
           src="https://content.latest-hairstyles.com/wp-content/uploads/beard-fade.jpg"
           alt="Container Image"
         />
       </div>
     </div>
   );
}



// https://content.latest-hairstyles.com/wp-content/uploads/beard-fade.jpg