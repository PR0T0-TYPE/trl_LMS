import http from "../../utils/http-common";
import {IAddEmployeeBody,IAddEmployeeResult} from 'src/Interface/Employee/IEmployee'


const AddEmployee = (data: IAddEmployeeBody) => {
    return http.post<IAddEmployeeResult>('AddEmployee',data);
  };

  const AddEmployeeApi ={
    AddEmployee,
}

export default AddEmployeeApi;
