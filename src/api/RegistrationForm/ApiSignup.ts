import http from"../../utils/http-common";
import { IAddEmployeeDetailsBody} from "src/Interface/RegistrationForm/ISignup";

const APIAddEmployeeDetails = (data:IAddEmployeeDetailsBody) => {
    return http.post<string>('AddEmployeeDetails', data)
};

const AddSignUpDetailsApi ={
    APIAddEmployeeDetails,
}

export default AddSignUpDetailsApi;