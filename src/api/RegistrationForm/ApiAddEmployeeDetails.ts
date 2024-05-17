import { IAddEmployeeDetailsBody,IgetTrainingModeListResult, IgetDesignationDDResult,
     IgetQualificationDDResult, IgetEmployeeListDetailsResult, IDeleteOneEmplListBody, 
     IGeteditEmpDetailsOfProfileBody, IGeteditEmpDetailsOfProfileResult, IGeteditmsgOfProfileBody,}
      from "src/Interface/RegistrationForm/ISignup";
import http from "src/utils/http-common1";

//1.dispallay signup msg we will use add API
const APIAddEmployeeDetails = (data:IAddEmployeeDetailsBody) => {
    return http.post<string>('AddEmployeeDetails', data)
};

//2.to display training list there is no need to pass body, so data will be empty
const APIgetTrainingList = () => {
    return http.post<IgetTrainingModeListResult[]>('GetTrainingList')
};

//3. display Designation DD
const APIgetDesignationDD = () => {
    return http.post<IgetDesignationDDResult[]>('GetDesignationDropDown')
};

//4.display Qualification DD
const APIgetQualificationDD = () => {
    return http.post<IgetQualificationDDResult[]>('GetQualificationsDropDown')
};

//5.to display added List, no need to add data/body again
const APIgetEmpList = () =>
{
    return http.post<IgetEmployeeListDetailsResult[]>('GetEmployeeList')
};

//5.a on emp list delete 1 emp by ID so need body / data
const DeleteEmplFromListApi = (data: IDeleteOneEmplListBody)=>{
    return http.post<string>('DeleteEmployee',data)
};

//6.a in profile  page update the empl info by ID,so need body
const GetEmployeeDetailsApi = (data: IGeteditEmpDetailsOfProfileBody)=>{
    return http.post<IGeteditEmpDetailsOfProfileResult>("GetEmployeeDetails", data)
};

//6.b profile pg- edit msg of save btn
const APIGeteditmsgOfProfile = (data:IGeteditmsgOfProfileBody) => {
    return http.post<string>('EditEmployeeDetails', data)
};



const AddSignUpDetailsApi ={
    APIAddEmployeeDetails,
    APIgetTrainingList,
    APIgetDesignationDD,
    APIgetQualificationDD,
    APIgetEmpList,
    DeleteEmplFromListApi,
    GetEmployeeDetailsApi,
    APIGeteditmsgOfProfile
}

export default AddSignUpDetailsApi;