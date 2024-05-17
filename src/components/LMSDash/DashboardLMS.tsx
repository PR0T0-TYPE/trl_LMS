import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './LMSLayout';
import { Container, CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import { Person as PersonIcon, Dashboard as DashboardIcon, LibraryBooks as LibraryBooksIcon, Chat as ChatIcon } from '@material-ui/icons';
import { useLocation } from 'react-router-dom';

const menuItems = [
  { label: 'Profile', path: '/Profile', icon: PersonIcon },
  { label: 'Dashboard', path: '/DashboardLMS', icon: DashboardIcon },
  { label: 'Courses', path: '/Courses', icon: LibraryBooksIcon },
  { label: 'Chat', path: '/Chat', icon: ChatIcon },
];

const linkStyle: React.CSSProperties = {
  textDecoration: 'none',
  color: '#333',
  fontSize: '15px',
  padding: '10px',
  display: 'flex',
  border: '1px solid #ccc',
  borderRadius: '5px',
  marginBottom: '10px',
  backgroundColor: '#009DD1',
  transition: 'background-color 0.3s ease',
};

const DashboardLMS: React.FC = () => {
  const location = useLocation();

  return (
    <Layout>
      <CssBaseline />
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton component={Link} to={item.path} selected={location.pathname === item.path}>
                <ListItemIcon>
                  <item.icon />
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Toolbar/>

      <Container maxWidth="xl" style={{ marginLeft: '260px' }}>
        <div style={{ marginTop: '20px' }}>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li>
              <Link to="/EmployeeList" style={linkStyle}>
                Interns List
              </Link>
            </li>
            <li>
              <Link to="/Batches" style={linkStyle}>
                Batches
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </Layout>
  );
};

export default DashboardLMS;
