import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Grow from '@material-ui/core/Grow';
import MenuList from '@material-ui/core/MenuList';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { Container,Button,Popper,Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color:'black',
  },
  appbar:{
    backgroundColor:'white',
    boxShadow:'none',
    borderTop:'0.01px solid gray',
    marginTop:'3rem',
  },
  profileicon:{
    color:'black',
    width:'2rem',
    height:'2rem',
    paddingRight:'0px',
    '&:MuiIconButton-root':{
      padding:0,
    },
  },
  resizepaper:{
    padding: '0rem 1rem',
  },
  downarrowcolor:{
    color:'orange',
  },
  profilebtn:{
    fontWeight: 700,
    fontSize: 15,
    color:'blue',
    width: 122,
    display: 'flex',
    justifyContent:' flex-start',
    
  },
  alignprofile:{
    display:'flex',
    flexDirection:'row',
    alignItems:'left',
  },
}));

function News({menulable}) {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleClose = (event) => {
    setAnchorEl(null);

    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };


  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }
  return <>
  <Container>
  <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
           {menulable}
          </Typography>
          {auth && (
            <div className={classes.alignprofile}>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                // onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle className={classes.profileicon}/>
              </IconButton>
              <Button
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                className={classes.profilebtn}
              >
                John doe <ArrowDropDown className={classes.downarrowcolor}/>
              </Button>
              <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper className={classes.resizepaper}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
            </div>
          )}
        </Toolbar>
      </AppBar>
      </Container>
      <hr />
  </>;
}

export default News;
