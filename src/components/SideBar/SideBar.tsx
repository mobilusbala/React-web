import List from '@mui/material/List';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { drawerWidth } from '../../pages/Home';
import { Link, NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import InfoIcon from '@mui/icons-material/Info';

type SideBarProps = {
  isOpen: boolean
  handleDrawerClose : () => void
}

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});


function SideBar(props: SideBarProps) {
  const theme = useTheme();


  return (

    <Drawer variant="permanent" open={props.isOpen}>
    <DrawerHeader>
      <IconButton onClick={props.handleDrawerClose}>
        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </IconButton>
    </DrawerHeader>
    <Divider />
    <List>
        <ListItem key="Home" disablePadding sx={{ display: 'block' }} component={Link} to="/">
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: props.isOpen ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: props.isOpen ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
            <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" sx={{ opacity: props.isOpen ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem key="Services" disablePadding sx={{ display: 'block' }} component={Link} to="/services">
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: props.isOpen ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: props.isOpen ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
            <MiscellaneousServicesIcon />
            </ListItemIcon>
            <ListItemText primary="Services" sx={{ opacity: props.isOpen ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem key="About" disablePadding sx={{ display: 'block' }} component={Link} to="/about">
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: props.isOpen ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: props.isOpen ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
            <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About" sx={{ opacity: props.isOpen ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>

        <Divider />
        <ListItem key="Contact" disablePadding sx={{ display: 'block' }} component={Link} to="/contact">
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: props.isOpen ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: props.isOpen ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
            <ContactPhoneIcon />
            </ListItemIcon>
            <ListItemText primary="Contact" sx={{ opacity: props.isOpen ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>

    </List>
    <Divider />
    

  </Drawer>
  )
}

export default SideBar