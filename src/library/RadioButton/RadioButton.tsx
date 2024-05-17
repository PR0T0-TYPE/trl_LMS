
import {
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    Box
  } from '@mui/material';
  import React from 'react';
  
  const RadioButton = ({ Itemlist, ClickRadio, defaultValue = '0', Label="" }) => {
    return (
      <>
        <FormControl>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row'
            }}
          >
            <FormLabel id="demo-controlled-radio-buttons-group">
              {Label}
            </FormLabel>
  
            <RadioGroup
              value={defaultValue}
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={(e) => ClickRadio(e.target.value)}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  ml: '10px',
                  mt: '-10px'
                }}
              >
                {Itemlist.map((items, i) => {
                  return (
                    
                    <FormControlLabel
                      key={i}
                      value={items.Value}
                      control={<Radio size="small" />}
                      label={items.Name}
                    />
                  );
                })}
              </Box>
            </RadioGroup>
          </Box>
        </FormControl>
      </>
    );
  };
  
  export default RadioButton;
  
  