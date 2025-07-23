import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar, Box, Toolbar, IconButton, Typography, Menu, MenuItem, Divider
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

// profile Img
import ProfileImg from '../../assets/img/profile.png';

// import css
import '../../App.css'

const drawerWidth = 240;


export default function Topbar({ handleDrawerToggle }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        backgroundColor: '#fbfcfd',
        color: '#1C3D58',
        boxShadow: '0px 1px 8px #cdcdcdff'
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography sx={{ marginRight: '10px', display: { xs: 'none', sm: 'block' } }} variant="h6" noWrap>
            Dashboard
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* Search Input */}
          <Box sx={{ position: 'relative', display: { xs: 'block', sm: 'block' } }}>
            <input
              type="text"
              placeholder="Search..."
              style={{
                width: '100%',
                padding: '10px 12px 8px 36px',
                borderRadius: '5px',
                border: '1px solid #1c3d5834',
                outline: 'none',
                fontSize: '14px',
                color: '#1C3D58',
              }}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 0 24 24"
              width="20"
              fill="#1C3D58"
              style={{
                position: 'absolute',
                top: '50%',
                left: '10px',
                transform: 'translateY(-50%)',
              }}
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16a6.471 6.471 0 004.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C8.01 14 6 11.99 6 9.5S8.01 5 10.5 5 15 7.01 15 9.5 12.99 14 10.5 14z" />
            </svg>
          </Box>

          {/* Notification */}

          <IconButton className="appbar-icons" color="inherit">
            <NotificationsNoneOutlinedIcon />
          </IconButton>

          {/* Profile */}
          <Box sx={{ position: 'relative' }}>
            <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
              <img
                src={ProfileImg}
                alt="profile"
                style={{ borderRadius: '50%', width: 32, height: 32, objectFit: 'cover' }}
              />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
            >
              <p style={{ marginLeft: 16, color: '#6B6B6B', fontSize: '14px' }}>Admin Account</p>
              <Divider />
              <MenuItem onClick={() => navigate('/account/profile')} sx={{ gap: 1 }} className="profile-menus">
                <PeopleIcon fontSize="small" /> Profile
              </MenuItem>
              <MenuItem onClick={() => navigate('/account/settings')} sx={{ gap: 1 }} className="profile-menus">
                <SettingsIcon fontSize="small" /> Settings
              </MenuItem>
              <Divider />
              <MenuItem onClick={() => navigate('/account/logout')} sx={{ gap: 1 }} className="profile-menus">
                <LogoutIcon fontSize="small" /> Logout
              </MenuItem>
            </Menu>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}