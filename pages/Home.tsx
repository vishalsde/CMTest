import type { NextPage } from "next";
import newsapi from "./api/newsapi";
import { useEffect, useState } from "react";
import News from "./news";
import Crediblemind from "./crediblemind";
import { Container } from "@material-ui/core";
import Image from "next/image";

const Home: NextPage = () => {
  
  const [logo, setLogo] = useState();
  const [heading, setHeading] = useState("");
  const [menulable, setMenulable] = useState("");
  const [searchlable, setSearchlable] = useState("");
  const getData = async () => {
    const result = await Promise.resolve(newsapi());

    let logoUrl = result.includes.Asset[0].fields.file.url;
    let heading = result.items[0].fields.ttile;
    let menulable = result.items[0].fields.menuLabel;
    let searchLabeltext = result.items[0].fields.searchLabel;
    setHeading(heading);
    setLogo(logoUrl);
    setMenulable(menulable);
    setSearchlable(searchLabeltext);

  };

  useEffect(() => {
    getData();
  }, []);

  console.log(logo);

  return (
    <>
      <Container>
        <div style={{ marginTop: "2rem" }}>
          <img src={logo} />
        </div>
      </Container>
      <News menulable={menulable} />
      <Crediblemind 
        heading={heading}
        // searchlable={searchlable} 
      />
    </>
  );
};

export default Home;
