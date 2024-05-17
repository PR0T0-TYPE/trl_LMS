import { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import ButtonField from 'src/library/Training/ButtonField';
import CalendarField from 'src/library/Training/CalendarField';
import Dropdown from 'src/library/Training/DropDown';
import InputField from 'src/library/Training/InputField';
import PageHeader from 'src/library/heading/pageHeader';
import { IsEmailValid, IsMobileNoValid } from '../Common/util';
import { useNavigate } from 'react-router';
import {useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { MEditEmployeeDetails, MGetEmployeeDetails, MresetEditEmployeeDetails } from 'src/requests/LMSUI/ReqIGetEmployee';
import { IEditEmployeeDetailsBody, IGetEmployeeDetailsBody } from 'src/Interface/ILMSUI/GetLMSInterface';
import { toast } from 'react-toastify';
import { getCalendarFormat } from 'src/Libraries/Training/getCalendarFormat';

const Profile = () => {
  const navigate=useNavigate()
  const dispatch = useDispatch(); 
  const { Id } = useParams();
  console.log(Id,"IDDDDDDDDDDD");
  const [EmployeeName, SetEmployeeName] = useState('');
  const [BirthDate, setBirthDate] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [EmailID, setEmailId] = useState('');
  const [Designation, setDesignation] = useState('0');
  const [Password, setPassword] = useState('');
  const [Passwords, setConfirmtPassword] = useState('');

  const [Address, setAddress] = useState('');
  const [Qualification, setQualification] = useState('');
  const [YearofPassout, setYearofPassout] = useState('');
  const [TrainingMode, setTrainingMode] = useState('');
  const [JoiningDate, setJoiningDate] = useState('');
  const [Pincode, setPincode] = useState('');
  const [EmpId,setEmpId]=useState('');
  const [EmailIDErrorMessage,setEmailIdErrorMessage]=useState('');
  const [PhoneNoErrorMessage, setPhoneNoErrorMessage]=useState('');
  const [EmployeeErrorMessage, setEmployeeErrorMessage] = useState('');
  const [PasswordErrorMessage, setPasswordErrorMessage] = useState('');
  const [ConfirmPasswordErrorMessage, setConfirmPasswordErrorMessage] = useState('');

  const [AddressErrorMessage, setAddressErrorMessage] = useState('');
  const [QualificationErrorMessage, setQualificationErrorMessage] = useState('');
  const [YearofPassoutErrorMessage, setYearofPassoutErrorMessage] = useState('');
  const [TrainingModeErrorMessage, setTrainingModeErrorMessage] = useState('');
  const [JoiningDateErrorMessage, setJoiningDateErrorMessage] = useState('');
  const [PincodeErrorMessage, setPincodeErrorMessage] = useState('');
  const [DesignationErrorMessage, setDesignationErrorMessage] = useState('');
  const [ProfileId,setProfileId]=useState('')


  // const ClickEmployee =(value)=>
  //   {
  //     setProfileId(value)
  //   }
  const BlurEmailId = () => {
    setEmailIdErrorMessage(IsEmailValid(EmailID));
  };

  const BlurPhoneNo = () => {
    setPhoneNoErrorMessage(IsMobileNoValid(phoneNo));
  };

  const [DesignationList, setDesignationList] = useState([
    { Id: 0, Name: 'Select Designation', Value: "0" },
      { Id: 1, Name: 'Developer', Value: "1" },
      { Id: 2, Name: 'Quality Assurance', Value: "2" }
  ]);

  const [QualificationList,setQualificationList] = useState([

    { Id:1 , Name: 'B.Tech', value:'1'},
    { Id:2 , Name: 'M.Tech', value:'2'},
    { Id:3 , Name: 'PhD', value:'3'},
    { Id:4 , Name: 'B.E', value:'4'},

]);
const [TrainingList,setTrainingList] =useState([  
    {Id:0 , Name: 'Select Training Mode', value:'0'},
    {Id:1 , Name:'Online', Value:'1'},
    {Id:2 , Name:'Offline',Value:'2'},
    {Id:3 , Name:'Hybrid',Value:'3'}
  ])



  const clickEmployeeName = (value: string) => {
    SetEmployeeName(value);
  };

  const clickBirthDate = (value: string) => {
    setBirthDate(value);
  };

  const clickEmailId = (value: string) => {
    setEmailId(value);
  };

  const clickPhoneNo = (value: string) => {
    if (!isNaN(+value) && value.length < 11) setPhoneNo(value);
  };

  const clickDesignation = (value: string) => {
    setDesignation(value);
  };
  const clickPassword = (value: string) => {
    setPassword(value);
  };
  const clickconfirmPassword = (value: string) => {
    setConfirmtPassword(value);
  };
  const clickAddress = (value: string) => {
    setAddress(value);
  };
  const clickQualification = (value: string) => {
    setQualification(value);
  };
  const clickYOP = (value: string) => {
    setYearofPassout(value);
  };
  const clickTrainingMode = (value: string) => {
    setTrainingMode(value);
  };
  const clickJoiningDate = (value: string) => {
    setJoiningDate(value);
  };
  const clickPincode = (value: string) => {
    setPincode(value);
  };

  const clickSubmit = () => {
    if (
      EmployeeName.trim() === '' ||
      BirthDate.trim() === '' ||
      phoneNo.trim() === '' ||
      EmailID.trim() === '' ||
      Password.trim() === '' ||
      Passwords.trim() === '' ||
      Address.trim() === '' ||
      Qualification === '0' ||
      YearofPassout.trim() === '' ||
      TrainingMode === '0' ||
      JoiningDate.trim() === '' ||
      Pincode.trim() === '' ||
      Designation === '0'
    ) 
    {
      BlurEmployeeName();
      BlurPassword();
      BlurConfirmPassword();
      BlurAddress();
      BlurQualification();
      BlurYearofPassout();
      BlurTrainingMode();
      BlurJoiningDate();
      BlurPincode();
      BlurDesignation();
      return; 
    }

      const editedEmployeeDetails: IEditEmployeeDetailsBody = {
        EmployeeID: Number(Id),
        EmployeeName:EmployeeName,
        DOB: BirthDate,
        MobileNumber: phoneNo,
        Email: EmailID,
        Createpassword: Password,
        Confirmpassword: Passwords,
        CurrentAddress: Address,
        QualificationID:Qualification,
        Year_of_Passout: YearofPassout,
        TrainingId: TrainingMode,
        Dateofjoining: JoiningDate,
        Pincode:Pincode,
        DesignationId: Designation,
      };
      dispatch(MEditEmployeeDetails(editedEmployeeDetails));

      toast.success('Employee Details Edited Successfully');
    // }
  };
  const clickBack = () => 
  {
    navigate ('../LoginPage/')
  };

  const BlurEmployeeName = () => {
    if (EmployeeName.trim() === '') {
      setEmployeeErrorMessage('Employee name is required');
    } else {
      setEmployeeErrorMessage('');
    }
  };
  
  const BlurPassword = () => {
    if (Password.trim() === '') {
      setPasswordErrorMessage('Password is required');
    } else {
      setPasswordErrorMessage('');
    }
  };
  const BlurConfirmPassword = () => {
    if (Password.trim() === '') {
      setConfirmPasswordErrorMessage('Password is required');
    } else {
      setConfirmPasswordErrorMessage('');
    }
  };
  
  const BlurAddress = () => {
    if (Address.trim() === '') {
      setAddressErrorMessage('Address is required');
    } else {
      setAddressErrorMessage('');
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
    if (YearofPassout.trim() === '') {
      setYearofPassoutErrorMessage('Year of Passout is required');
    } else {
      setYearofPassoutErrorMessage('');
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
      setJoiningDateErrorMessage('Joining date is required');
    } else {
      setJoiningDateErrorMessage('');
    }
  };
  
  const BlurPincode = () => {
    if (Pincode.trim() === '') {
      setPincodeErrorMessage('Pincode is required');
    } else {
      setPincodeErrorMessage('');
    }
  };
  const BlurDesignation = () => {
    if (Pincode.trim() === '') {
      setDesignationErrorMessage('Pincode is required');
    } else {
      setDesignationErrorMessage('');
    }
  };
  
  const USEmployeeDetails = useSelector((state:RootState) => state.EmployeeList.IsGetEmployeeDetails);

  useEffect(() => 
  {
    if (Id != undefined) {
     const GetEmployeeDetailBody: IGetEmployeeDetailsBody = {
      EmployeeID: Number(Id)
     }
     dispatch(MGetEmployeeDetails(GetEmployeeDetailBody))
     console.log("USIsEmployeeDetails",USEmployeeDetails);
     
    }
  }, [Id])
    const setEmployeeDetails = (EmployeeDetails) => {
    if (EmployeeDetails) {
        SetEmployeeName(EmployeeDetails.EmployeeName);
        setBirthDate(getCalendarFormat(new Date(EmployeeDetails.DOB)));
        setPhoneNo(EmployeeDetails.MobileNumber);
        setEmailId(EmployeeDetails.Email);
        setDesignation(EmployeeDetails.DesignationId);
        setPassword(EmployeeDetails.Createpassword);
        setConfirmtPassword(EmployeeDetails.Confirmpassword);
        setAddress(EmployeeDetails.CurrentAddress);
        setQualification(EmployeeDetails.QualificationID);
        setYearofPassout(getCalendarFormat(new Date(EmployeeDetails.Year_of_Passout)));
        setTrainingMode(EmployeeDetails.TrainingId);
        setJoiningDate(getCalendarFormat(new Date(EmployeeDetails.Dateofjoining)));
        setPincode(EmployeeDetails.Pincode);
    }
};

  const UsEmployeeDetailsMsg =useSelector((state:RootState)=>state.EmployeeList.IsGetEmployeeDetails);
 
  useEffect(() => {
    if (UsEmployeeDetailsMsg != null) {
      setEmployeeDetails(UsEmployeeDetailsMsg);
    }
  }, [UsEmployeeDetailsMsg]);
  
  const USEditEmployeeDetailsSuccessMessage = useSelector((state: RootState) => state.EmployeeList.IsEditEmployeeDetails);
  useEffect(() => {
    if (USEditEmployeeDetailsSuccessMessage) {
      // toast.success('Employee Details Edited Successfully');
      dispatch(MresetEditEmployeeDetails());
    }
  }, [USEditEmployeeDetailsSuccessMessage]);

  return (
<div style={{ backgroundColor: '#f0f2f5', minHeight: '100vh', padding: '20px' }}>
     <PageHeader heading={'Profile page'} />
    <Container sx={{ border: '1px solid #ccc', borderRadius: '10px', padding: '20px', transition: 'border-color 0.3s ease', '&:hover': { borderColor: '#999' } }}>

      <Grid item xs={12} justifyContent="center" marginLeft="100px" marginRight="100px">
        <Grid alignItems="center" justifyContent="center"
        container spacing={2}>

          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <InputField Item={EmployeeName} Label={'Employee Name'} ClickItem={clickEmployeeName} BlurItem={BlurEmployeeName} ErrorMessage={EmployeeErrorMessage}/>
            </Grid>
            <Grid item xs={12}md={6}>
              <InputField Item={phoneNo} Label={'PhoneNo'} ClickItem={clickPhoneNo} BlurItem={BlurPhoneNo} ErrorMessage={PhoneNoErrorMessage}/>
            </Grid>
            <Grid item xs={12}md={6}>
              <InputField Item={Password} Label={'Create password'}ClickItem={clickPassword} BlurItem={BlurPassword}ErrorMessage={PasswordErrorMessage} />
            </Grid>
            <Grid item xs={12}md={6}>
              <InputField Item={Passwords} Label={'Confirm password'}ClickItem={clickconfirmPassword} BlurItem={BlurConfirmPassword}ErrorMessage={ConfirmPasswordErrorMessage}/>
            </Grid>
            <Grid item xs={12}md={6}>
              <InputField Item={EmailID} Label={'EmailID'} ClickItem={clickEmailId} BlurItem={BlurEmailId} ErrorMessage={EmailIDErrorMessage}/>
            </Grid>
            <Grid item xs={12}md={3}>
              <InputField Item={Address} Label={'Address'}ClickItem={clickAddress} BlurItem={BlurAddress}ErrorMessage={AddressErrorMessage}/>
            </Grid>
            <Grid item xs={12}md={3}>
              <InputField Item={Pincode} Label={'Pincode'}ClickItem={clickPincode} BlurItem={BlurPincode} ErrorMessage={PincodeErrorMessage}/>
            </Grid>
            <Grid item xs={12}md={6}>
            <Dropdown ItemList={TrainingList} Label={'Training Mode'} DefaultValue={TrainingMode} ClickItem={clickTrainingMode} BlurItem={BlurTrainingMode} ErrorMessage={TrainingModeErrorMessage}/>
            </Grid>
            <Grid item xs={12}md={6}>
              <Dropdown ItemList={QualificationList}Label={'Qualification'} DefaultValue={Qualification}ClickItem={clickQualification} BlurItem={BlurQualification}ErrorMessage={QualificationErrorMessage}/>
            </Grid>
            <Grid item xs={12}md={3}>
              <Dropdown ItemList={DesignationList} Label={'Designation /Role'} DefaultValue={Designation} ClickItem={clickDesignation}BlurItem={BlurDesignation} ErrorMessage={DesignationErrorMessage}/>
            </Grid>
            <Grid item xs={12}md={3}>
              <CalendarField Item={YearofPassout} Label={'Year of Passout'} ClickItem={clickYOP} BlurItem={BlurYearofPassout}ErrorMessage={YearofPassoutErrorMessage}/>
            </Grid>
            <Grid item xs={12}md={3}>
              <CalendarField Item={BirthDate} Label={'Date of Birth'} ClickItem={clickBirthDate} />
            </Grid>
            <Grid item xs={12}md={3}>
            <CalendarField Item={JoiningDate} Label={'Date of Joining'} ClickItem={clickJoiningDate} BlurItem={BlurJoiningDate} ErrorMessage={JoiningDateErrorMessage}/>
            </Grid>



          </Grid>
          <Grid item xs={12}md={4} justifyContent="center" maxWidth="250px" sx={{ paddingLeft: '50px' }}>
              <ButtonField Label={'Save'} ClickItem={clickSubmit} />
            </Grid>
        </Grid>
        </Grid>
      </Container>
    </div>
  );

};

export default Profile;


