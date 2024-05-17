import { Button } from '@mui/material';

const ButtonField = ({ ClickItem, Label }) => {
    return (
        <Button
            variant="contained"
            onClick={ClickItem}
            sx={{ backgroundColor: '#009DD1' }}
        >
            {Label}
        </Button>
    );
};

export default ButtonField;
