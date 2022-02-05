import React from "react";
import Image from "next/image";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) => ({
  aligngrid: {
    display: "flex",
    flexDirection: "column",
  },
  newsheading: {
    display: "flex",
    fontSize: "22px",
    fontWeight: 700,
  },
  topiclink: {
    fontSize: "12px",
    fontWeight: 500,
    color: "blue",
    marginTop:'10px',
  },
  newsdescription: {
    fontSize: "15px",
  },
  alignsubtext: {
    display: "flex",
    marginTop: "30px",
    fontSize: "14px",
    fontWeight: 500,
  },
  publishdate: {
    fontSize: "14px",
    fontWeight: 500,
    padding: "0rem 1rem 0rem 0rem",
  },
  subtitle: {
    fontSize: "14px",
    fontWeight: 500,
    padding: "0rem 1rem",
  },
  line:{
    fontSize:"1rem",
    color:"gray",
  },
}));

const Newsblog: React.FC<Props> = ({
  topic,
  name,
  image,
  date,
  subtitle,
}) => {
  const classes = useStyles();
  const theme: Theme = useTheme();
  return (
    <>
      <div style={{display:'flex'}}>
        <Grid lg={12} className={classes.aligngrid}>
          <Grid item lg={12}>
            <div>
              <img src={image} height={250} width={380} />
            </div>
          </Grid>
          <Grid item lg={12}>
            <Typography className={classes.topiclink}>{topic}</Typography>
            <Typography className={classes.newsheading}>{name}</Typography>
            <div className={classes.alignsubtext}>
              <Typography className={classes.publishdate}>{date}</Typography><span className={classes.line}>|</span>
              <Typography className={classes.subtitle}>{subtitle}</Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Newsblog;
