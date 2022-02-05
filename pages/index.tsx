import { initializeApp } from "firebase/app";
import { useEffect, useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRouter } from "next/router";
import { firebaseConfig } from "../lib/firebaseConfig";
import newsapi from "./api/newsapi";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  mainclass: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    flexDirection: "column",
    padding:"1rem",
  },
  alignbtn:{
    marginTop:"1rem",
    display:"flex",
    justifyContent:"center",
  },
}));

function login() {
  const router = useRouter();
  const [logo, setLogo] = useState();
  const classes = useStyles();

  const getData = async () => {
    const result = await Promise.resolve(newsapi());
    let logoUrl = result.includes.Asset[0].fields.file.url;
    setLogo(logoUrl);
  };

  useEffect(() => {
    getData();
  }, []);

  const loginUser = () => {
    initializeApp(firebaseConfig);
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        router.push("/Home");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <Container>
      <div className={classes.mainclass} onClick={loginUser}>
        <Card sx={{ maxWidth: 345}} style={{padding:'1rem'}}>
          <CardMedia
            component="img"
            height="140"
            src={logo}
            alt="green iguana"
          />
          <CardActions className={classes.alignbtn}>
            <Button variant="contained" color="primary" size="small" >Login with google</Button>
          </CardActions>
        </Card>
      </div>
    </Container>
  );
}

export default login;
