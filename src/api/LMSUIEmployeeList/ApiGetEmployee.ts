import { IAddBatchBody, IDeleteEmployeeBody , IEditEmployeeDetailsBody, IEditEmployeeDetailsResult, IGetDesignationListResult, IGetEmployeeDetailsBody, IGetEmployeeDetailsResult, IgetEmployeeListResult, IgetFilteredEmployeeListBody, IgetFilteredEmployeeListResult} from "src/Interface/ILMSUI/GetLMSInterface";
import http from "src/utils/http-common1";
    const GetEmployeeListApi = () =>
    {
        return http.post<IgetEmployeeListResult[]>('GetEmployeeList');
    };
    const GetFilteredEmployeeListApi = (data: IgetFilteredEmployeeListBody) =>
    {
        return http.post<IgetFilteredEmployeeListResult[]>('GetfilteredEmployeeList');
    };
    const DeleteEmployeeApi = (data: IDeleteEmployeeBody) => 
    {
    return http.post<string>('DeleteEmployee', data);
    };
    const GetEmployeeDetailApi = (data: IGetEmployeeDetailsBody) =>
    {
    return http.post<IGetEmployeeDetailsResult>('GetEmployeeDetails',data);
    };
    const EditEmployeeDetailsApi  = (data: IEditEmployeeDetailsBody) =>
    {
        return http.post<string>('EditEmployeeDetails',data);
    };
    const GetDesignationListApi = () => {
        return http.post<IGetDesignationListResult[]>('GetDesignationList');
    };
    
    const AddBatchApi = (data: IAddBatchBody) => {
        return http.post<string>('AddBatch', data);
    };
const EmployeeApi =
{
    GetEmployeeListApi, 
    GetFilteredEmployeeListApi,
    DeleteEmployeeApi,
    GetEmployeeDetailApi,
    EditEmployeeDetailsApi,
    GetDesignationListApi,
    AddBatchApi,


}

export default EmployeeApi