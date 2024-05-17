import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { MDeleteEmployeeDetails, MgetDesignationList, MgetEmployeeList, MresetDeleteEmployeeDetails } from 'src/requests/LMSUI/ReqIGetEmployee';
import { IDeleteEmployeeBody } from 'src/Interface/ILMSUI/GetLMSInterface';
import { toast } from 'react-toastify';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Grid } from '@mui/material';
import Dropdown from 'src/library/Training/DropDown';
import DynamicList from 'src/library/Training/DynamicList';
import PageHeader from 'src/library/heading/pageHeader';
import Layout from './LMSLayout';
import { RootState } from 'src/store';

const EmployeeList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { Id } = useParams();

  const [selectDesignation, setSelectedDesignation] = useState("0"); // Default value changed to "Developer"

  const clickDesignation = (value) => {
    setSelectedDesignation(value);
  };

  const HeaderList = ["Employee-Id", "Name", "Designation/Job Role", "Profile", "Delete"];
  const IconList = [
    { Id: 1, Icon: <ManageAccountsIcon />, Action: "Edit" },
    { Id: 2, Icon: <DeleteForeverIcon />, Action: 'Delete' }
  ];

  const USGetEmployeeList = useSelector((state: RootState) => state.EmployeeList.IsEmployeeList);

  useEffect(() => {
    dispatch(MgetEmployeeList());
  }, [dispatch]);

  const USDesignationList = useSelector((state: RootState) => state.EmployeeList.IsGetDesignationList);

  console.log(USDesignationList)
  useEffect(() => {
    dispatch(MgetDesignationList());
  }, [dispatch]);

  const USDeleteEmployeeDetailsMsg = useSelector((state: RootState) => state.EmployeeList.IsDeleteEmployee);

  useEffect(() => {
    if (USDeleteEmployeeDetailsMsg !== "") {
      toast.success('Employee Deleted Successfully');
      dispatch(MresetDeleteEmployeeDetails());
      dispatch(MgetEmployeeList());
    }
  }, [USDeleteEmployeeDetailsMsg]);

  const clickItem = (value) => {
    if (value.Action === "Delete") {

      if (window.confirm('Are you sure to delete this employee?')) {
        const getDeleteEmployeeBody: IDeleteEmployeeBody = {
          EmployeeId: value.Id
        };
        dispatch(MDeleteEmployeeDetails(getDeleteEmployeeBody));
      }
    }
    if (value.Action === "Edit") {
      navigate("../Profile/" + value.Id);
    }
  };

  const filteredEmployees = USGetEmployeeList.filter((employee) => {
    
    if (selectDesignation === "1") {
      return employee.Text3 === "Developer";
    } else if (selectDesignation === "2") {
      return employee.Text3 === "Quality Assurance";
    } else{
      return employee
    }
  });
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <PageHeader heading='Interns List' />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Layout />
            </Grid>
            <Grid item xs={9}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Dropdown
                    ItemList={USDesignationList}
                    Label='Select Designation'
                    DefaultValue={selectDesignation}
                    ClickItem={clickDesignation}
                  />
                </Grid>
                <Grid item xs={12}>
                  <DynamicList
                    HeaderList={HeaderList}
                    ItemList={filteredEmployees}
                    IconList={IconList}
                    ClickItem={clickItem}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default EmployeeList;
