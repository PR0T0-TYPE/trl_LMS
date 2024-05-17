import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { MDeleteEmployeeDetails, MgetEmployeeList, MresetDeleteEmployeeDetails } from 'src/requests/LMSUI/ReqIGetEmployee';
import { RootState } from 'src/store';
import { useNavigate, useParams } from 'react-router-dom';
import { IDeleteEmployeeBody } from 'src/Interface/ILMSUI/GetLMSInterface';
import { toast } from 'react-toastify';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import PageHeader from 'src/library/heading/pageHeader';
import DynamicList from 'src/library/Training/DynamicList';
import Layout from './LMSLayout';
import SideNav from './SideNav';
import SearchableDropdown from 'src/library/Training/SearchableDropdown';

const EmployeeListDemo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { Id } = useParams();
  
  const HeaderList = ["Employee-Id", "Name", "Designation/Job Role", "Profile", "Delete"];
  const IconList = [
    { Id: 1, Icon: <ManageAccountsIcon />, Action: "Edit" },
    { Id: 2, Icon: <DeleteForeverIcon/>, Action: 'Delete' }
  ];
  const [selectedOption, setSelectedOption] = useState('');

  const OptionList = [
    { Id: 0, Name: 'Select Designation', Value: "0" },
    { Id: 1, Name: 'Developer', Value: "1" },
    { Id: 2, Name: 'Quality Assurance', Value: "2" }
  ];

  const clickOption = (value) => {
    setSelectedOption(value);
  }

  const USGetEmployeeList = useSelector((state: RootState) => state.EmployeeList.IsEmployeeList);

  useEffect(() => {
    dispatch(MgetEmployeeList());
  }, [selectedOption]);

  const USDeleteEmployeeDetailsMsg = useSelector((state: RootState) => state.EmployeeList.IsDeleteEmployee);
  useEffect(() => {
    if (USDeleteEmployeeDetailsMsg !== "") {
      toast.success('Employee Deleted Successfully')
      dispatch(MresetDeleteEmployeeDetails());
      dispatch(MgetEmployeeList());
    }
  }, [USDeleteEmployeeDetailsMsg]);

  const clickItem = (value) => {
    if (value.Action === "Delete") {      
      if (confirm('Are you sure to delete this employee?')) {
        const getDeleteEmployeeBody: IDeleteEmployeeBody = {
          EmployeeId: value.Id
        };
        dispatch(MDeleteEmployeeDetails(getDeleteEmployeeBody));
      }
    }
    if (value.Action === "Edit") {
      navigate(`../Profile/${value.Id}`);
    }
  }   
    
  return (
    <>
      <PageHeader heading='Interns List' />
      <Grid container>
        <Grid item xs={3}>
          <SideNav />
        </Grid>
        <Grid item xs={9}>
          <Layout>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <SearchableDropdown
                  sx={{ width: '200px', mr: '20px' }}
                  ItemList={OptionList}
                  onChange={(value) => setSelectedOption(value)}
                  label={'Select Designation'}
                  defaultValue={selectedOption}
                  mandatory
                  size={"small"} />
              </Grid>
              <Grid item xs={12}>
                <br />
                <DynamicList
                  HeaderList={HeaderList}
                  // Filter the employee list based on selected designation
                  ItemList={USGetEmployeeList.filter(employee => {
                    if (selectedOption === "1") {
                      return employee.designation === "Developer";
                    } else if (selectedOption === "2") {
                      return employee.designation === "Quality Assurance/Tester";
                    } else {
                      return true;
                    }
                  })}
                  IconList={IconList}
                  ClickItem={clickItem} />
              </Grid>
            </Grid>
          </Layout>
        </Grid>
      </Grid>
    </>
  );
};

export default EmployeeListDemo;
