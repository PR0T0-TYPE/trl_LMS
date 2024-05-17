import { createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "src/store";
import AddStudentDetailsApi from "src/api/AddStudentDetails/ApiAddStudentDetails";
import { IAddStudentDetailsBody, IGetStudentDetailsBody, IGetStudentDetailsListBody, IGetClassDivisionListBody, IDeleteStudentDetailsBody } from "src/Interface/AddStudentDetails/IAddStudentDetails"
import { IGetClassNameListBody } from "src/Interface/Teacher/IAddHomework";


const AddStudentDetailslice = createSlice({
  name: 'AddStudentDetails',
  initialState: {
    StudentDetails: "",
    StudentDetail: null,
    StudentDetailList: [],
    ClassNameList: [],
    DivisionNameList: [],
    DeleteStudent: ""
  },
  reducers: {
    AddStudentDetails(state, action) {
      state.StudentDetails = action.payload;
    },
    resetSubmitStudentDetail(state) {
      state.StudentDetails = '';
    },
    GetStudentDetails(state, action) {
      state.StudentDetail = action.payload;
    },
  
    // getStudentlist(state, action) {
    //   state.GetStudentDetails = action.payload;
    // },
    GetStudentDetailList(state, action) {
      state.StudentDetailList = action.payload;
    },
    GetClassNameList(state, action) {
      state.ClassNameList = action.payload;

    },
    GetClassDivision(state, action) {
      state.DivisionNameList = action.payload;

    },
    DeleteStudentDetail(state, action) {
      state.DeleteStudent = action.payload;
    },
    resetDeleteStudentDetail(state) {
      state.DeleteStudent = '';
    },

  }
});
export const AddStudentDetailsCDA =
  (data: IAddStudentDetailsBody): AppThunk =>
    async (dispatch) => {
      const response = await AddStudentDetailsApi.AddStudentDetailss(data)
      dispatch(AddStudentDetailslice.actions.AddStudentDetails(response.data))
    

    }   
        
    export const resetSubmitStudents =
    (): AppThunk =>
      async (dispatch) => {
        dispatch(AddStudentDetailslice.actions.resetSubmitStudentDetail());
      }
export const GetStudentDetails =
  (data: IGetStudentDetailsBody): AppThunk =>
    async (dispatch) => {
      const response = await AddStudentDetailsApi.GetStudentDetail(data)
      dispatch(AddStudentDetailslice.actions.GetStudentDetails(response.data))
    }
export const GetStudentDetailList =
  (data: IGetStudentDetailsListBody): AppThunk =>
    async (dispatch) => {
      const response = await AddStudentDetailsApi.GetStudentDetailsList(data)
      let StudentList = response.data.map((item, i) => {
        
        return {
          Id: item.Id,
          Text1: item.StudentName,
          Text2: item.Class,
          Text3: item.PhoneNo,
          Text4: item.SocietyName,
          Text5: item.EnquiryDate,
          Text6: item.AdmissionDate
          

        }
      })
      
      
      dispatch(AddStudentDetailslice.actions.GetStudentDetailList(StudentList))
    }

export const GetClassNameList =
  (): AppThunk =>
    async (dispatch) => {

      const response = await AddStudentDetailsApi.GetClassList();

      let getClass = response.data.map((item, i) => {
        console.log(item, "Value")
        return {
          Id: i,
          Name: item.ClassName,
          Value: item.ClassId,
        }
      })
      dispatch(AddStudentDetailslice.actions.GetClassNameList(getClass));
    };
export const GetClassDivision =
  (data: IGetClassDivisionListBody): AppThunk =>
    async (dispatch) => {

      const response = await AddStudentDetailsApi.GetClassDivisionList(data);

      let getClassdivision = response.data.map((item, i) => {
        console.log(item, "Value")
        return {
          Id: i,
          Name: item.DivisionName,
          Value: item.ClassId,
        }
      })
      
      dispatch(AddStudentDetailslice.actions.GetClassNameList(getClassdivision));
      // dispatch(AddStudentDetailslice.actions.GetClassDivision(getClassdivision));
    };


export const DeleteStudent =
  (data: IDeleteStudentDetailsBody): AppThunk =>
    async (dispatch) => {
      const response = await AddStudentDetailsApi.DeleteStudentDetails(data)
      dispatch(AddStudentDetailslice.actions.DeleteStudentDetail(response.data))
    }
export const resetDeleteStudent =
  (): AppThunk =>
    async (dispatch) => {
      dispatch(AddStudentDetailslice.actions.resetDeleteStudentDetail());
    }

//  export const getStudentlist =
//  (data: IGetStudentDetailsBody): AppThunk =>
//    async (dispatch) => {
//      const response = await AddStudentDetailsApi.GetStudentDetails(data)
//      console.log("response",response)
//      let a = response.data.map((item, i) => {
//        return {
//          Id: i,
//          Name: item.StudentName,
//          Value: i
//        }
//      })
//      dispatch(AddStudentDetailslice.actions.getStudentlist(a ));
//  };

export default AddStudentDetailslice.reducer