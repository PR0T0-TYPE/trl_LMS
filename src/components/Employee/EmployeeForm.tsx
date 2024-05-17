import React, { useEffect } from 'react'
import PageHeader from 'src/library/heading/pageHeader'
import { useDispatch, useSelector} from 'react-redux';
import { RootState } from 'src/store';
import {IAddEmployeeBody}  from "src/Interface/Employee/IEmployee";
import { AddEmployeeDetails } from 'src/requests/Employee/RequestEmployee';

const EmployeeForm = () => {
   const dispatch = useDispatch();
const AddEmployee = useSelector((state:RootState)=> state.AddEmployee.EmployeeAdd);
  console.log("AddEmployee", AddEmployee)

  const  AddEmployeeBody : IAddEmployeeBody =
    {
      "EmployeeName" : "Sneha",
      "BirthDate" : "13-03-2002",
      "DesignationId" : 1,
      "Gender" : 0,
      "EmailId" : "sneha13@gmail.com",
      "PhoneNo" : "7387551672"
    }
  useEffect(() => {
    dispatch(AddEmployeeDetails(AddEmployeeBody));
  }, []); 
  return (
    <div>
    EmployeeForm
    </div>
  )
}
export default EmployeeForm




