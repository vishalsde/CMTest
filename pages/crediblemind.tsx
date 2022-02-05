import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Searchnews from "./Components/searchnews";

const useStyles = makeStyles({
    heading: {
      display:'flex',
      justifyContent:'center',
      color: 'black',
      paddingTop:'2rem',
      fontWeight: 600,
      fontSize:25,
      marginBottom: 25,
    },
  });


const Crediblemind = ({heading}) => {
    const classes = useStyles();
    
  return <>
  <Container>
          <Typography className={classes.heading}>
              {heading} 
          </Typography>
        <Searchnews />
  </Container>
  </>
};

export default Crediblemind;
