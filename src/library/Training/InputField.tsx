import { TextField, Typography } from '@mui/material'
import { ErrorDetail } from 'src/Libraries/styled/ErrormessageStyled'


const InputField = ({ Item, Label, ErrorMessage = ''
    , ClickItem, BlurItem = undefined, KeyPressItem = undefined, type="" }) => {

    return (<>
        <Typography>{Label}</Typography>
        <TextField value={Item}
            onChange={(e) => { ClickItem(e.target.value) }}
            onBlur={BlurItem} />
        <ErrorDetail>{ErrorMessage}</ErrorDetail>
    </>
    )
}

export default InputField