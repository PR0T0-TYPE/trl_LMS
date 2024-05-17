import React from 'react'
import { Container, Grid } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import PageHeader from 'src/library/heading/pageHeader';
import { RootState } from 'src/store';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router';
import { MDeleteEmployeeDetails, MgetEmployeeList, MresetDeleteEmployeeDetails } from 'src/requests/LMSUI/ReqIGetEmployee';
import { IDeleteEmployeeBody } from 'src/Interface/ILMSUI/GetLMSInterface';
import DynamicList from 'src/library/Training/DynamicList';

const EmployeeList = () => {
    const dispatch = useDispatch();
    const {Id} = useParams();
    const navigate = useNavigate();

    const HeaderList = ["Employee ID", "EmployeeName", "Designation","Profile", "Delete"];

    const iconList = [
        { Id: 1, Icon: <EditIcon />, Action: "Profile" },
        { Id: 2, Icon: <CloseIcon />, Action: "Delete" }
    ];

    useEffect (()=>{
        dispatch(MgetEmployeeList());
    },[])

    const USemployeeList = useSelector((state: RootState) => state.EmployeeList.IsEmployeeList);

    const clickItem = (value) => {
        if (value.Action === "Delete") {
            console.log(value.Id,"ID to delete");
            if (confirm('Are you sure to delete this employee?')) {
                const getDeleteEmpFromListBody:IDeleteEmployeeBody  = {
                    EmployeeId: value.Id
                };
                dispatch(MDeleteEmployeeDetails(getDeleteEmpFromListBody));  
            }
        }

        if (value.Action === 'Profile') {
           navigate("./Profile/" + value.Id);
            
          }
        
    };
    
    const USdeleteEmployeeMsg = useSelector((state: RootState) => state.EmployeeList.IsDeleteEmployee);

  
    useEffect(() => {
        if (USdeleteEmployeeMsg !== "") {
            toast.success(USdeleteEmployeeMsg);  
            dispatch(MresetDeleteEmployeeDetails()); 
            dispatch(MgetEmployeeList());  
        }
    }, [USdeleteEmployeeMsg]);

    
    return (
       

    <Container>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <PageHeader heading={'Interns List'} />
                </Grid>
                <Grid item xs={12}>
                    <DynamicList
                        HeaderList={HeaderList} 
                        ItemList={USemployeeList}  
                        IconList={iconList} 
                        ClickItem={clickItem}
                    />
                </Grid>
            </Grid>
        </Container>
  );
}

export default EmployeeList