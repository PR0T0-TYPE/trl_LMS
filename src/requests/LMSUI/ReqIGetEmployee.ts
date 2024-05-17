import { createSlice } from "@reduxjs/toolkit";
import { IAddBatchBody, IDeleteEmployeeBody, IEditEmployeeDetailsBody, IGetEmployeeDetailsBody, IgetFilteredEmployeeListBody, IgetFilteredEmployeeListResult} from "src/Interface/ILMSUI/GetLMSInterface";
import EmployeeApi from "src/api/LMSUIEmployeeList/ApiGetEmployee";
import { AppThunk } from "src/store";

const LMSEmployeeSlice = createSlice({
    name: 'EmployeeList',
    initialState: {
        IsEmployeeList:[],
        IsFilteredEmployeeList:[],
        IsDeleteEmployee:'',
        IsEditEmployeeDetails:{},
        IsGetEmployeeDetails:{},
        IsGetDesignationList:[],
        IsAddBatch: '',
        Loading: true
    },
    reducers: {
        RgetEmployeeList(state, action) {
            state.Loading = false;
            state.IsEmployeeList = action.payload;
        },
        RgetLoading(state, action) {
            state.Loading = true;
        },
        
        RDeleteEmployeeDetails(state, action) {
            state.Loading = false;
            state.IsDeleteEmployee = action.payload;
        },
        
        RresetDeleteEmployeeDetails(state) {
            state.Loading = false;
            state.IsDeleteEmployee = "";
        },
        RGetEmployeeDetails(state,action) {
            state.Loading = false;
            state.IsGetEmployeeDetails = action.payload;
        },
        REditEmployeeDetails(state,action) {
            state.Loading = false;
            state.IsEditEmployeeDetails = action.payload;
        },
        RresetEditEmployeeDetails(state) {
            state.Loading = false;
            state.IsDeleteEmployee = "";
        },
        RGetDesignationList(state,action) {
            state.Loading = false;
            state.IsGetDesignationList = action.payload;
        },
        RsetAddBatch(state, action) {
            state.Loading = false;
            state.IsAddBatch = action.payload;
        },
        RResetAddBatch(state, action) {
            state.Loading = false;
            state.IsAddBatch = action.payload;
        },
        RgetFilteredEmployeeList(state, action) {
            state.Loading = false;
            state.IsFilteredEmployeeList = action.payload;
        },
    }
});

export const MgetEmployeeList =
 (): AppThunk =>
async (dispatch) => {
    dispatch(LMSEmployeeSlice.actions.RgetLoading(true));
   const response = await EmployeeApi.GetEmployeeListApi();
   const responseData = response.data.map((item ,i)=> {
    return {

            Id:item.EmployeeID,
            Text1:item.EmployeeID,
            Text2:item.EmployeeName,
            Text3:item.DesignationRole,
                     
           };
    });
   dispatch(LMSEmployeeSlice.actions.RgetEmployeeList(responseData));
  console.log("EmployeeListResponse", responseData);
}



export const MgetFilteredEmployeeList =
 (data: IgetFilteredEmployeeListBody): AppThunk =>
async (dispatch) => {
    dispatch(LMSEmployeeSlice.actions.RgetLoading(true));
   const response = await EmployeeApi.GetFilteredEmployeeListApi(data);
   const responseData = response.data.map((item ,i)=> {
    return {

            Id:item.EmployeeID, 
            Text1:item.EmployeeID,
            Text2:item.EmployeeName,
            Text3:item.DesignationRole,
                     
           };
    });
   dispatch(LMSEmployeeSlice.actions.RgetFilteredEmployeeList(responseData));
  console.log("FilteredEmployeeListResponse", responseData);
}

export const MDeleteEmployeeDetails =
(data: IDeleteEmployeeBody): AppThunk =>
async (dispatch) => {
(LMSEmployeeSlice.actions.RgetLoading(true));
  const  response = await EmployeeApi.DeleteEmployeeApi(data);
dispatch(LMSEmployeeSlice.actions.RDeleteEmployeeDetails(response.data));
console.log("EmployeeDeleteResponse", response);

};

export const MresetDeleteEmployeeDetails = (): AppThunk =>
async (dispatch) => {
dispatch(LMSEmployeeSlice.actions.RresetDeleteEmployeeDetails());
};


export const MGetEmployeeDetails =
 (data: IGetEmployeeDetailsBody): AppThunk =>
async (dispatch) => {
    (LMSEmployeeSlice.actions.RgetLoading(true));
    const response = await EmployeeApi.GetEmployeeDetailApi(data);
    dispatch(LMSEmployeeSlice.actions.RGetEmployeeDetails(response.data));
    console.log("GetEmployeeDetailsResponse", response);

};

export const MEditEmployeeDetails =
 (data:IEditEmployeeDetailsBody): AppThunk =>
async (dispatch) => {
    (LMSEmployeeSlice.actions.RgetLoading(true));
    const response = await EmployeeApi.EditEmployeeDetailsApi(data);
    dispatch(LMSEmployeeSlice.actions.REditEmployeeDetails(response.data));
    // console.log("EmployeeEditResponse", response);

};


export const MresetEditEmployeeDetails = (): AppThunk =>
async (dispatch) => {
dispatch(LMSEmployeeSlice.actions.RresetEditEmployeeDetails());

};

export const MgetDesignationList =():AppThunk =>async (dispatch)=>{
    dispatch(LMSEmployeeSlice.actions.RgetLoading(true));
    const response = await EmployeeApi.GetDesignationListApi();
    const responseData = response.data.map((item, i) =>{
      return{
              Id: item.DesignationId,
              Name:  item.DesignationRole, 
              Value: item.DesignationId
      };
    });
    dispatch(LMSEmployeeSlice.actions.RGetDesignationList(responseData));
    console.log("Designation data================>",responseData);
  };

  export const MAddBatch =
    (data: IAddBatchBody): AppThunk =>
        async (dispatch) => {
            dispatch(LMSEmployeeSlice.actions.RgetLoading(true));
            const response = await EmployeeApi.AddBatchApi(data);
            dispatch(LMSEmployeeSlice.actions.RsetAddBatch(response.data));
        };
export const MresetAddBatchMessage =
    (): AppThunk =>
        async (dispatch) => {
            dispatch(LMSEmployeeSlice.actions.RresetDeleteEmployeeDetails());
        }


export default LMSEmployeeSlice.reducer
