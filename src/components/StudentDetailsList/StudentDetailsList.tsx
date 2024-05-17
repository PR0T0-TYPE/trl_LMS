import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from 'src/store';
import PageHeader from 'src/library/heading/pageHeader'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Container, TextField, Button, Card, Typography } from '@mui/material';
import DropDown from 'src/library/DropDown/DropDown';
import HeaderItemList from 'src/library/List/HeaderItemList'
import { IGetStudentDetailsListBody, IDeleteStudentDetailsBody, IGetClassNameListResult, IGetStudentDetailsListResult } from 'src/Interface/AddStudentDetails/IAddStudentDetails';
import { GetStudentDetailList, DeleteStudent , GetClassNameList,  resetDeleteStudent  } from 'src/requests/AddStudentDetails/RequestAddStudentDetails';
import SelectedCard from 'src/library/Card/SelectedCard';
import SuspenseLoader from 'src/layouts/Components/SuspenseLoader';
import { ClassNames } from '@emotion/react';
import { useParams } from 'react-router-dom';
import TabulerList from 'src/library/List/TabulerList';
import TabulerCard from 'src/library/Card/TabulerCard';
import { useNavigate } from 'react-router';
import CardTogle from '../CardToggle/CardToggle';
import CardHeader from 'src/library/Card/CardHeader';
import TabulerCard1 from 'src/library/List/TabularList1';
import TabulerList1 from 'src/library/Card/TabularCard1';

const StudentDetailsList = () => {
  const { Id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [ClassId, setClassId] = useState(0);
  // const [StudentName, setStudentName] = useState([]);
  // const [PhoneNumber, setPhoneNumber] = useState([]);
  // const [SocietyName, setSocietyName] = useState([]);
  const itemlist2 = [{ id: "0", Text: "EnquiryList" }, { id: "1", Text: "AdmissionList" }]
  const [IsEnquiryAdmission, setIsEnquiryAdmission] = useState(0)
  
  
  const [HeaderList,setHeaderList] = useState([])
//   const HeaderList1 =isAdmission ===0?[{id:"1" , Name:"Student Name" , Value:1},
//   {id:"2" , Name:"Class Name" , Value:2 },
//   {id:"3" , Name:"Phone No" , Value:3 },
//   {id:"4" , Name:"Society Name" , Value:4 },
//   {id:"5" , Name:"Enquiry Date" , Value:5 },
//   {id:"6" , Name:"Admission Link" , Value:6 },
//   {id:"7" , Name:"Edit" , Value:7 },
//   {id:"8" , Name:"Delete" , Value:8 }]:[{id:"1" , Name:"Student Name" , Value:1 },
//   {id:"2" , Name:"Class Name" , Value:2 },
//   {id:"3" , Name:"Phone No" , Value:3 },
//   {id:"4" , Name:"Society Name" , Value:4},
//   {id:"5" , Name:"Admission Date" , Value:5 },
//   {id:"6" , Name:"Edit" , Value:6 },
//   {id:"7" , Name:"Delete" , Value:7 },
// ]

 const ClassNameList = useSelector((state: RootState) => state.AddStudentDetail.ClassNameList);
  const StudentDetailsList = useSelector((state: RootState) => state.AddStudentDetail.StudentDetailList);
  console.log(StudentDetailsList, "StudentDetailsList")
  const DeleteStudentDetail: any = useSelector( (state: RootState) => state.AddStudentDetail.DeleteStudent);
  console.log(DeleteStudentDetail, "DeleteStudentDetail")

  
useEffect(() => {
  dispatch(GetClassNameList())
}, [])
  


 useEffect(() => {
  const GetStudentDetailsListBody: IGetStudentDetailsListBody =
  {
    EnquiryAdmissionDetails: IsEnquiryAdmission,
    ClassId: ClassId
  }
    dispatch(GetStudentDetailList(GetStudentDetailsListBody));
  }, [IsEnquiryAdmission,ClassId])


  useEffect(() => {
    if (DeleteStudentDetail!== '') {
      toast.success(DeleteStudentDetail, { toastId: 'success1' })
      dispatch(resetDeleteStudent());
      const GetStudentDetailsListBody: IGetStudentDetailsListBody =
  {
    EnquiryAdmissionDetails: IsEnquiryAdmission,
    ClassId: ClassId
  }
     dispatch(GetStudentDetailList(GetStudentDetailsListBody));
    }
    
  }, [DeleteStudentDetail])


   const clickTogle = (value) => {
    setIsEnquiryAdmission(value)
    setHeaderList(value ==="0"?[{id:"1" , Name:"Student Name" , Value:1},
    {id:"2" , Name:"Class Name" , Value:2 },
    {id:"3" , Name:"Phone No" , Value:3 },
    {id:"4" , Name:"Society Name" , Value:4 },
    {id:"5" , Name:"Enquiry Date" , Value:5 },
    {id:"6" , Name:"Admission Link" , Value:6 },
    {id:"7" , Name:"Edit" , Value:7 },
    {id:"8" , Name:"Delete" , Value:8 }]:[{id:"1" , Name:"Student Name" , Value:1 },
    {id:"2" , Name:"Class Name" , Value:2 },
    {id:"3" , Name:"Phone No" , Value:3 },
    {id:"4" , Name:"Society Name" , Value:4},
    {id:"5" , Name:"Admission Date" , Value:5 },
    {id:"6" , Name:"Edit" , Value:6 },
    {id:"7" , Name:"Delete" , Value:7 },
  
  ])
  }

  const clickDropdown = (value) => {
    setClassId(value)
    
 }

  console.log(IsEnquiryAdmission,"IsEnquiryAdmission",IsEnquiryAdmission == 1)
  const clickEditEnquiry = (Id) => {
    navigate('/extended-sidebar/Student/EnquiryForm/' + (IsEnquiryAdmission == 1 ? "3" : "1") + '/' + Id)
  }
const clickLinkAdmission =(Id) => {
  navigate('/extended-sidebar/Student/EnquiryForm/'+'2'+ '/' + Id)
}
  const clickDeleteEnquiry = (Id) => {
    if (confirm('Are You Sure you want to delete The List')) {
      const DeleteStudentDetailsBody: IDeleteStudentDetailsBody =
        { "Id": Id }
       
      dispatch(DeleteStudent(DeleteStudentDetailsBody))
    }
  }
   return (
    <Container>

      <PageHeader heading={'Student Details List'} />
      
      <DropDown itemList={ClassNameList}
        ClickItem={clickDropdown}
        DefaultValue={ClassId}
        Label={'Select Class'} />
        <br></br>
    
      <CardTogle ItemList={itemlist2} clickToggle={clickTogle} defaultvalue={IsEnquiryAdmission} />

     <br></br>
      {/* <TextField label="Student Name"value={StudentName}onChange={(e)=>ChangeTextBox(e.target.value)}variant="standard" />  */}
      {/* <TextField label="StudentName" value={StudentName}  />
      <TextField label="Phone Number" value={PhoneNumber} />
      <TextField label="Society Name" value={SocietyName} /> */}
      {HeaderList.length>0 &&
      <CardHeader Item={HeaderList}/>
    }
         <TabulerList1 ItemList={StudentDetailsList} clickEdit={clickEditEnquiry} 
         Submit={clickLinkAdmission} 
         Delete={clickDeleteEnquiry} 
         IsEnquiry={IsEnquiryAdmission==0}/>
       </Container>
  )
}



export default StudentDetailsList
