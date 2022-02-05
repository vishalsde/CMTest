import React, { useEffect, useState } from "react";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, MenuItem, MenuList, Paper, Typography } from "@material-ui/core";
import { InstantSearch } from "react-instantsearch-dom";
import moment from 'moment';
import client from "../../../lib/algoliaService";
import Searchbox from "../Searchbox";
import Hits from "../Hits";
import Blogcards from "../blogcards";
import Newsblog from "../newsblog";
import { useRouter } from "next/router";
const useStyles = makeStyles({
  aligngrid: {
    display: "flex",
    flexDirection: "row",
    color: "black",
    paddingTop: "2rem",
    fontSize: 10,
    marginBottom: 25,
  },
  alignblog:{
    padding:"1rem 0rem",
  },
  searchpaper:{
     display:'flex',
     flexDirection:'column',
     justifyContent: 'center',
     padding:'1rem 1rem',
     boxShadow:'none',
     border:'1px solid black',
     
     marginTop:'2rem',
     height: 'auto',
     width: '220px',
  },
  searchpapersub:{
    maxHeight:"447px",
    overflowY:'auto',
  },
  searchtext:{
    fontSize:'18px',
    fontFamily:'normal',
    fontWeight:700,
    marginBottom:'10px',
  },
  gridscroll:{
    overflowY: 'auto',
    height: '600px',
  },
  alignresourcefound:{
    marginLeft:'23px',
    fontSize:'22px',
    fontWeight:700,
  },
});

const Searchnews = (searchlable) => {
  const classes = useStyles();
  const [newsData, setNewsData] = useState<any>([]);
  console.log("Cureent Data", newsData);
  useEffect(() => {
    return;
  }, [newsData]);

  return (
    <div>
      <Container>
        <Grid lg={12} >
        <Grid style={{display: 'flex'}} >
                {newsData?.hits?.map((data,index) => {
                    return (
                      <>
                      {index<3 && 
                       <Grid md={4}>
                          <div className={classes.alignblog}>
                            <Newsblog 
                            topic={data?.topics[0].title}
                            name={data?.name}
                            image={data?.imageUrl}
                            title={data?.title}
                            date={moment(data?.publicationDate).format('MMM DD,YYYY')}
                            subtitle={data?.subtype}
                            />
                      </div>
                      </Grid>
                      }
                      </>
                    );
                  })}
                </Grid>
                <hr />
          <Grid item lg={12}>
            <div>
              <Grid lg={12} style={{ display: "flex", flexDirection: "row" }}>
                <Grid lg={3}>
                  <Paper className={classes.searchpaper} >
                    <Typography className={classes.searchtext}>Filter & Refine</Typography>
                    <InstantSearch searchClient={client} indexName="news">
                        <Searchbox />
                        <MenuList>                         
                          <Paper className={classes.searchpapersub} >
                          {<Hits data={(d) => setNewsData(d)} />}
                          </Paper>                        
                        </MenuList>
                    </InstantSearch>
                  </Paper>
                </Grid>
                <Grid lg={9} className={classes.gridscroll}>
                  <Typography className={classes.alignresourcefound}>{newsData?.hits?.length} Resoureces found</Typography>
                  <hr />
                  {newsData?.hits?.map((data) => {
                    return (
                      <>
                      <div className={classes.alignblog}>
                        <Blogcards 
                          topic={data?.topics[0].title}
                          name={data?.name}
                          image={data?.imageUrl}
                          title={data?.title}
                          date={moment(data?.publicationDate).format('MMM DD,YYYY')}
                          subtitle={data?.subtype}
                          description={data?.description}
                          slug={data?.slug}
                          data={data}
                        />
                      </div>
                        <hr />
                      </>
                    );
                  })}
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Searchnews;
