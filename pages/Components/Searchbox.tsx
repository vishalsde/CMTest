// import connectSearchBox
import { TextField,InputAdornment } from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search'
import { connectSearchBox } from "react-instantsearch-dom"
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";


const useStyles = makeStyles({
    searchbox:{
        border:'1px solid gray',
        paddingLeft:'10px',
    },
    iconcolor:{
        display:'flex',
        backgroundColor:'#153084',
        color:'white',
        borderRadius:'4px',
    },
  });


function SearchBox({ refine }) {
    const classes = useStyles();
    return (
        <>
            <TextField 
                fullWidth
                id="algolia_search"
                type="search"
                placeholder="Search"
                className={classes.searchbox}
                onChange={(e) => refine(e.currentTarget.value)}
                InputProps={{
                    endAdornment:(
                        <InputAdornment position="start" >
                            <SearchIcon className={classes.iconcolor}/>
                        </InputAdornment>
                    )
                }}
               
            />
        </>
    )
}

export default connectSearchBox(SearchBox)