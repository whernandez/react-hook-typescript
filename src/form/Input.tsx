import * as React from "react";
import { useFormContext } from "react-hook-form";

type InputProps = {
    name : string;
    required? : boolean
}
const Input : React.FC<InputProps> = ({name, required}) => {
    const {register} = useFormContext();
    return <input name={name} ref={register({required})} />;
};

export default Input;
