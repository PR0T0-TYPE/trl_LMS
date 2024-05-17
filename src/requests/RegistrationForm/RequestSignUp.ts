import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from 'src/store';
import {IAddEmployeeDetailsBody, IDeleteOneEmplListBody, IGeteditEmpDetailsOfProfileBody, IGeteditmsgOfProfileBody} from 'src/Interface/RegistrationForm/ISignup'
import AddSignUpDetailsApi from 'src/api/RegistrationForm/ApiAddEmployeeDetails'

const SignUpslice = createSlice({
  name: 'SignUp',
  initialState:{
    ISaddEmpmsg:'',  //getting reult in string msg
    ISgetTrainingList: [],
    ISgetDesignationDD:[],
    ISgetQualificationDD:[],
    ISgetEmployeeList:[] ,  //coz getting result in array formfor all Emp
    ISDeleteEmpMSGFromList:'',  //coz getting result in string(i.e msg in string form)
    //IsgetEditEmpDetailsProfile: {},    // coz we r getting single data in {} Object format so can use null or {}
    IsgetEditEmpDetailsProfile: null,    // coz we r getting single data in {} Object format
    ISGeteditmsgOfProfile:'',
    Loading : true
   
  },
  reducers: {
  //0 display add emp successfull msg
    RaddEmpDetails(state,action){
      state.ISaddEmpmsg=action.payload;
    },

  //1 reset signup msg from store
    RResetAddEmployeemsg(state) {
      state.Loading = false;
      state.ISaddEmpmsg ="";
  },

  //2 Traing mode DD
  RgetTrainingList(state, action) {
    state.Loading = false;
    state.ISgetTrainingList = action.payload;
  },

  //3. Designation Dropdown Data
  RgetDesignationDD(state, action) {
    state.Loading = false;
    state.ISgetDesignationDD = action.payload;
  },

  //4.Qualification DD
  RgetQualificationDD(state, action) {
    state.Loading = false;
    state.ISgetQualificationDD = action.payload;
  },

  //5.get Employee list
  RgetAllEmpoyeeList(state, action) {
    state.Loading = false;
    console.log("Reducer Action in get employee List", action);
    state.ISgetEmployeeList = action.payload;
  },

  //5.a delete emp from List
  RDeleteEmployee(state, action) {
    state.Loading = false; 
    state.ISDeleteEmpMSGFromList = action.payload;
},
//5.b RESET DELETE MSG => when emp will be delete then we will get msg from DB so after getting msg, when we will perform next action then that delete msg should be reset from store again for next action

  RresetDeleteEmpListMSG(state) {
  state.Loading = false;
  state.ISDeleteEmpMSGFromList = "";
},

//6. on profile pg, getemp details by ID of edit of emplist profile btn

RgetEditEmpDetailsProfile(state, action) {
  state.Loading = false; 
  state. IsgetEditEmpDetailsProfile= action.payload;
},
//6.a set edit msg - on  profile
ReditmsgOfProfile(state,action) {
  state.Loading = false;
  state.ISGeteditmsgOfProfile= action.payload;
},

//6.b reset edit msg - on  profile
RresetEditMSGOfProfile(state) {
  state.Loading = false;
  state.ISGeteditmsgOfProfile = "";
},
RgetLoading(state, action) {
        state.Loading = true;
    },
  }   
});

  //0. add emp details successfully msg
export const MainaddEmpDetails =(data:IAddEmployeeDetailsBody): AppThunk =>
  async (dispatch) => {
    dispatch(SignUpslice.actions.RgetLoading(true));
    const response = await AddSignUpDetailsApi.APIAddEmployeeDetails(data);
    dispatch(SignUpslice.actions.RaddEmpDetails(response.data));
    console.log("add emp details===============>",response);
  };
  //1. after displaying add successfull msg, reset that msg from store
export const  MainResetAddEmployeemsg =
  (): AppThunk =>
      async (dispatch) => {
          dispatch(SignUpslice.actions.RResetAddEmployeemsg());// Dispatching action to reset the message
      };
 
    //2. training mode draopdown
export const MaingetTrainingList =():AppThunk =>async (dispatch)=>{
  dispatch(SignUpslice.actions.RgetLoading(true));
  const response = await AddSignUpDetailsApi.APIgetTrainingList();
  const responseData = response.data.map((Item, i) =>{
    return{
            Id: Item.TrainingId,
            Name:  Item.Trainingmode, 
            Value: Item.TrainingId.toString() 
    };
  });
  dispatch(SignUpslice.actions.RgetTrainingList(responseData));
  console.log("training list data================>",responseData);
};

  //3. Designation Dropdown
  export const MaingetDesignationDD =():AppThunk =>async (dispatch)=>{
    dispatch(SignUpslice.actions.RgetLoading(true));
    const response = await AddSignUpDetailsApi.APIgetDesignationDD();
    const responseData = response.data.map((Item, i) =>{
      return{
              Id: Item.DesignationId,
              Name:  Item.DesignationRole, 
              Value: Item.DesignationId.toString() 
      };
    });
    dispatch(SignUpslice.actions.RgetDesignationDD(responseData));
    console.log("Designation data================>",responseData);
  };

  //Qualification DD
  export const MainQualificationDD =():AppThunk =>async (dispatch) =>{
    dispatch(SignUpslice.actions.RgetLoading(true));
    const response = await AddSignUpDetailsApi.APIgetQualificationDD();
    const responseData = response.data.map((Item, i) =>{
      return{

        Id: Item.QualificationID,
        Name: Item.Qualification,
        Value:  Item.QualificationID.toString(),
      };
    });
    dispatch(SignUpslice.actions.RgetQualificationDD(responseData));
    console.log("Qualification Data======== =======>",responseData);
  }

  //5. get Employee List
  export const MaingetAllEmployeeList =
 (): AppThunk =>
async (dispatch) => {
    dispatch(SignUpslice.actions.RgetLoading(true));
   const response = await AddSignUpDetailsApi.APIgetEmpList();
   const responseData = response.data.map((Item,i)=> {
    return {

            Id: Item.EmployeeID,
            Text1:Item.EmployeeID,
            Text2: Item.EmployeeName,
            Text3:Item.DesignationRole,
            
           
           };
    });
   dispatch(SignUpslice.actions.RgetAllEmpoyeeList(responseData));
   console.log("EmployeeListResponse", responseData);
};



//5.a delete empl from emp list
export const MainDeleteEmplFromList = 
(data:IDeleteOneEmplListBody): AppThunk => 
async (dispatch) =>{
    dispatch(SignUpslice.actions.RgetLoading(true));
    const response = await AddSignUpDetailsApi.DeleteEmplFromListApi(data)
    dispatch(SignUpslice.actions.RDeleteEmployee(response.data));
};

//5.b reset dlt msg 
export const MainresetDeleteEmployee =
    (): AppThunk =>
        async (dispatch) => {
            dispatch(SignUpslice.actions.RresetDeleteEmpListMSG());
        };

//6.a Profile- get emp details
export const MaingetEditEmpDetailsProfile =
        (data: IGeteditEmpDetailsOfProfileBody): AppThunk =>
            async (dispatch) => {
                dispatch(SignUpslice.actions.RgetLoading(true));
                const response = await AddSignUpDetailsApi.GetEmployeeDetailsApi(data);
    
                dispatch(SignUpslice.actions.RgetEditEmpDetailsProfile(response.data));
                console.log("EmployeeDetailsResponse============", response);

            };

//6.a Profile edit emp details
export const MainEditEmpmsgOfProfile =
 (data:IGeteditmsgOfProfileBody): AppThunk =>
async (dispatch) => {
    (SignUpslice.actions.RgetLoading(true));
    const response = await AddSignUpDetailsApi.APIGeteditmsgOfProfile(data);
    dispatch(SignUpslice.actions.ReditmsgOfProfile(response.data));
    console.log("EmployeeEditResponse", response);

};


export const MainresetEditEmpmsgOfProfile = (): AppThunk =>
async (dispatch) => {
dispatch(SignUpslice.actions.RresetEditMSGOfProfile());

};

export default SignUpslice.reducer
