import {  IgetEmployeeListResult } from "src/Interface/ILMSUI/GetLMSInterface";
import http from"../../utils/http-common1";

const GetEmployeeListApi = () =>
{
    return http.post<IgetEmployeeListResult[]>('GetEmployeeList');
};

const EmployeeApi =
{
    GetEmployeeListApi,
}

export default EmployeeApi