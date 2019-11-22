import React, {Fragment} from "react";
import useName from "./useName";
import FormHooks from "./FormHooks";

const Form : React.FC<{}> = () => {
    const {Name, setName} = useName();

    return (
        <Fragment>
            <Name/>
            <button onClick={() => setName("React-Hooks-Form Example")}>Change Company Name from local state</button>
            <br/>
            <h1>Contacts</h1>
            <FormHooks/>
        </Fragment>
    )
};

export default Form;
