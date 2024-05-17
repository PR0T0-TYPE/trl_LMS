import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from 'src/store';
import {IAddEmployeeBody} from 'src/Interface/Employee/IEmployee';
import AddEmployeeApi from 'src/api/Employee/APIEmployee'

const Employeeslice = createSlice({
  name: 'AddEmployee',
  initialState:{
    EmployeeAdd: "", 
  },
  reducers: {
    AddEmployees(state,action){
      state.EmployeeAdd=action.payload;
    },
  }   
});
export const AddEmployeeDetails =
  (data:IAddEmployeeBody): AppThunk =>
  async (dispatch) => {
    const response = await AddEmployeeApi.AddEmployee(data);
    dispatch(Employeeslice.actions.AddEmployees(response.data));
  }
export default Employeeslice.reducer
