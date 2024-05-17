import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PageHeader from 'src/library/heading/pageHeader';

const ToolBar: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ backgroundColor: 'gray' }}>
        <Toolbar variant="dense" sx={{ justifyContent: 'center' }}>
          <Typography variant="h2" component="div"> 
            <PageHeader heading="Dashboard" />
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ToolBar;
