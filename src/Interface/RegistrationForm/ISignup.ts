//1 when we add all details in signup & click on signup btn we get msg from database that added successfull!! so need this API
export interface IAddEmployeeDetailsBody{
    EmployeeID:Number,
    EmployeeName:string,
    MobileNumber:string,
    Email:string,
    Createpassword:string,
    Confirmpassword:string,
    CurrentAddress:string,
    QualificationID:string,
    DOB:string,
    Dateofjoining:string,
    Pincode:string,
    DesignationId:string,
    Year_of_Passout:string,
    TrainingId:string


}

export interface IAddEmployeeDetailsResult{
 string
}
//2 Training mode DD  have no body, only have result
export interface IgetTrainingModeListBody{

}

export interface IgetTrainingModeListResult{
//Name: any
EmployeeID: number,
EmployeeName: string,
MobileNumber: string,
Email: string,
Createpassword: string,
Confirmpassword: string,
CurrentAddress: string,
Qualification: string,
QualificationID: string,
DOB: string,
Dateofjoining: string,
Pincode: string,
DesignationRole: string,
DesignationId:string,
Year_of_Passout: string,
Trainingmode: string,
TrainingId: string


}

//3 Designation Dropdown have no body, only have result
export interface IgetDesignationDDBody{

}

export interface IgetDesignationDDResult{
//Name: any
EmployeeID: number,
EmployeeName: string,
MobileNumber: string,
Email: string,
Createpassword: string,
Confirmpassword: string,
CurrentAddress: string,
Qualification: string,
QualificationID: string,
DOB: string,
Dateofjoining: string,
Pincode: string,
DesignationRole: string,
DesignationId:string,
Year_of_Passout: string,
Trainingmode: string,
TrainingId: string

}


//4 Qualification Dropdown have no body, only have result
export interface IgetQualificationDDBody{

}

//4.Qualification DD have no body, only have result
export interface IgetQualificationDDResult{
//Name: any
EmployeeID: number,
EmployeeName: string,
MobileNumber: string,
Email: string,
Createpassword: string,
Confirmpassword: string,
CurrentAddress: string,
Qualification: string,
QualificationID: string,
DOB: string,
Dateofjoining: string,
Pincode: string,
DesignationRole: string,
DesignationId:string,
Year_of_Passout: string,
Trainingmode: string,
TrainingId: string

}

//5. want to get/ show employee list on page so we will not pass body coz we have already add Employee, so now we will get emp List result so can take only result also ehre

export interface IgetEmployeeListDetailsBody{

}

export interface IgetEmployeeListDetailsResult{
EmployeeID: number,
EmployeeName:string,
MobileNumber:string,
Email:string,
Createpassword:string
Confirmpassword:string,
CurrentAddress:string,
QualificationID:number,
Qualification:string,
DOB:string,
Dateofjoining:string,
Pincode:string,
DesignationId:number,
DesignationRole:string,
Year_of_Passout:string,
TrainingId:number,
Trainingmode:string
}


//5.a delete 1 emp from Emp list pg
export interface IDeleteOneEmplListBody{
EmployeeID: number
}

export interface  IDeleteOneEmpListResult {
string
}

//6.a get Employee details by Id on Profile page
export interface IGeteditEmpDetailsOfProfileBody{
EmployeeID : number
}

export interface IGeteditEmpDetailsOfProfileResult{

    // EmployeeID: Number,
    // EmployeeName: string,
    // MobileNumber: string,
    // Email: string,
    // Createpassword: string,
    // Confirmpassword: string,
    // CurrentAddress: string,
    // QualificationID: Number,
    // Qualification: string,
    // DOB: string,
    // Dateofjoining: string,
    // Pincode: string,
    // DesignationId: Number,
    // DesignationRole: string,
    // Year_of_Passout: string,
    // TrainingMode: string,
    // TrainingId: Number

EmployeeID: Number,
EmployeeName: string,
MobileNumber: string,
Email: string,
Createpassword: string,
Confirmpassword: string,
CurrentAddress: string,
DOB: string,
Dateofjoining:string,
Pincode: string,
Year_of_Passout: string,
QualificationID: string,
DesignationId: string,
TrainingId: string,
        
}

//6.b Save Button - EditSuccessfullMsg - Profile pg
export interface IGeteditmsgOfProfileBody{
//    EmployeeID:number,
//    EmployeeName:string,
//    MobileNumber:string,
//    Email:string,
//    Createpassword:string,
//    Confirmpassword:string,
//    CurrentAddress:string,
//    QualificationID:Number,
//    DOB:string,
//    Dateofjoining:string,
//    Pincode:string,
//    DesignationId:Number,
//    Year_of_Passout:string,
//    TrainingId:Number

EmployeeID:Number,
EmployeeName:string,
MobileNumber:string,
Email:string,
Createpassword:string,
Confirmpassword:string,
CurrentAddress:string,
QualificationID:string,
DOB:string,
Dateofjoining:string,
Pincode:string,
DesignationId:string,
Year_of_Passout:string,
TrainingId:string
}
export interface IGeteditmsgOfProfileResult{
string
}

