import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import Countup from "react-countup";
import cx from 'classnames'
import styles from './DisplayBox.module.css'

const DisplayBox = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }

  return (
    <div className={styles.container} >
      <Grid container spacing = {3} justify= "center">
        <Grid item component ={Card}  className = {cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color = "texteSecondary" gutterBottom >Infected</Typography>
            <Typography variant ="h5"> 
            <Countup
                start ={0}
                end = {confirmed.value}
                duration = {1.0}
                seperator = ","
              /> </Typography>
            <Typography color = "textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
          </CardContent>
        </Grid>
        <Grid item component ={Card} className = {cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color = "texteSecondary" gutterBottom >Deaths</Typography>
            <Typography variant ="h5"> 
            <Countup
                start ={0}
                end = {deaths.value}
                duration = {2.0}
                seperator = ","
              />
            </Typography>
            <Typography color = "textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
          </CardContent>
        </Grid>
        <Grid item component ={Card} className = {cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color = "texteSecondary" gutterBottom >Recovered</Typography>
            <Typography variant ="h5">
            <Countup
                start ={0}
                end = {recovered.value}
                duration = {3.0}
                seperator = ","
              />
             </Typography>
            <Typography color = "textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
    
  );
};

export default DisplayBox;
