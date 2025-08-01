import {
  Divider, Drawer, List, ListItem, ListItemButton,
  ListItemIcon, ListItemText
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { NavLink } from 'react-router-dom';

// import logo
import Logo from '../../assets/img/logo1.png';

const drawerWidth = 240;

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
  { text: 'User Management', icon: <PeopleIcon />, path: '/user-management' },
  { text: 'Drill Library', icon: <FitnessCenterIcon />, path: '/drill-library' },
  { text: 'NBA Data', icon: <SportsBasketballIcon />, path: '/nba-data'},
  { text: 'Notifications', icon: <NotificationsIcon />, path: '/notifications' },
  { text: 'Analytics', icon: <BarChartIcon />, path: '/analytics' },
  { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
  { text: 'Profile', icon: <AccountCircleOutlinedIcon />, path: '/profile' },
  { text: 'Logout', icon: <LogoutIcon />, path: '/login' },
];

export default function Sidebar({ mobileOpen, handleDrawerClose, handleDrawerTransitionEnd, container }) {
  const drawer = (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent:'left' }}>
        <img style={{ width: 75  }} src={Logo} alt="logo-img" />
        <div style={{ paddingTop:'20px'}}>
          <h4 style={{ marginBottom: 0, color: '#ffffffff', fontWeight: 600, fontSize: '18px' }}>Pro Match</h4>
          <p style={{ marginTop: 3, color: '#bfbbbbff', fontSize: '14px' }}>Admin Dashboard</p>
        </div>
      </div>
      <Divider style={{border: '1px solid gray'}} />
      <List>
        <p style={{ marginLeft: 20, color: '#bfbbbbff', fontSize: '14px' }}>Main Menu</p>
        {menuItems.map((item) => (
        <ListItem key={item.text} className='ps-2 pe-2 pt-0'>
          <ListItemButton
            component={NavLink}
            to={item.path}
            sx={{
              borderRadius:'5px', 
              px: 2, py: 1,
              '&:hover': {
                backgroundColor: '#F25C05',
                color: '#fff',
                '& .MuiListItemIcon-root': { color: '#fff', transition: '0.3s' }
              },
              '&.active': {
                backgroundColor: '#F25C05',
                color: '#fff',
                '& .MuiListItemIcon-root': { color: '#fff' }
              }
            }}
          >
            <ListItemIcon sx={{ minWidth: 40, color: '#ffffff' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} primaryTypographyProps={{ fontSize: 14 }} />
          </ListItemButton>
        </ListItem>
      ))}
      </List>
    </div>
  );

  return (
    <>
      {/* Mobile Drawer */}
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerClose}
        onTransitionEnd={handleDrawerTransitionEnd}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            backgroundColor: '#1C3D58',
            color:'#ffffff',
            boxSizing: 'border-box'
          }
        }}
      >
        {drawer}
      </Drawer>

      {/* Desktop Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            backgroundColor: '#1C3D58',
            color:'#ffffff',
            boxSizing: 'border-box'
          }
        }}
        open
      >
        {drawer}
      </Drawer>
    </>
  );
}
