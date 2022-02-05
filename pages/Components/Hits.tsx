import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { connectStateResults } from "react-instantsearch-dom";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles({
  listitem: {
    borderBottom : '.5px solid #153084',
  },  
});

function Hits({ searchState, searchResults, data }) {
  const [news, setData] = useState(searchResults);
  const router = useRouter();
  const validQuery = searchState.query?.length >= 3;
  const classes = useStyles();

  useEffect(() => {
    setData(searchResults);
    data(searchResults);
  }, [searchResults]);

  return (
    <>
      {searchResults?.hits.length === 0 && validQuery && (
        <p>No results found!</p>
      )}

      {searchResults?.hits.length > 0 && validQuery && (
        <>
          {searchResults.hits.map((hit, index) => (
            <div className={classes.listitem} tabIndex={index} key={hit.objectID}>
              <a
                onClick={() =>
                  router.push({
                    pathname: `/News/${hit?.slug}`,
                    query: hit,
                  })
                }
              >
                {hit.name}{" "}
              </a>
            </div>
          ))}
        </>
      )}
    </>
  );
}

export default connectStateResults(Hits);
