import React, {useState} from "react";

type Form = {
    getName : string;
    setName(formName : string) : void;
    Form() : any
}

const useForm : () => Form = () => {

    const [form, setName] = useState("Wandy");

    const setFormName = (name : string) => {
        setName(name);
    };

    return {
        get getName() {
            return form;
        },
        setName(formName : string) { setFormName(formName); },
        Form: () => <h1>{`Form Name: ${form}`}</h1>
    }
};

export default useForm;
