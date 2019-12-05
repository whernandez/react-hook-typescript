import { IsNotEmpty, IsEmail } from 'class-validator';

export default class Contact {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    constructor(_name: string, _email: string) {
        this.name = _name;
        this.email = _email;
    }
    getName() {
        return "Hello, " + this.name;
    }
}
