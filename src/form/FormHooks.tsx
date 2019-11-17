import React from "react";
import useForm, { FormContext } from "react-hook-form";
import Input from './Input';
import * as yup from 'yup';

const customValidation = yup.object().shape({
    name: yup.string().required("Name is Required!"),
    email: yup.string().required("Email is Required!").email('Invalid Email!')
});

const FormHooks = () => {
    const methods = useForm({
        validationSchema: customValidation
    });

    // @ts-ignore
    const onSubmit = data => { console.log(data) }
    const {errors} = methods;

    return (
        <FormContext {...methods} > {/*pass all methods into the context*/}
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <Input name={'name'} required/>
                {errors.name && errors.name!.message}
                <Input name={'email'} required/>
                {errors.email && errors.email!.message}
                <input type="submit" />
            </form>
        </FormContext>
    )
};

export default FormHooks;
