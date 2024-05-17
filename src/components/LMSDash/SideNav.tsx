import React from 'react';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import ChatIcon from '@material-ui/icons/Chat';
import { Link, Link as RouterLink, useLocation } from 'react-router-dom';

const menuItems = [
  { label: 'Profile', path: '/Profile', icon: PersonIcon },
  { label: 'Dashboard', path: '/DashboardLMS', icon: DashboardIcon },
  { label: 'Courses', path: '/Courses', icon: LibraryBooksIcon },
  { label: 'Chat', path: '/Chat', icon: ChatIcon },
];

const SideNav = () => {
  const location = useLocation();

  return (
    <div>
      <CssBaseline />
      <Drawer
        sx={{
          width: 260,
          flexShrink: 0,
          backgroundColor: 'white',
          paddingTop: '24px', 
          '& .MuiDrawer-paper': {
            width: 250,
            boxSizing: 'border-box',
            boxShadow: '0px 2px 5px 0px rgba(0,0,0,0.75)',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.label}
              disablePadding
              sx={{
                display: 'block', 
                paddingTop: '25px', // Adjusted padding top
                ...(location.pathname === item.path && { boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)' }), 
              }}
            >
              <ListItemButton
                component={RouterLink}
                to={item.path}
                selected={location.pathname === item.path}
                sx={{
                  borderRadius: '0px 25px 25px 0px', // Rounded border on the right side
                  '&.Mui-selected': {
                    backgroundColor: '#f0f0f0', // Background color when selected
                    '&:hover': {
                      backgroundColor: '#f0f0f0', // Background color on hover when selected
                    },
                  },
                }}
              >
                <ListItemIcon sx={{ color: location.pathname === item.path ? 'black' : '' }}>
                  <item.icon /> 
                </ListItemIcon>
                <ListItemText primary={item.label} /> 
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default SideNav;
