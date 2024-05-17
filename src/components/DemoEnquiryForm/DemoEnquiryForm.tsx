import React from 'react'
import PageHeader from 'src/library/heading/pageHeader'
import { TextField, Button, Container, Card, Grid, Typography } from '@mui/material';
import RadioButton from 'src/library/RadioButton/RadioButton';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { IAddStudentDetailsBody, IGetStudentDetailsBody, IGetStudentDetailsResult } from 'src/Interface/AddStudentDetails/IAddStudentDetails';
import { useParams } from 'react-router';
import { GetClassNameList } from 'src/requests/AddStudentDetails/RequestAddStudentDetails';
import ErrorMessageForm from 'src/library/ErrorMessage/ErrorMessageForm';

import { IsEmailValid, IsMobileNoValid } from "src/components/Common/util"
import { AddStudentDetailsCDA, DeleteStudent, GetStudentDetails, GetClassDivision } from 'src/requests/AddStudentDetails/RequestAddStudentDetails';
const DemoEnquiryForm = () => {
    const dispatch = useDispatch();
    const { Id } = useParams();
    const [ClassId, setClassId] = useState();

    const GetClass: any = useSelector(
        (state: RootState) => state.AddPhoto.ClassNameList
    );

    const StudentDetails = useSelector(
        (state: RootState) => state.AddStudentDetail.StudentDetails
    );
    console.log(StudentDetails, "StudentDetails")

    const GetStudentDetail = useSelector(
        (state: RootState) => state.AddStudentDetail.StudentDetail
    );
    console.log(GetStudentDetail, "GetStudentDetail")

    const Data = [
        // { value: "0", Name: "" },
        { Value: "1", Name: "PlayGroup" },
        { Value: "2", Name: "Nursery" },
        { Value: "3", Name: "Junior K.G." },
        { Value: "4", Name: "Senior K.G." }
    ]

    const [studentName, setStudentName] = useState('');
    const [studentNameerror, setStudentNameerror] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [birthDateerror, setBirthDateerror] = useState('');
    const [age, setAge] = useState('');
    const [ageerror, setAgeerror] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [fatherNameerror, setFatherNameerror] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [phoneNoerror, setPhoneNoerror] = useState('');
    const [motherName, setMotherName] = useState('');
    const [motherNameerror, setMotherNameerror] = useState('');
    const [phoneNo2, setPhoneNo2] = useState('');
    const [phoneNoerror2, setPhoneNoerror2] = useState('');
    const [societyName, setSocietyName] = useState('');
    const [societyNameerror, setSocietyNameerror] = useState('');
    const [studentAddress, setStudentAddress] = useState('');
    const [studentAddresserror, setStudentAddresserror] = useState('');
    const [email, setEmail] = useState('');
    const [emailerror, setEmailerror] = useState('');
    const [schoolListerror, setSchoolListError] = useState('')
    const [ItemList, setItemList] = useState([])
    const [DivisionList, setDivisionList] = useState([])
    // console.log(OperationType===undefined?0:parseInt(OperationType),"Id")
    const [DivisionName, setDivisionName] = useState('');
    const [Admissiondate, setAdmissiondate] = useState('');
    const [ClassName, setClassName] = useState('');
    const [StudentId, setStudentId] = useState(0);
    const [classId, setclassId] = useState('');
    const [enquirydate, setEnquiryDate] = useState()
    // const AddStudentDetailsBody: IAddStudentDetailsBody =
    // {
    //     Id: Id === undefined ? 0 : parseInt(Id),
    //     ClassId: ClassId,
    //     StudentName: studentName,
    //     BirthDate: birthDate,
    //     Age: parseInt(age),
    //     FatherName: fatherName,
    //     PhoneNo: phoneNo,
    //     MotherName: motherName,
    //     PhoneNo2: phoneNo2,
    //     SocietyName: societyName,
    //     StudentAddress: studentAddress,
    //     Emailid: email,
        

    // }
    const GetStudentDetailsBody: IGetStudentDetailsBody =
    {
        Id: parseInt(Id)
    }

    const onClickClass = (value) => {
        setClassId(value)
    }


    useEffect(() => {
        dispatch(GetClassNameList())
    }, [])

    useEffect(() => {
        if (parseInt(Id) !== 0) {
            dispatch(GetStudentDetails(GetStudentDetailsBody))
        };

    }, []);
    useEffect(() => {
        console.log(GetStudentDetail, "GetStudentDetail")
        if (GetStudentDetail !== null) {
            setClassId(GetStudentDetail.ClassId)
            setStudentId(GetStudentDetail.Id)
            setStudentName(GetStudentDetail.StudentName)
            setBirthDate(GetStudentDetail.BirthDate)
            setAge(GetStudentDetail.Age)
            setFatherName(GetStudentDetail.FatherName)
            setPhoneNo(GetStudentDetail.PhoneNo)
            setMotherName(GetStudentDetail.MotherName)
            setPhoneNo2(GetStudentDetail.PhoneNo2)
            setClassName(GetStudentDetail.ClassName)
            setDivisionName(GetStudentDetail.DivisionName)
            setAdmissiondate(GetStudentDetail.AdmissionDate)
            setSocietyName(GetStudentDetail.societyName)
            setStudentAddress(GetStudentDetail.StudentAddress)
            setEmail(GetStudentDetail.Email)

        }
    }, [GetStudentDetail]);


    const onSubmit = () => {
        let isError = false
        if (studentName === '') {
            setStudentNameerror('This field is required')
            isError = true
        } else {
            setStudentNameerror('')
        }
        if (birthDate === '') {
            setBirthDateerror('This field is required')
            isError = true
        } else {
            setBirthDateerror('')
        }
        if (age === '') {
            setAgeerror('This field is required')
            isError = true
        } else {
            setAgeerror('')
        }
        if (fatherName === '') {
            setFatherNameerror('This field is required')
            isError = true
        } else {
            setFatherNameerror('')
        }
        if (phoneNo === '') {
            setPhoneNoerror('This field is required')
            isError = true
        } else {
            setPhoneNoerror('')
        }
        if (motherName === '') {
            setMotherNameerror('This field is required')
            isError = true
        } else {
            setMotherNameerror('')
        }
        if (phoneNo2 === '') {
            setPhoneNoerror2('This field is required')
            isError = true
        } else {
            setPhoneNoerror2('')
        }
        if (societyName === '') {
            setSocietyNameerror('This field is required')
            isError = true
        } else {
            setSocietyNameerror('')
        }
        if (studentAddress === '') {
            setStudentAddresserror('This field is required')
            isError = true
        } else {
            setStudentAddresserror('')
        }
        if (email === '') {
            setEmailerror('This field is required')
            isError = true
        } else {
            setEmailerror('')
        }

        // if (!isError) {
        //     dispatch(AddStudentDetailsCDA(AddStudentDetailsBody));
        // }
        if (!isError) {
            ResetForm()
        }
    }

    const ResetForm = () => {
        setStudentName('')
        setBirthDate('')
        setAge('')
        setFatherName('')
        setPhoneNo('')
        setMotherName('')
        setPhoneNo2('')
        setSocietyName('')
        setStudentAddress('')
        setEmail('')
        //setChecked(false)
        setItemList(prev => prev.map((item) => { return { ...item, IsActive: false } }))

    }
    const onChangephoneNo = (e) => {
        // const input=e.target.value;
        const input = e.target.value;
        const regex = /^[0-9\b]+$/;
        if (input === "" || (regex.test(input) && input.length <= 10)) {
            setPhoneNo(input);
        }
        // setPhoneNumber(checkIsNumber(e.target.value))
    };

    const onChangephoneNo2 = (e) => {
        const input = e.target.value;
        const regex = /^[0-9\b]+$/;
        if (input === "" || (regex.test(input) && input.length <= 10)) {
            setPhoneNo2(input);
        }
    };


    function onBlurEmail(value) {
        const emailRegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{1,3})+$/;
        if (!value) {
            return 'Email Address is Mandatory.';
        }
        else if (!emailRegExp.test(value)) {
            return 'Please enter valid email address';
        }
        return ''
    }

    const onBirthDateChange = (value) => {
        setBirthDate(value)
        const currentDate = new Date();
        if (!isNaN(Date.parse(birthDate))) {
            const current = new Date(value);
            setAge((currentDate.getFullYear() - current.getFullYear()).toString());
        } else
            setAge('')
    }

    const onBlurPhoneNumber = (value) => {
        if (value === "") {
            setPhoneNoerror("Please enter 10 digit Phone Number")
        }
        else {
            setPhoneNoerror(IsMobileNoValid(value))
        }
    }

    return (
        <Container>

            <Card>
                <PageHeader heading='Demo EnquiryForm' />
                <RadioButton Itemlist={Data}
                    ClickRadio={onClickClass}
                    defaultValue={ClassId}
                    Label={'Select Class'} />
                <TextField value={studentName} onChange={(e) => { setStudentName(e.target.value) }} label={'StudentName'} />
                <ErrorMessageForm error={studentNameerror} />
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField value={birthDate} type='date' onChange={(e) => { onBirthDateChange(e.target.value) }} label={'Birth Date'} focused />
                        <ErrorMessageForm error={birthDateerror} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField value={age} type="text" disabled label={'Age'} />
                        <ErrorMessageForm error={ageerror} />
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField value={fatherName} onChange={(e) => { setFatherName(e.target.value) }} label={'FatherName'} />
                        <ErrorMessageForm error={fatherNameerror} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField value={phoneNo}
                            type="text"
                            onChange={(e) => onChangephoneNo(e)}
                            onBlur={(e) => { onBlurPhoneNumber(e.target.value) }}
                            error={phoneNoerror !== ''}
                            helperText={phoneNoerror}
                            label={'PhoneNo'} />
                    </Grid>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField value={motherName} onChange={(e) => { setMotherName(e.target.value) }} label={'MotherName'} />
                        <ErrorMessageForm error={motherNameerror} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField value={phoneNo2} onChange={(e) => onChangephoneNo2(e)}
                            onBlur={(e) => { onBlurPhoneNumber(e.target.value) }}
                            // onBlur={(e) => { setPhoneNoerror2(IsMobileNoValid(e.target.value)) }}
                            error={phoneNoerror2 !== ''}
                            helperText={phoneNoerror2}
                            label={'PhoneNo2'} />
                    </Grid>
                </Grid>

                <TextField value={societyName} onChange={(e) => { setSocietyName(e.target.value) }} label={'SocietyName'} />
                <ErrorMessageForm error={societyNameerror} />
                <TextField value={studentAddress} onChange={(e) => { setStudentAddress(e.target.value) }} label={'StudentAddress'} />
                <ErrorMessageForm error={studentAddresserror} />

                <TextField value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                    onBlur={(e) => { setEmailerror(onBlurEmail(e.target.value)) }}
                    error={emailerror !== ''}
                    helperText={emailerror}
                    label={'Emailid'} />

                <Button onClick={onSubmit}>Submit</Button>
            </Card>
            <br></br>

        </Container>
    )
}




export default DemoEnquiryForm
