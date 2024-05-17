import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from 'src/store';
import { TextField, Button, Container, Card, Grid, Typography } from '@mui/material';
import { toast } from 'react-toastify';
import { IsEmailValid, IsMobileNoValid } from "src/components/Common/util"
import ErrorMessageForm from 'src/library/ErrorMessage/ErrorMessageForm';
import PageHeader from 'src/library/heading/pageHeader';
import { IAddStudentDetailsBody, IGetStudentDetailsBody, IGetClassDivisionListBody, IGetStudentDetailsResult } from 'src/Interface/AddStudentDetails/IAddStudentDetails';
import { AddStudentDetailsCDA, DeleteStudent, resetSubmitStudents, GetStudentDetails, GetClassDivision } from 'src/requests/AddStudentDetails/RequestAddStudentDetails';
import SelectedCard from 'src/library/Card/SelectedCard';
import { getClassNameList } from 'src/requests/Admin/RequestAddPhoto'
import { useParams } from 'react-router-dom';
import { GetClassNameList } from 'src/requests/AddStudentDetails/RequestAddStudentDetails';
import RadioButton from 'src/library/RadioButton/RadioButton';
import DropDown from 'src/library/DropDown/DropDown';
import { useNavigate } from 'react-router';
const EnquiryStudentDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { OperationType, Id } = useParams();
  const [ClassId, setClassId] = useState('')
  const [StudentName, setStudentName] = useState('');
  const [StudentNameerror, setStudentNameerror] = useState('');
  const [BirthDate, setBirthDate] = useState('');
  const [BirthDateerror, setBirthDateerror] = useState('');
  const [Age, setAge] = useState('');
  const [Month, setMonth] = useState('');
  const [Ageerror, setAgeerror] = useState('');
  const [FatherName, setFatherName] = useState('');
  const [FatherNameerror, setFatherNameerror] = useState('');
  const [PhoneNo, setPhoneNo] = useState('');
  const [PhoneNoerror, setPhoneNoerror] = useState('');
  const [MotherName, setMotherName] = useState('');
  const [MotherNameerror, setMotherNameerror] = useState('');
  const [PhoneNo2, setPhoneNo2] = useState('');
  const [PhoneNoerror2, setPhoneNoerror2] = useState('');
  const [SocietyName, setSocietyName] = useState('');
  const [SocietyNameerror, setSocietyNameerror] = useState('');
  const [StudentAddress, setStudentAddress] = useState('');
  const [StudentAddresserror, setStudentAddresserror] = useState('');
  const [EmailId, setEmailId] = useState('');
  const [Emailiderror, setEmailiderror] = useState('');
  const [schoolListerror, setSchoolListError] = useState('')
  const [ItemList, setItemList] = useState([])
  const [DivisionList, setDivisionList] = useState([])
  // console.log(OperationType===undefined?0:parseInt(OperationType),"Id")
  const [DivisionName, setDivisionName] = useState('');
  const [AdmissionDate, setAdmissionDate] = useState(null);
  const [AdmissionDateerror, setAdmissionDaterror] = useState(null);
  const [ClassName, setClassName] = useState('');
  const [StudentId, setStudentId] = useState(0);
  const [EnquiryDate, setEnquiryDate] = useState(null);
  const [EnquiryDateerror, setEnquiryDateerror] = useState(null);
  const [ClassDivisionId, setClassDivisionId] = useState();
  const [SMS, setSMS] = useState();
  const [UserId, setUserId] = useState();
  //const [classId, setClassId] = useState('');
  const HeaderText = ["Enquiry Form",
    "Edit Enquiry",
    "Admission Conversion",
    "Edit Student Details"]

  const Data = [
    // { value: "0", Name: "" },
    { Value: "1", Name: "PlayGroup" },
    { Value: "2", Name: "Nursery" },
    { Value: "3", Name: "Junior K.G." },
    { Value: "4", Name: "Senior K.G." }
  ]

  const StudentDetails = useSelector((state: RootState) => state.AddStudentDetail.StudentDetails);
  const ClassList: any = useSelector((state: RootState) => state.AddStudentDetail.ClassNameList);
  const ClassDivisionList: any = useSelector((state: RootState) => state.AddStudentDetail.DivisionNameList);
  const StudentDetail = useSelector((state: RootState) => state.AddStudentDetail.StudentDetail);
  console.log("StudentDetail", StudentDetail)
  console.log(ClassList, "GetClass")

  useEffect(() => {
    if ((OperationType === undefined ? 0 : parseInt(OperationType)) == 0 ||
      (OperationType === undefined ? 0 : parseInt(OperationType)) == 1) {
      dispatch(GetClassNameList())
      console.log("OperationType", OperationType, "enquiry")
    }
    else {
      console.log(OperationType, "ADmission")
      const GetClassDivisionListBody: IGetClassDivisionListBody =
      {
        ClassId: parseInt(ClassId)
      }

      dispatch(GetClassDivision(GetClassDivisionListBody))
    }

   if (parseInt(Id) !== 0) {

      const GetStudentDetailsBody: IGetStudentDetailsBody =
      {
        Id: parseInt(Id)
      }

      dispatch(GetStudentDetails(GetStudentDetailsBody))
    };
  }, []);

  useEffect(() => {
    if (StudentDetail !== null) {
      console.log(StudentDetail.EnquiryDate, "GetStudentDetail",StudentDetail.BirthDate)
      setClassId(StudentDetail.ClassId)
      setStudentId(StudentDetail.Id)
      setStudentName(StudentDetail.StudentName)
      setBirthDate(StudentDetail.BirthDate)
      setAge(StudentDetail.Age)
      //setMonth(StudentDetail.Month)
      setFatherName(StudentDetail.FatherName)
      setPhoneNo(StudentDetail.PhoneNo)
      setMotherName(StudentDetail.MotherName)
      setPhoneNo2(StudentDetail.PhoneNo2)
      setClassName(StudentDetail.ClassName)
      setDivisionName(StudentDetail.DivisionName)
      setAdmissionDate(StudentDetail.AdmissionDate)
      setSocietyName(StudentDetail.SocietyName)
      setStudentAddress(StudentDetail.StudentAddress)
      setEmailId(StudentDetail.EmailId)
      setEnquiryDate(StudentDetail.EnquiryDate)


    }
  }, [StudentDetail]);


  const onClickClass = (value) => {
    setClassId(value)
  }



  useEffect(() => {
    if (StudentDetails !== '') {
      toast.success(StudentDetails, { toastId: 'success1' })
      dispatch(resetSubmitStudents());
      navigate('/extended-sidebar/Student/StudentDetailsList')
      
    }
    
  }, [StudentDetails])
  
  

  const onSubmit = () => {
    let isError = false
    if (StudentName == '' || StudentName == null) {
      setStudentNameerror('This field is required')
      isError = true
    } else {
      setStudentNameerror('')
    }
    if (BirthDate === '') {
      setBirthDateerror('This field is required')
      isError = true
    } else {
      setBirthDateerror('')
    }
    if (Age === '') {
      setAgeerror('This field is required')
      isError = true
    } else {
      setAgeerror('')
    }
    if (FatherName === '') {
      setFatherNameerror('This field is required')
      isError = true
    } else {
      setFatherNameerror('')
    }
    if (PhoneNo === '') {
      setPhoneNoerror('This field is required')
      isError = true
    } else {
      setPhoneNoerror('')
    }
    if (MotherName === '') {
      setMotherNameerror('This field is required')
      isError = true
    } else {
      setMotherNameerror('')
    }
    if (PhoneNo2 === '') {
      setPhoneNoerror2('This field is required')
      isError = true
    } else {
      setPhoneNoerror2('')
    }
    if (SocietyName === '') {
      setSocietyNameerror('This field is required')
      isError = true
    } else {
      setSocietyNameerror('')
    }
    if (StudentAddress === '') {
      setStudentAddresserror('This field is required')
      isError = true
    } else {
      setStudentAddresserror('')
    }
    if (
      EmailId === '') {
      setEmailiderror('This field is required')
      isError = true
    } else {
      setEmailiderror('')
    }
    // if (AdmissionDate === '') {
    //   setAdmissionDaterror('This field is required')
    //   isError = true
    // } else {
    //   setAdmissionDaterror('')
    // }
    // if (EnquiryDate === '') {
    //   setEnquiryDateerror('This field is required')
    //   isError = true
    // } else {
    //   setEnquiryDateerror('')
    // }

    if (!isError) {

      const AddStudentDetailsBody: IAddStudentDetailsBody =
      {
        Id: Id === undefined ? 0 : parseInt(Id),
        ClassId: ClassId,
        StudentName: StudentName,
        BirthDate: BirthDate,
        Age: parseInt(Age),
        FatherName: FatherName,
        PhoneNo: PhoneNo,
        MotherName: MotherName,
        PhoneNo2: PhoneNo2,
        SocietyName: SocietyName,
        StudentAddress: StudentAddress,
        Emailid: EmailId,
        ClassDivisionId: ClassDivisionId,
        AdmissionDate: AdmissionDate,
        SMS: SMS,
        UserId: UserId,
        EnquiryDate: EnquiryDate
      }
      dispatch(AddStudentDetailsCDA(AddStudentDetailsBody));
      console.log(AddStudentDetailsBody, "AddStudentDetailsBody");

    }


    if (!isError) {
      ResetForm()
      
    }
   // navigate('/extended-sidebar/Student/StudentDetailsList')
  }
 
  const onChangephoneNo = (e) => {
    // const input=e.target.value;
    const input = e.target.value;
    const regex = /^[0-9\b]+$/;
    if (input === "" || (regex.test(input) && input.length <= 10)) {
      setPhoneNo(input);
    }
    // setPhoneNumber(checkIsNumber(e.target.value))
  };

  const onBlurPhoneNumber = (value) => {
    if (value === "") {
      setPhoneNoerror("Please enter 10 digit Phone Number")
    }
    else {
      setPhoneNoerror(IsMobileNoValid(value))
    }
  }

  const onChangephoneNo2 = (e) => {
    const input = e.target.value;
    const regex = /^[0-9\b]+$/;
    if (input === "" || (regex.test(input) && input.length <= 10)) {
      setPhoneNo2(input);
    }
  };

  const onBirthDateChange = (value) => {
    setBirthDate(value)
    const currentDate = new Date();
    if (!isNaN(Date.parse(BirthDate))) {
      const current = new Date(value);
      setAge((currentDate.getFullYear() - current.getFullYear()).toString());
      setMonth((currentDate.getMonth() - current.getMonth()).toString());
    } else
      setAge('')
    //  setMonth('')
  }
    
  const AgE= Age+'years' + '  '+ Month +'months'

  const onAdmissionDateChange = (value) => {
    setAdmissionDate(value)

  }
  const onEnquiryDateChange = (value) => {
    setEnquiryDate(value)

  }
  function onBlurEmail(value) {
    const emailRegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{1,3})+$/;
    if (!value) {
      return 'Email Address is Mandatory.';
    }
    else if (!emailRegExp.test(value)) {
      return 'Please enter valid email address';
    }
    return ''
  }
  const ResetForm = () => {
    setClassId('')
    setStudentName('')
    setBirthDate('')
    setAge('')
    setFatherName('')
    setPhoneNo('')
    setMotherName('')
    setPhoneNo2('')
    setSocietyName('')
    setStudentAddress('')
    setEmailId('')
    setEnquiryDate('')
    setAdmissionDate('')
    //setChecked(false)
    setItemList(prev => prev.map((item) => { return { ...item, IsActive: false } }))
   
  }
  
  return (
    <Container>
      <PageHeader heading={HeaderText[OperationType === undefined ? 0 : parseInt(OperationType)]} />
      {ClassList.length>0 &&
      <DropDown itemList={ClassList}
        ClickItem={onClickClass}
        DefaultValue={ClassId}
        Label={'Select Class'} />
      }
      <br></br>
      <Card>
        <TextField value={StudentName} onChange={(e) => { setStudentName(e.target.value) }} label={'Student Name'} />
        <ErrorMessageForm error={StudentNameerror} />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField value={BirthDate} type='date' onChange={(e) => { onBirthDateChange(e.target.value) }} label={'Birth Date'} focused />
            <ErrorMessageForm error={BirthDateerror} />
          </Grid>
          <Grid item xs={6}>
            <TextField value={AgE} type="text" disabled label={'Age'} />
            <ErrorMessageForm error={Ageerror} />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField value={FatherName} onChange={(e) => { setFatherName(e.target.value) }} label={'Father Name'} />
            <ErrorMessageForm error={FatherNameerror} />
          </Grid>
          <Grid item xs={6}>
            <TextField value={PhoneNo}
              type="text"
              onChange={(e) => onChangephoneNo(e)}
              onBlur={(e) => { onBlurPhoneNumber(e.target.value) }}
              error={PhoneNoerror !== ''}
              helperText={PhoneNoerror}
              label={'PhoneNo'} />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField value={MotherName} onChange={(e) => { setMotherName(e.target.value) }} label={'Mother Name'} />
            <ErrorMessageForm error={MotherNameerror} />
          </Grid>
          <Grid item xs={6}>
            <TextField value={PhoneNo2} onChange={(e) => onChangephoneNo2(e)}
              onBlur={(e) => { onBlurPhoneNumber(e.target.value) }}
              // onBlur={(e) => { setPhoneNoerror2(IsMobileNoValid(e.target.value)) }}
              error={PhoneNoerror2 !== ''}
              helperText={PhoneNoerror2}
              label={'PhoneNo2'} />
          </Grid>
        </Grid>

        <TextField value={SocietyName} onChange={(e) => { setSocietyName(e.target.value) }} label={'Society Name'} />
        <ErrorMessageForm error={SocietyNameerror} />
        <TextField value={StudentAddress} onChange={(e) => { setStudentAddress(e.target.value) }} label={'Student Address'} />
        <ErrorMessageForm error={StudentAddresserror} />

        <TextField value={EmailId}
          onChange={(e) => { setEmailId(e.target.value) }}
          onBlur={(e) => { setEmailiderror(onBlurEmail(e.target.value)) }}
          error={Emailiderror !== ''}
          helperText={Emailiderror}
          label={'Email Id'} />

        {((OperationType === undefined ? 0 : parseInt(OperationType)) == 2 ||
          (OperationType === undefined ? 0 : parseInt(OperationType)) == 3) &&
          <TextField value={AdmissionDate}
            type="date" onChange={(e) => { onAdmissionDateChange(e.target.value) }} label={'Admission Date'} focused={true} />
        }

        {((OperationType === undefined ? 0 : parseInt(OperationType)) == 0 ||
          (OperationType === undefined ? 0 : parseInt(OperationType)) == 1) &&
          <TextField value={EnquiryDate}
            type="date" onChange={(e) => { onEnquiryDateChange(e.target.value) }} label={'Enquiry Date'} focused={true} />
        }

        <Button onClick={onSubmit}>Submit</Button>
      </Card>
      <br></br>
      {/* if ((OperationType === undefined ? 0 : parseInt(OperationType)) == 2 ||
    (OperationType === undefined ? 0 : parseInt(OperationType)) == 3) {
    setAdmissionDate('') */}
    </Container>
  )
}


export default EnquiryStudentDetails




