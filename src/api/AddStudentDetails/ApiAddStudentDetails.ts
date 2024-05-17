
import http from"../../utils/http-common";
import { IAddStudentDetailsBody,IGetStudentDetailsBody,IGetStudentDetailsResult,IGetStudentDetailsListResult, IGetStudentDetailsListBody,IGetClassNameListResult,IGetClassDivisionListBody,IGetClassDivisionListResult,IDeleteStudentDetailsBody} from "src/Interface/AddStudentDetails/IAddStudentDetails";

const AddStudentDetailss = (data: IAddStudentDetailsBody) => {
    return http.post<string>('AddStudentDetails', data)
};
const GetStudentDetail = (data: IGetStudentDetailsBody) => {
    return http.post<IGetStudentDetailsResult[]>('GetStudentDetails',data);
  };
  const GetStudentDetailsList=(data: IGetStudentDetailsListBody)=>{
    return http.post<IGetStudentDetailsListResult[]>('GetStudentDetailsList',data);
  }; 
  const GetClassList=()=>{
    return http.post<IGetClassNameListResult[]>('GetClassNameList');
  };
  
  const GetClassDivisionList=(data: IGetClassDivisionListBody)=>{
    return http.post<IGetClassDivisionListResult[]>('GetClassDivisionList',data);
  }; 
  const DeleteStudentDetails= (data: IDeleteStudentDetailsBody) => {
    return http.post<string>('DeleteStudentDetails', data)
};
const AddStudentDetailsApi ={
AddStudentDetailss,
GetStudentDetail,
GetStudentDetailsList,
GetClassList,
GetClassDivisionList,
DeleteStudentDetails

}


export default AddStudentDetailsApi;