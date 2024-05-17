export interface IAddStudentDetailsBody{
    
    Id:number,
    ClassId: string,
    StudentName:string,
    BirthDate:string,
    Age:number,
    FatherName:string,
    PhoneNo:string,
    MotherName:string,
    PhoneNo2:string,
    SocietyName:string,
    StudentAddress:string,
    Emailid:string,
    ClassDivisionId: string,
    AdmissionDate: string,
    SMS: boolean,
    UserId: number,
    EnquiryDate: string,
};

export interface IGetStudentDetailsBody{
    
        Id: number,
    
};
export interface IGetStudentDetailsResult{
        Id: number,
        Class: null,
        ClassId: number,
        StudentName: string,
        BirthDate: string,
        Age: number,
        FatherName: string,
        PhoneNo: string,
        MotherName: string,
        PhoneNo2: string,
        SocietyName: string,
        StudentAddress: string,
        EmailId: string,
        StudentDetailsId: number,
        SMS: boolean,
        UserId: number,
        InsertedDate: null,
        ClassName: null,
        EnquiryAdmissionDetails: number,
        AdmissionDate: null,
        EnquiryDate: null,
        ClassDivisionId: number,
        ClassDivision: null,
        DivisionName: null

    
}
export interface IGetStudentDetailsListBody{
    
    EnquiryAdmissionDetails:number,
    ClassId: number

};
export interface IGetStudentDetailsListResult{
    Id: number,
    Class: null,
    ClassId: number,
    StudentName: string,
    BirthDate: string,
    Age: number,
    FatherName: string,
    PhoneNo: string,
    MotherName: string,
    PhoneNo2: string,
    SocietyName: string,
    StudentAddress: string,
    EmailId: string,
    StudentDetailsId: number,
    SMS: boolean,
    UserId: number,
    InsertedDate: null,
    ClassName: null,
    EnquiryAdmissionDetails: number,
    AdmissionDate: null,
    EnquiryDate: null,
    ClassDivisionId: number,
    ClassDivision: null,
    DivisionName: null

}
export interface IGetClassNameListResult{
    Id:number
    ClassId: number,
    ClassName: string,
    InsertBy: string,
    TeacherId: string

}
export interface IGetClassDivisionListBody{
    ClassId: number, 
}
export interface IGetClassDivisionListResult{
    ClassId: number,
    ClassName: null,
    DivisionName: string,
    InsertBy: null,
    TeacherId: null,
    UserId: number
}
export interface IDeleteStudentDetailsBody{
    
    Id: number,

};