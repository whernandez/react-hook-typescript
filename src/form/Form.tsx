import React, {Fragment} from "react";
import useForm from "./Create";
import FormHooks from "./FormHooks";

const Form : React.FC<{}> = () => {

    const {Form, setName, getName} = useForm();

    console.log(getName);
    return (
        <Fragment>
            <Form/>
            <button onClick={() => setName('Jose')}>Change Form Name</button>
            <FormHooks/>
        </Fragment>
    )
};

export default Form;
