import { TextField, Typography } from "@mui/material"

const TimeField = ({ Item, ClickItem, Label }) => {
    return (
        <div>
            <Typography>{Label}</Typography>
            <TextField type="time" value={Item} onChange={(e) => { ClickItem(e.target.value) }} />
        </div>
    )
}

export default TimeField
