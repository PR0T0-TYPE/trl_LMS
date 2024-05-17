import { ToggleButton, ToggleButtonGroup, Typography, Grid } from '@mui/material'
import React from 'react'

function CardTogle({ ItemList, clickToggle, defaultvalue }) {

    return (
        <>
            <Grid container>
                {ItemList.map((item, i) => (
                    <div key={i}>
                        <Grid item xs={2}     >
                            <ToggleButtonGroup      
                                color="secondary"
                                value={defaultvalue}
                                exclusive
                                onChange={() => clickToggle(item.id)}
                                aria-label="Platform" >
                                <ToggleButton value={item.id}   sx={{mr:"15px"  }}>{item.Text}</ToggleButton>
                            </ToggleButtonGroup>
                        </Grid>
                        </div> 
                ))}
                </Grid>
                </>
    )
}

export default CardTogle