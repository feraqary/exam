import PropTypes from 'prop-types';
import React, { cloneElement, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  AppBar as MuiAppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Link,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
  useScrollTrigger,
  Tooltip,
  DialogTitle,
  Slide,
  DialogContent,
  DialogActions,
  Dialog
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
// project imports
import Logo from '../Logo';
import Login from '../../../pages/pages/authentication/portal_registration/login';
// assets
import { IconBook, IconCreditCard, IconDashboard, IconHome2 } from '@tabler/icons';
import { useUser } from '@auth0/nextjs-auth0/client';
import MenuIcon from '@mui/icons-material/Menu';
import { useSession, signIn, signOut } from 'next-auth/react';

function ElevationScroll({ children, window }) {
  const theme = useTheme();

  const { session, error, isLoading } = useSession();


  if (isLoading) {
    console.log('Loading');
  }
  if (error) {

    console.log(error);
  }
  if (session) {
    console.log('name', session.user.name), console.log('email', user.session.email);
  }

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window
  });

  return cloneElement(children, {
    elevation: trigger ? 1 : 0,
    style: {
      backgroundColor: theme.palette.mode === 'dark' && trigger ? theme.palette.dark[800] : theme.palette.background.default,
      color: theme.palette.text.dark
    }
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.node,
  window: PropTypes.object
};

// ==============================|| MINIMAL LAYOUT APP BAR ||============================== //
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AppBar = ({ ...others }) => {
  const [drawerToggle, setDrawerToggle] = useState(false);
  const [open, setOpen] = useState(false);

  const drawerToggler = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerToggle(open);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const { data: session } = useSession();


  return (
    <ElevationScroll {...others}>
      <MuiAppBar>
        <Container>
          <Toolbar sx={{ py: 2.5, px: `0 !important` }}>
            <Typography component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
              <Logo />
            </Typography>
            <Stack direction="row" sx={{ display: { xs: 'none', sm: 'block' } }} spacing={{ xs: 1.5, md: 2.5 }}>
              <Button color="inherit" component={Link} href="#">
                Home
              </Button>
              <Button color="inherit" component={Link} href="/pages/media_posts/Tabs" target="_blank">
                Social Media
              </Button>
              <Button color="inherit" component={Link} href="login">
                Dashboard
              </Button>
              {session ? (
                <Button color="inherit" onClick={()=>{signOut()}} target="_blank">
                  Sign Out
                </Button>
              ) : (
                <Button color="inherit" component={Link} href="/pages/authentication/portal_registration/login" target="_blank">
                  Portal Login
                </Button>
              )}

              {/* <a href="/api/auth/login">Login</a>
              <a href="/api/auth/logout">Logout</a>  */}

              <Tooltip title="Log In">
                <IconButton color="inherit" target="_blank" onClick={handleClickOpen}>
                  <AccountCircleIcon />
                </IconButton>
              </Tooltip>

              {/* login pop up*/}
              <Dialog maxWidth={'lg'} open={open} TransitionComponent={Transition} onClose={handleClose} fullWidth>
                <DialogActions sx={{ justifyContent: 'flex-start' }}>
                  <Tooltip title="close">
                    <IconButton color="inherit" onClick={handleClose}>
                      <CloseIcon />
                    </IconButton>
                  </Tooltip>
                </DialogActions>
                <DialogContent>
                  <Login closePopUp={setOpen} />
                </DialogContent>
              </Dialog>
            </Stack>
            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
              <IconButton color="inherit" onClick={drawerToggler(true)} size="large">
                <MenuIcon />
              </IconButton>
              <Drawer anchor="top" open={drawerToggle} onClose={drawerToggler(false)}>
                {drawerToggle && (
                  <Box sx={{ width: 'auto' }} role="presentation" onClick={drawerToggler(false)} onKeyDown={drawerToggler(false)}>
                    <List>
                      <Link style={{ textDecoration: 'none' }} href="#" target="_blank">
                        <ListItemButton component="a">
                          <ListItemIcon>
                            <IconHome2 />
                          </ListItemIcon>
                          <ListItemText primary="Home" />
                        </ListItemButton>
                      </Link>
                      <Link style={{ textDecoration: 'none' }} href="/login" target="_blank">
                        <ListItemButton component="a">
                          <ListItemIcon>
                            <IconDashboard />
                          </ListItemIcon>
                          <ListItemText primary="Dashboard" />
                        </ListItemButton>
                      </Link>
                      <Link style={{ textDecoration: 'none' }} href="/" target="_blank">
                        <ListItemButton component="a">
                          <ListItemIcon>
                            <IconCreditCard />
                          </ListItemIcon>
                        </ListItemButton>
                      </Link>
                    </List>
                  </Box>
                )}
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </MuiAppBar>
    </ElevationScroll>
  );
};

export default AppBar;
