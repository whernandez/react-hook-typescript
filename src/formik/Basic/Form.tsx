import * as React from 'react';
import {
    Formik,
    FormikHelpers,
    FormikProps,
    Form,
    Field,
    FieldProps,
} from 'formik';
import {ICompany} from "../../models/CompanyModel";
import FieldValidator from "../FieldValidatorComponent";
import * as Yup from "yup";

const schema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});

interface MyFormValues extends ICompany {}

export const BasicFormik: React.FC<{}> = () => {
    const initialValues: MyFormValues = { name: '', phone: '' };
    return (
        <div>
            <h1>My Example</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values, actions) => {
                    console.log({ values, actions });
                    actions.setSubmitting(false);
                }}
                render={({errors, touched, isSubmitting}:FormikProps<MyFormValues>) => {
                    return (
                        <Form>
                            <FieldValidator error={errors.name} touched={touched.name}>
                                <Field type="input" name="name"/>
                            </FieldValidator>
                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </Form>
                    )
                }}
            />
        </div>
    );
};
