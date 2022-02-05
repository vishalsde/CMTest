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

const Blogcards: React.FC<Props> = ({
  topic,
  name,
  image,
  date,
  subtitle,
  description,
  slug,
  data,
}) => {
  const router = useRouter();
  const classes = useStyles();

  return (
    <>
      <Container
        onClick={() =>
          router.push({
            pathname: `/News/${slug}`,
            query: data,
          })
        }
      >
        <Grid container className={classes.aligngrid}>
          <Grid item lg={5}>
            <div>
              <img src={image} height={200} width={300} />
            </div>
          </Grid>
          <Grid item lg={7}>
            <Typography className={classes.topiclink}>{topic}</Typography>
            <Typography className={classes.newsheading}>{name}</Typography>
            <Typography className={classes.newsdescription}>
              {description}
            </Typography>
            <div className={classes.alignsubtext}>
              <Typography className={classes.publishdate}>{date}</Typography><span className={classes.line}>|</span>
              <Typography className={classes.subtitle}>{subtitle}</Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Blogcards;
