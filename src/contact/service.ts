import {transformAndValidate} from "class-transformer-validator";

import Contact from "../form/Contact";

export const fetchContactService:Function = async () => {
    // @ts-ignore
    const response = await fetchAPIContact();
    // transform the JSON to class instance and validate it correctness
    transformAndValidate(Contact, response)
        .then((contact: Contact) => {
            // now you can access all your class prototype method
            console.log(contact.getName()); // prints "Hello World!" on console
        })
        .catch(err => {
            // here you can handle error on transformation (invalid JSON)
            // or validation error (e.g. invalid email property)
            console.error(err);
        });

};

const fetchAPIContact = () => {
    return Promise.resolve({
        name: ''
    });
}
