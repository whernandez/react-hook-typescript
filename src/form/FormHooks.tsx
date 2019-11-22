import React, {Fragment} from "react";
import {useDispatch, useSelector} from "react-redux";
import useForm, {FormContext} from "react-hook-form";
import Input from './Input';
import * as yup from 'yup';
import {IContact, IContacts} from "../contact/interface";
import {getContactSelector, getContactsSelector} from "../contact/selector";
import {createContact} from "../contact/actions";

const customValidation = yup.object().shape({
    name: yup.string().required("Name is Required!"),
    email: yup.string().required("Email is Required!").email('Invalid Email!')
});

const FormHooks = () => {
    const dispatch = useDispatch();
    const contact: IContact = useSelector(getContactSelector);
    const contacts: IContacts = useSelector(getContactsSelector);

    const methods = useForm({
        validationSchema: customValidation,
        defaultValues: contact
    });

    const {errors} = methods;

    // @ts-ignore
    const onSubmit = (data) => {
        dispatch(createContact(data));
    };

    return (
        <Fragment>
            <FormContext {...methods}> {/*pass all methods into the context*/}
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <Input name={'name'} required/>
                    {errors.name && errors.name!.message}
                    <Input name={'email'} required/>
                    {errors.email && errors.email!.message}
                    <input type="submit"/>
                </form>
            </FormContext>

            <ul>
                {
                    contacts.map((contact : IContact, index : number) => {
                        return (
                            <div key={index}>
                                <li>{contact.name}</li>
                                <li>{contact.email}</li>
                                <hr/>
                            </div>
                        )
                    })
                }
            </ul>
        </Fragment>
    )
};

export default FormHooks;
