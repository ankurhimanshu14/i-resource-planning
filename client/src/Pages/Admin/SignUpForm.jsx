import React from 'react';
import FormBuilder from '../../Components/FormBuilder';
import useCustomForm from '../../CustomHooks/useCustomForm';
import SignUpFields from '../../Config/SignUpFields';

const SignUpForm = () => {

    const initialValues = {
        fullName: '',
        email: '',
        username: '',
        password: ''
    };

    const { values, errors, handleChange, handleSubmit } = useCustomForm({
        initialValues,
        onSubmit: values => console.log({values})
    });
    
    return (
        <>
        <FormBuilder items = {SignUpFields} handleChange={handleChange} />
        <button onClick = {handleSubmit}> Register</button>
        </>
    )

};

export default SignUpForm;