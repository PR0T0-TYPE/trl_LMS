import { Card, Grid, Hidden, Tooltip, Typography } from '@mui/material';
import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SendIcon from '@mui/icons-material/Send';
import LinkIcon from '@mui/icons-material/Link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function TabulerCard1({ item, clickEdit, Submit, Delete, IsEnquiry=false, Submit1 = undefined }) {

  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 900) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  window.addEventListener('resize', handleResize);
  return (
    <div>
      <Card sx={{ mb: 1  ,backgroundColor: "#fafafa"}}  >
        <Grid
          container
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row'
          }}
        >  
          <Grid item xs={1.4}  >
            <Typography>{item.Text1}</Typography>
          </Grid>

          <Grid item xs={1.4}>
            <Typography>{item.Text2}</Typography>
          </Grid>

          <Grid item xs={1.4}>
            <Typography>{item.Text3}</Typography>
          </Grid>

          <Grid item xs={1.4}>
            <Typography>{item.Text4}</Typography>
          </Grid>

          <Grid item xs={1.5}>
         { IsEnquiry! && (
            <Typography>{item.Text5}</Typography>
         )}
          </Grid>
          

          <Grid item xs={1.6}>
            <Typography>{item.Text6}</Typography>
          </Grid>

          {/* {Submit1 &&  <Grid item xs={2} md={1}>
                <ArrowForwardIcon color={'secondary'} onClick={() =>Submit1(item.Id)} />
              </Grid> } */}


          <Grid xs={3} sx={{ display: 'flex', flexDirection: 'row',  }}>
            <Grid item xs={1} sx={{mr:"70px"}}   >
              {IsEnquiry && (
                <LinkIcon color={'info'} onClick={() => Submit(item.Id)}      />
              )}
            </Grid>
            <Grid item xs={1}  sx={{mr:"70px"}}>  
              <EditIcon color={'success'} onClick={() => clickEdit(item.Id)}  />
            </Grid>
            <Grid item xs={1} >
              <DeleteIcon color={'error'} onClick={() => Delete(item.Id)}   />
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}

export default TabulerCard1;


