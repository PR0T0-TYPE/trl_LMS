// export interface IGettEmployeeBody
// {

    
// }
// export interface IGettEmployeeResult
// {
//     EmployeeId:Number
//     EmployeeName:string,
//     MobileNumber: string,
//     Email: string,
//     Createpassword: string,
//     Confirmpassword: string,
//     CurrentAddress: string,
//     Qualification: string,
//     DOB: string,
//     Dateofjoining:string,
//     Pincode: string,
//     Designation:string,
//     Year_of_Passout: string,
//     Trainingmode: string,
//     // DesignationId: string,
//     DesignationName: string,
// }

export interface IDeleteEmployeeBody
{
    EmployeeId:number
}
export interface IDeleteEmployeeResult
{

}


export interface IGetEmployeeDetailsBody
{
    EmployeeID : number
}

export interface IGetEmployeeDetailsResult
{
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

export interface IEditEmployeeDetailsResult
{

}

export interface IEditEmployeeDetailsBody
{
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
    
 export interface IgetEmployeeListBody
 {

 }
export interface IgetEmployeeListResult
    {
        EmployeeID: number,
        EmployeeName: string,
        DesignationRole: string
    }

export interface IgetFilteredEmployeeListBody
{
    DesignationId:number
}

export interface IgetFilteredEmployeeListResult
{
    EmployeeID: number,
    EmployeeName: string,
    DesignationRole: string
}
export interface IGetDesignationListBody
{

}
export interface IGetDesignationListResult
{
    DesignationId: string,
    DesignationRole: string,
}


export interface IAddBatchBody {

    "BatchName": string,
    "StartDateNewBatch": string

}
export interface IAddBatchResult {
    BatchName: String
}