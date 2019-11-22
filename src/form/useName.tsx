import React, {useState} from "react";

type Name = {
    getName : string;
    setName(formName : string) : void;
    Name() : any
}

const useName : () => Name = () => {

    const [name, setName] = useState("");

    const setFormName = (name : string) => {
        setName(name);
    };

    return {
        get getName() {
            return name;
        },
        setName(formName : string) { setFormName(formName); },
        Name: () => <h1>{`Company Name: ${name}`}</h1>
    }
};

export default useName;
