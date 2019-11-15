import React from 'react';
import * as Yup from 'yup';
import {withFormik, FormikProps, FormikErrors, Form, Field, FieldArray} from 'formik';
import FieldValidator from '../FieldValidatorComponent';
import {ICompany, IContacts, IContact} from "../../models/CompanyModel";

const schema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});

// Shape of form values
interface IFormValues extends ICompany {
    contacts?: Array<IContacts> | []
}

interface IOtherProps extends ICompany {
    message?: string;
    contacts?: Array<IContacts> | []
}

// Aside: You may see InjectedFormikProps<OtherProps, FormValues> instead of what comes below in older code.. InjectedFormikProps was artifact of when Formik only exported a HoC. It is also less flexible as it MUST wrap all props (it passes them through).
const InnerForm = (props: IOtherProps & FormikProps<IFormValues>) => {
    const {touched, errors, isSubmitting, message, contacts} = props;
    return (
        <Form>
            {message}
            <br/>
            <FieldValidator error={errors.name} touched={touched.name}>
                <Field type="input" name="name"/>
            </FieldValidator>
            <FieldValidator error={errors.phone} touched={touched.phone}>
                <Field type="phone" name="phone"/>
            </FieldValidator>
            <br/>
            <FieldArray
                name="contacts"
                render={arrayHelpers => {
                    console.log(arrayHelpers);
                    return (
                        <div>
                            {/*{
                                contacts &&
                                contacts.map((contact:object, index:number) => {
                                    return (
                                        <div key={index}>
                                            <Field name={`contacts[${index}].fullName`} type={'input'}/>
                                            <Field name={`contacts.${index}.phone`} type={'input'}/>
                                            <button type="button" onClick={() => arrayHelpers.remove(0)}>
                                                -
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => arrayHelpers.push({
                                                    fullName: 'New Comp',
                                                    phone: '809999'
                                                })}
                                            >
                                                +
                                            </button>
                                        </div>
                                    )
                                })
                            }*/}
                        </div>
                    )
                }}
            />
            <button type="submit" disabled={isSubmitting}>
                Submit
            </button>
        </Form>
    );
};

// The type of props MyForm receives
interface IMyFormProps extends ICompany {
    message?: string; // if this passed all the way through you might do this or make a union type
    // contacts?: []
}

// Wrap our form with the using withFormik HoC
const MyForm = withFormik<IMyFormProps, IFormValues>({
    enableReinitialize: true,
    // Transform outer props into form values
    mapPropsToValues: props => {
        return {
            name: props.name ? props.name : '',
            phone: props.phone ? props.phone : '',
            // contacts: props.contacts ? props.contacts : []
        };
    },
    validationSchema: schema,
    // Add a custom validation function (this can be async too!)
    // validate: (values: FormValues) => {
    //     let errors: FormikErrors<FormValues> = {};
    //     if (!values.email) {
    //         errors.email = 'Required';
    //     }
    //     return errors;
    // },

    handleSubmit: values => {
        console.log(values)
        // do submitting things
    },
})(InnerForm);

// Use <MyForm /> wherevs
const BasicForm = ({...props}: IMyFormProps) => {
    return (
        <div>
            <h1>Formik</h1>
            <MyForm message="Company Form" {...props}/>
        </div>
    )
};

export default BasicForm;
