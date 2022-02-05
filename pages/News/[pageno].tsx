import React, { useState, MouseEvent } from "react";
import Image from "next/image";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme: Theme) => ({
  aligngrid: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    marginTop: "5%",
  },
  newsheading: {
    display: "flex",
    fontSize: "2.8rem",
    fontWeight: 700,
    lineHeight: "3.2rem",
  },
  topiclink: {
    fontSize: "12px",
    fontWeight: 500,
    color: "blue",
  },
  newsdescription: {
    marginTop: "2rem",
    fontSize: "1.2rem",
  },
  image:{
    display:"flex",
    justifyContent:"center",
  },
  alignsubtext: {
    display: "flex",
    marginTop: "30px",
    fontSize: "14px",
    fontWeight: 500,
  },
  publishdate: {
    fontSize: "1rem",
    fontWeight: 500,
    padding: "0rem 1rem 0rem 0rem",
  },
  line:{
    fontSize:"1rem",
    color:"gray",
  },
  subtitle: {
    fontSize: "1rem",
    fontWeight: 500,
    padding: "0rem 1rem",
  },
}));

const newsitem = () => {
  const classes = useStyles();
  const { query } = useRouter();

  console.log(query);

  const data =query; 
  


  return (
    // <p>{query.name}</p>

    <div>
      <Container>
        <Grid container className={classes.aligngrid}>
          <Grid item lg={7}>
            <div className={classes.image}>
               <img src={query.imageUrl} height={500} width={600} />
            </div>
          </Grid>
          <Grid item lg={5}>
              <Typography className={classes.newsheading}>{data.name}</Typography>
              <Typography className={classes.newsdescription}>{data.description}</Typography>
              <div className={classes.alignsubtext}>
                  <Typography className={classes.publishdate}>{data.publicationDate}</Typography><span className={classes.line}>|</span>
                  <Typography className={classes.subtitle}>{data.subtype}</Typography>
              </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default newsitem;
