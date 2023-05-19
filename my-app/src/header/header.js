import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import styles from  './header.module.scss';
import { Card } from "@material-ui/core";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className={styles.AppBar} position="static">

          <h1 className={styles.title}>The barber saloon</h1>
          <h3 className={styles.callNow}>call now</h3>
    
      </AppBar>
    </Box>
  );
}
