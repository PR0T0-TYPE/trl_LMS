
import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from 'src/store';
import PageHeader from 'src/library/heading/pageHeader'
import { Container, TextField, Button, Card, Typography } from '@mui/material';
import DropDown from 'src/library/DropDown/DropDown';
import { IGetStudentDetailsListBody, IDeleteStudentDetailsBody } from 'src/Interface/AddStudentDetails/IAddStudentDetails';
import { GetStudentDetailList, DeleteStudent, GetClassNameList, resetDeleteStudent } from 'src/requests/AddStudentDetails/RequestAddStudentDetails';
import { useParams } from 'react-router-dom';
import TabulerList from 'src/library/List/TabulerList';
import { useNavigate } from 'react-router';
import CardHeader from 'src/library/Card/CardHeader';
const DemoStudentList = () => {
  const [ClassId, setClassId] = useState(2);
  const [isAdmission, setIsAdmission] = useState(0)

  const { Id } = useParams();
  const dispatch = useDispatch();

  const HeaderList = [{ id: "1", Name: "Student Name", Value: 1 },
  { id: "2", Name: "Class Name", Value: 2 },
  { id: "3", Name: "Phone No", Value: 3 },
  { id: "4", Name: "Society Name", Value: 4 },
  { id: "5", Name: "Enquiry Date", Value: 5 },
  { id: "6", Name: "Admission Link", Value: 6 },
  { id: "7", Name: "Edit", Value: 7 },
  { id: "8", Name: "Delete", Value: 8 }]

  const navigate = useNavigate();
  
  const StudentDetailsList = useSelector(
    (state: RootState) => state.AddStudentDetail.StudentDetailList
  );
  console.log(StudentDetailsList,"Lol");
  

  const DeleteStudentDetail: any = useSelector(
    (state: RootState) => state.AddStudentDetail.DeleteStudent
  );
  console.log(DeleteStudentDetail, "DeleteStudentDetail")
  const clickTogle = (value) => {
    
    setIsAdmission(value)
  }

  const GetStudentDetailsListBody: IGetStudentDetailsListBody =
  {
    EnquiryAdmissionDetails: isAdmission,
    ClassId: ClassId
  }

  const DeleteStudentDetailsBody: IDeleteStudentDetailsBody =
  {
    Id: parseInt(Id)
  }




  const clickDeleteEnquiry = (Id) => {
    if (confirm('Are You Sure you want to delete The List')) {
      const DeleteStudentDetailsBody: IDeleteStudentDetailsBody =
        { "Id": Id }
      dispatch(DeleteStudent(DeleteStudentDetailsBody))
    }
  }


  const clickEditEnquiry = (Id) => {
    navigate('/extended-sidebar/Student/DemoEnquiryForm/' + '/' + Id)
  }


  useEffect(() => {
    dispatch(GetStudentDetailList(GetStudentDetailsListBody));
  }, [isAdmission]);

  


  useEffect(() => {
    if (DeleteStudentDetail !== '') {
      toast.success(DeleteStudentDetail, { toastId: 'success1' })
      dispatch(resetDeleteStudent());
      dispatch(GetStudentDetailList(GetStudentDetailsListBody));
    }
  }, [DeleteStudentDetail])

  return (
    <Container>

      <PageHeader heading={'Student Details List'} />
      <CardHeader Item={HeaderList} />
      <TabulerList ItemList={StudentDetailsList} clickEdit={clickEditEnquiry} Submit={''} Delete={clickDeleteEnquiry} />






    </Container>
  )
}

export default DemoStudentList
