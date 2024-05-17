import { TextField, Typography } from '@mui/material';
import { ErrorDetail } from 'src/Libraries/styled/ErrormessageStyled';
import { getCalendarFormat } from 'src/Libraries/Training/getCalendarFormat';

interface CalendarFieldProps {
    Item: string;
    ClickItem: (formattedDate: string) => void;
    Label: string;
    ErrorMessage?: string;
    BlurItem?: () => void;
}

const CalendarField: React.FC<CalendarFieldProps> = ({ Item, ClickItem, Label, ErrorMessage = '', BlurItem = undefined }) => {
    console.log(Item, "brt dt");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formattedDate = getCalendarFormat(new Date(e.target.value));
        ClickItem(formattedDate);
    };

    return (
        <>
            <Typography>{Label}</Typography>
            <TextField
                value={Item}
                type='date'
                onChange={handleChange}
                onBlur={BlurItem}
                sx={{
                    width: '200px', // Adjust the width as needed
                }}
            />
            <ErrorDetail>{ErrorMessage}</ErrorDetail>
        </>
    );
};

export default CalendarField;
