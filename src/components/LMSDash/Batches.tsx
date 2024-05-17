import AddTwoTone from '@mui/icons-material/AddTwoTone';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { Card, CardContent, Grid, IconButton, Tooltip } from "@mui/material";
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { IAddBatchBody } from 'src/Interface/ILMSUI/GetLMSInterface';
import ButtonField from 'src/library/Training/ButtonField';
import CalendarField from 'src/library/Training/CalendarField';
import InputField from 'src/library/Training/InputField';
import { MresetAddBatchMessage, MAddBatch } from 'src/requests/LMSUI/ReqIGetEmployee';
import { RootState, useDispatch, useSelector } from 'src/store';


function SearchableDropdown() {
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBatch, setSelectedBatch] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [batches, setBatches] = useState([]);
  const [academicYears, setAcademicYears] = useState([])
  const [open, setOpen] = useState(false);
  const [batchName, setBatchName] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [batchNameError, setBatchNameError] = useState('');
  const [dateError, setDateError] = useState('');
  const [selectbatchDate, setSelectBatchDate] = useState('')

  const handleClickOpen = () => {
    setOpen(true);
  }
  const GetAddStudentDetailsBody: IAddBatchBody =
  {

    BatchName: batchName,
    StartDateNewBatch: selectbatchDate
  }
  const UsAddBatch = useSelector((state: RootState) => state.EmployeeList.IsAddBatch);
  useEffect(() => {
    if (UsAddBatch != "") {
      toast.success('Batch Details Added Successfully')
      dispatch(MresetAddBatchMessage());
    }
    console.log("AddEmployee", UsAddBatch)
  }, [UsAddBatch]
  )
  useEffect(() => {
    dispatch(MAddBatch(GetAddStudentDetailsBody));
  }, []);

  const handleClose = () => {
    clearFormFields();
    setOpen(false);
  };

  const clearFormFields = () => {
    setBatchName('');
    setSelectedDate(null);
    setBatchNameError('');
    setDateError('');
  };

  const clickBatchName = (value: string) => {
    setBatchName(value);
  };

  const clickDate = (value: string) => {
    setSelectedDate(value);
  };

  const handleSubmit = () => {
    // Reset errors
    setBatchNameError('');
    setDateError('');

    // Perform validation
    let isValid = true;
    if (batchName.trim() === '') {
      setBatchNameError('Batch Name is mandatory');
      isValid = false;
    }
    if (!selectedDate) {
      setDateError('Date is mandatory');
      isValid = false;
    }

    if (isValid) {
      // Handle form submission
      setOpen(false);
    }
  };

  const handleBatchSelect = (value: string) => {
    setSelectedBatch(value);
  }

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleYearSelect = (value: string) => {
    setSelectedYear(value);
  }

  const filteredBatches = batches.filter(batch =>
    batch.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box
      sx={{
        position: 'fixed', // Fix the position to the right side of the window
        top: 0, // Align to the top of the window
        right: 0, // Align to the right of the window
        width: '300px', // Set the width of the box
        mt: 4, // Add margin from the top
        mr: 4, // Add margin from the right
      }}
    >
      <Grid container direction="column" spacing={3}>
        <Grid item>
          <Tooltip title={'Add Batch'} placement="right" sx={{ marginLeft: '8px' }}>
            <IconButton
              sx={{
                color: 'white',

                backgroundColor: (theme) => theme.palette.primary.main,
                '&:hover': {
                  backgroundColor: (theme) => theme.palette.primary.dark
                }
              }}
              onClick={handleClickOpen}
            >
              <AddTwoTone />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  {/* <input
                    type="text"
                    placeholder="Search for a batch..."
                    value={searchTerm}
                    onChange={handleSearch}
                    style={{ marginRight: '8px' }}
                  /> */}
                </Box>
                <select value={selectedBatch} onChange={(e) => handleBatchSelect(e.target.value)} style={{ marginBottom: '8px' }}>
                  <option value="">Select Batch</option>
                  {filteredBatches.map(batch => (
                    <option key={batch.id} value={batch.id}>
                      {batch.name}
                    </option>
                  ))}
                </select>
                <select value={selectedYear} onChange={(e) => handleYearSelect(e.target.value)}>
                  <option value="">Select Academic Year</option>
                  {academicYears.map(year => (
                    <option key={year.id} value={year.id}>
                      {year.name}
                    </option>
                  ))}
                </select>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add New Batch</DialogTitle>
            <DialogContent>
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
              >
                <Grid item xs={9}>
                  <InputField Item={batchName} Label={'Batch Name'} ClickItem={clickBatchName} ErrorMessage={batchNameError} />
                </Grid>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Grid item xs={6}>
                    <CalendarField Item={selectedDate} Label={' Date'} ClickItem={clickDate} ErrorMessage={dateError} />
                  </Grid>
                </LocalizationProvider>
              </Box>
            </DialogContent>
            <DialogActions>
              <Grid item xs={6}>
                <ButtonField Label={'Save'} ClickItem={handleSubmit} />
              </Grid>
              <Grid item xs={6}>
                <ButtonField Label={'Back'} ClickItem={handleClose} />
              </Grid>
            </DialogActions>
          </Dialog>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SearchableDropdown;

