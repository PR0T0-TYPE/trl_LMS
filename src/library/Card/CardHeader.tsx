import React from 'react';
import { Typography, Card } from '@mui/material';

const CardHeader = ({ Item }) => {
  return (
    <div >
      <Card style={{ display:"flex" , backgroundColor: "#424242"}}   >
      {Item.map((item, i) => (
       
          <Typography   key={i}  variant="h5" color="white"sx={{mr:"75px"}}>
            {item.Name}
          </Typography>
          
       
      ))}
      </Card>
    </div>
  );
};

export default CardHeader;