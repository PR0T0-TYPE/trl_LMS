import {
  Button,
  Card,
  Container,
  Grid,
  TextField,
  Typography
} from '@mui/material';
import {
  MainResetAddEmployeemsg,
  MainaddEmpDetails,
  MaingetTrainingList,
  MaingetDesignationDD,
  MainQualificationDD
} from 'src/requests/RegistrationForm/RequestSignUp';
import {
  IAddEmployeeDetailsBody,
  IgetTrainingModeListBody
} from 'src/Interface/RegistrationForm/ISignup';
import { RootState, useDispatch, useSelector } from 'src/store';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import CalendarField from 'src/library/Training/CalendarField';
import Dropdown from 'src/library/Training/DropDown';
import InputField from 'src/library/Training/InputField';
import { IsEmailValid, IsMobileNoValid } from '../Common/util';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //usestate
  const [empId, setEmpId] = useState('');
  const [QualificationId, setQualificationId] = useState('');
  const [designationId, setDesignationId] = useState('');
  const [TrainingId, setTrainingId] = useState('');

  const [Name, setName] = useState('');

  const [MobileNo, setMobileNo] = useState('');

  const [EmailId, setEmailId] = useState('');

  const [Password, setPassword] = useState('');
  const [Confirmpassword, setConfirmPassword] = useState('');

  const [Address, setAddress] = useState('');

  const [Qualification, setQualification] = useState('');
  // const [QualificationList] = useState([

  //        { Id:0 , Name: "", value:"0"},
  //        { Id:1 , Name: "B.Tech", value:"1"},
  //        { Id:2 , Name: "M.Tech", value:"2"},
  //        { Id:3 , Name: "PhD", value:"3"},
  //        { Id:4 , Name: "B.E", value:"4"},

  // ]);

  const [BirthDate, setBirthDate] = useState(' ');

  const [passOutYear, setPassOutyear] = useState('');

  const [Designation, setDesignation] = useState('');
  // const [Designationlist] = useState([  => use useselecyor variable within ItemList instead of using this hardcode usestate variable
  //     { Id:0 , Name: "", value:"0"},
  //     {Id:1 , Name:'Devloper', Value:"1"},
  //     {Id:2 , Name:'Tester',Value:"2"},
  //     {Id:3 , Name:'Manager',Value:"3"}
  // ]);

  const [TrainingMode, setTrainingMode] = useState('');
  // const [TraingModelist] = useState([
  //     { Id:0 , Name: "", value:"0"},
  //     {Id:1 , Name:'Online', Value:"1"},
  //     {Id:2 , Name:'Offline',Value:"2"},
  //     {Id:3 , Name:'Hybrid',Value:"3"}
  // ]);  1st we use this statevariable within item list for hardcode data bt now we have API so commet out this & pass US variable within itemlist of traingmde DD

  const [JoiningDate, setJoinDate] = useState('');

  const [Pincode, setPincode] = useState('');

  //function
  const clickName = (value) => {
    setName(value);
  };

  const clickEmailId = (value) => {
    setEmailId(value);
  };

  const clickPhoneNo = (value) => {

    if (!isNaN(+value) && value.length < 11) {
      setMobileNo(value);
    }
  };

  



  const clickPassword = (value) => {
    setPassword(value);
  };
  const clickConfirmPassword = (value) => {
    setConfirmPassword(value);
  };

  const clickAddress = (value) => {
    setAddress(value);
  };
  const clickQualification = (value) => {
    setQualification(value);
  };
  const clickBirthdate = (value) => {
    setBirthDate(value);
  };
  const clickYear = (value) => {
    setPassOutyear(value);
  };
  const ClickDesignation = (value) => {
    setDesignation(value);
  };
  const ClickTrainingMode = (value) => {
    setTrainingMode(value);
  };

  const clickJoinDate = (value) => {
    setJoinDate(value);
  };
  const ClickPincode = (value) => {
    setPincode(value);
  };

  //Blur Item fields Error msgs
  const BlurEmployeeName = () => {
    if (Name.trim() === '') {
      setNameErrorMessage('Employee name is required');
    } else {
      setNameErrorMessage('');
    }
  };

  const BlurPhoneNo = () => {
    setPhoneNoErrorMessage(IsMobileNoValid(MobileNo));
  };

 


  // const BlurEmailId = () => {
  //   setEmailIdErrorMessage(IsEmailValid(EmailId));
  // };
  const BlurEmailId = () => {
    let emailErrorMessage = '';
    if (EmailId === '') {
      emailErrorMessage = 'Email is required';
    } else {
      if (!IsEmailValid(EmailId)) {
        emailErrorMessage = 'Please enter a valid email';
      }
    }
    setEmailIdErrorMessage(emailErrorMessage);
  };
  

  const BlurPassword = () => {
    if (Password.trim() === '') {
      setPasswordErrorMessage('Password is required');
    } else {
      setPasswordErrorMessage('');
    }
  };
  const BlurConfirmPassword = () => {
    if (Confirmpassword === '') {
      setConfirmPasswordErrorMessage('Confirm Password is required');
    } else {
      setConfirmPasswordErrorMessage('');
    }
  };

  const BlurQualification = () => {
    if (Qualification === '0') {
      setQualificationErrorMessage('Please select a qualification');
    } else {
      setQualificationErrorMessage('');
    }
  };

  const BlurYearofPassout = () => {
    if (passOutYear.trim() === '') {
      setYearOfPassoutErrorMessage('Year of Passout is required');
    } else {
      setYearOfPassoutErrorMessage('');
    }
  };

  const BlurDesignation = () => {
    if (Designation.trim() === '') {
      setDesignationErrorMessage('Pincode is required');
    } else {
      setDesignationErrorMessage('');
    }
  };

  const BlurTrainingMode = () => {
    if (TrainingMode === '0') {
      setTrainingModeErrorMessage('Please select a training mode');
    } else {
      setTrainingModeErrorMessage('');
    }
  };

  const BlurJoiningDate = () => {
    if (JoiningDate.trim() === '') {
      setDateOfJoiningErrorMessage('Joining date is required');
    } else {
      setDateOfJoiningErrorMessage('');
    }
  };

  const [NameErrorMessage, setNameErrorMessage] = useState('');
  const [PhoneNoErrorMessage, setPhoneNoErrorMessage] = useState('');
  const [EmailIdErrorMessage, setEmailIdErrorMessage] = useState('');
  const [PasswordErrorMessage, setPasswordErrorMessage] = useState('');
  const [ConfirmPasswordErrorMessage, setConfirmPasswordErrorMessage] =
    useState('');
  const [QualificationErrorMessage, setQualificationErrorMessage] =
    useState('');
  const [YearOfPassoutErrorMessage, setYearOfPassoutErrorMessage] =
    useState('');
  const [DesignationErrorMessage, setDesignationErrorMessage] = useState('');
  const [TrainingModeErrorMessage, setTrainingModeErrorMessage] = useState('');
  const [DateOfJoiningErrorMessage, setDateOfJoiningErrorMessage] =
    useState('');

  const IsFormValid = () => {
    let isValid = true;

    //validate name
    if (Name === '') {
      setNameErrorMessage('Name Field is mandatory');
      isValid = false;
    } else {
      setNameErrorMessage(''); // Clear error message if name is provided
    }

    //validate MobileNo
    if (MobileNo === '') {
      setPhoneNoErrorMessage(' MobileNo Field is Mandatory');
      isValid = false;
    } else 
    if (PhoneNoErrorMessage!='')
    {
    setPhoneNoErrorMessage(' Please enter a valid Mobile No');
    isValid=false
    }
    
    else {
      setPhoneNoErrorMessage(''); //Clear Error Message If Phone No is Provided
    }

    // validate Email
    if (EmailId === '') {
      setEmailIdErrorMessage('Email Field is mandatory');
      isValid = false;
    } else if (!IsEmailValid(EmailId)) { // Check for valid email format
      setEmailIdErrorMessage('Please enter a valid email');
      isValid = false;
    } else {
      setEmailIdErrorMessage(''); // Clear error message if email is provided and valid
    }
   
  

    //validate Password
    if (Password === '') {
      setPasswordErrorMessage('Password Field is mandatory');
      isValid = false;
    } else if (Password.length < 6) {
      setPasswordErrorMessage('Password must be at least 6 characters long');
      isValid = false;
    } else {
      setPasswordErrorMessage('');
    }

    // Validate Confirm Password
    if (Confirmpassword === '') {
      setConfirmPasswordErrorMessage('Confirm Password Field is mandatory');
      isValid = false;
    } else if (Confirmpassword !== Password) {
      setConfirmPasswordErrorMessage(
        'Confirm Password is not matching  with Entered Password'
      );
      isValid = false;
    } else {
      setConfirmPasswordErrorMessage('');
    }

    // Validate Qualification
    if (Qualification === '') {
      setQualificationErrorMessage('Qualification is required');
      isValid = false;
    } else {
      setQualificationErrorMessage('');
    }

    //  Validate Year of Passout
    if (passOutYear === '') {
      setYearOfPassoutErrorMessage('Passout Year is mandatory');
      isValid = false;
    } else {
      setYearOfPassoutErrorMessage('');
    }

    //  Validate Designation
    if (Designation === '') {
      setDesignationErrorMessage('Designation is required');
      isValid = false;
    } else {
      setDesignationErrorMessage('');
    }

    //  Validate Training Mode
    if (TrainingMode === '') {
      setTrainingModeErrorMessage('Training Mode is required');
      isValid = false;
    } else {
      setTrainingModeErrorMessage('');
    }

    //  Validate Date of Joining
    if (JoiningDate === '') {
      setDateOfJoiningErrorMessage('Date of Joining is required');
      isValid = false;
    } else {
      setDateOfJoiningErrorMessage('');
    }

    return isValid;
  };

  const clickSignUp = () => {
    if (IsFormValid()) {
      const AddEmpDetailsBody: IAddEmployeeDetailsBody = {
        //EmployeeID: Number(empId),
        // EmployeeName: Name,
        // MobileNumber: MobileNo,
        // Email: EmailId,
        // Createpassword: Password,
        // Confirmpassword: Confirmpassword,
        // CurrentAddress: Address,
        // QualificationID:Number(QualificationId),
        // //Qualification: '',
        // DOB: BirthDate,
        // Dateofjoining: JoiningDate,
        // Pincode: Pincode,
        // DesignationID: Number(designationId),
        // //DesignationRole: '',
        // Year_of_Passout: passOutYear,
        // TrainingId: Number(TrainingId),
        //Trainingmode: ''

        EmployeeID: Number(empId),
        EmployeeName:Name,
        DOB: BirthDate,
        MobileNumber: MobileNo,
        Email: EmailId,
        Createpassword: Password,
        Confirmpassword: Confirmpassword,
        CurrentAddress: Address,
        QualificationID:Qualification,
        Year_of_Passout: passOutYear,
        TrainingId: TrainingMode,
        Dateofjoining: JoiningDate,
        Pincode:Pincode,
        DesignationId: Designation,
      };
      dispatch(MainaddEmpDetails(AddEmpDetailsBody));
    }
  };

  const resetForm = () => {
    setName('');
    setMobileNo('');
    setEmailId('');
    setPassword('');
    setConfirmPassword('');
    setAddress('');
    setQualification('');
    setBirthDate('');
    setPassOutyear('');
    setDesignation('');
    setTrainingMode('');
    setJoinDate('');
    setPincode('');
  };

  const USaddEmpDetailsmsg = useSelector(
    (state: RootState) => state.SignUp.ISaddEmpmsg
  );
  console.log('addEmp Details msg = ', USaddEmpDetailsmsg);

  useEffect(() => {
    console.log('USaddEmpDetailsmsg value:', USaddEmpDetailsmsg); // Debugging log
    if (USaddEmpDetailsmsg !== '') {
      toast.success('Signup process completed successfully.');
      dispatch(MainResetAddEmployeemsg()); // Clear API response
      resetForm();
      navigate('/Login'); // 3. Navigate to login page after success
    }
  }, [USaddEmpDetailsmsg, navigate]); // Added navigate to dependency array

  //Back Button
  const clickback = () => {
    navigate('/Login');
  };

  //2.training mode DD API

  //a.2. UseSelector of Training Mode =>to put data from store to page check in Network asd well as console
  const UsTrainingModeList = useSelector(
    (state: RootState) => state.SignUp.ISgetTrainingList
  );
  console.log('traning mode List = ', UsTrainingModeList);

  //b.2 Useselector of Designation DD
  const USDesignationDD = useSelector(
    (state: RootState) => state.SignUp.ISgetDesignationDD
  );
  console.log('Designation DD =', USDesignationDD);

  //c.2 UseSelector for Qualification DD
  const USQualificationDD = useSelector(
    (state: RootState) => state.SignUp.ISgetQualificationDD
  );
  console.log('Qualification DD =', USQualificationDD);

  //a.1, b1, c1 on pageLoad call data from DB to store through API  check on Network
  useEffect(() => {
    dispatch(MaingetTrainingList());
    dispatch(MaingetDesignationDD());
    dispatch(MainQualificationDD());
  }, []);

  //c. send UseSelector variable(MaingetTrainingList) within ItemList of trainngmode DD under return & comment to taken hardcode state variable of gettarinig mode

  return (
    <Container style={{ minHeight: '100vh' }}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ height: '100%' }}
      >
        <Card
          className="card"
          style={{
            border: '1px solid #ccc',
            borderRadius: '10px',
            padding: '20px',
            maxWidth: '500px'
          }}
        >
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            style={{ fontWeight: 'bold', fontSize: '1.8rem' }}
          >
            SignUp
          </Typography>
          
          <Grid container spacing={2}>
            {/ Form fields /}
            <Grid item xs={12} md={6}>
              <Typography>Name:</Typography>

              <TextField
                value={Name}
                onChange={(e) => {
                  clickName(e.target.value);
                }}
                onBlur={BlurEmployeeName}
                error={NameErrorMessage !== ''}
                helperText={NameErrorMessage}
                type="text"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography>Email:</Typography>
              <TextField
                value={EmailId}
                onChange={(e) => {
                  clickEmailId(e.target.value);
                }}
                onBlur={BlurEmailId}
                error={EmailIdErrorMessage !== ''}
                helperText={EmailIdErrorMessage}
                type="text"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography>Address:</Typography> 
              <InputField
                Item={Address}
                ClickItem={clickAddress}
                Label={'Address:'}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography>Pincode:</Typography>
              <InputField
                Item={Pincode}
                ClickItem={ClickPincode}
                Label={undefined}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography>Mobile No:</Typography>

              <TextField
                value={MobileNo}
                type="text"
                onChange={(e) => {
                  clickPhoneNo(e.target.value);
                }}
                onBlur={BlurPhoneNo}
                error={PhoneNoErrorMessage !== ''}
                helperText={PhoneNoErrorMessage}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography>Date Of Birth:</Typography>
              <CalendarField
                Item={BirthDate}
                ClickItem={clickBirthdate}
                Label={undefined}
              />
            </Grid>

            {/ Second Section /}

            <Grid item xs={12} md={6}>
              <Typography>Create Password:</Typography>

              <TextField
                value={Password}
                onChange={(e) => {
                  clickPassword(e.target.value);
                }}
                onBlur={BlurPassword}
                error={PasswordErrorMessage !== ''}
                helperText={PasswordErrorMessage}
                type="text"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography>Confirm Password:</Typography>

              <TextField
                value={Confirmpassword}
                onChange={(e) => {
                  clickConfirmPassword(e.target.value);
                }}
                onBlur={BlurConfirmPassword}
                error={ConfirmPasswordErrorMessage !== ''}
                helperText={ConfirmPasswordErrorMessage}
                type="text"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography>Year Of Passout:</Typography>

              <TextField
                value={passOutYear}
                type="date"
                onChange={(e) => {
                  clickYear(e.target.value);
                }}
                focused
                onBlur={BlurYearofPassout}
                error={YearOfPassoutErrorMessage !== ''}
                helperText={YearOfPassoutErrorMessage}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography>Date Of Joining:</Typography>

              <TextField
                value={JoiningDate}
                type="date"
                onChange={(e) => {
                  clickJoinDate(e.target.value);
                }}
                focused
                onBlur={BlurJoiningDate}
                error={DateOfJoiningErrorMessage !== ''}
                helperText={DateOfJoiningErrorMessage}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography>Qualification:</Typography>
              <Dropdown
                ItemList={USQualificationDD}
                DefaultValue={Qualification}
                ClickItem={clickQualification}
                ErrorMessage={QualificationErrorMessage}
                Label={undefined}
                BlurItem={BlurQualification}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography>Designation/Role:</Typography>

              <Dropdown
                ItemList={USDesignationDD}
                DefaultValue={Designation}
                  ClickItem={ClickDesignation}
                ErrorMessage={DesignationErrorMessage}
                Label={undefined}
                BlurItem={BlurDesignation}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography>Training Mode:</Typography>
              <Dropdown
                ItemList={UsTrainingModeList}
                DefaultValue={TrainingMode}
                ClickItem={ClickTrainingMode}
                ErrorMessage={TrainingModeErrorMessage}
                Label={undefined}
                BlurItem={BlurTrainingMode}
              />
            </Grid>
          </Grid>
          {/ SignUp & Back Buttons /}
          <br></br>
          <Grid item xs={12}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <Button
                  variant="text"
                  onClick={clickSignUp}
                  style={{
                    fontWeight: 'bold',
                    backgroundColor: 'green',
                    color: 'white'
                  }}
                >
                  Sign Up
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="text"
                  onClick={clickback}
                  style={{
                    fontWeight: 'bold',
                    backgroundColor: 'green',
                    color: 'white'
                  }}
                >
                  Back
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Container>
  );
};

export default SignUp;
