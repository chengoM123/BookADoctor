import User from '../Entities/User';

class Patient extends User{
    isInLine = false;
    token = "";
    id: string;
    name: string;

    constructor(i_email: string, i_name: string, i_password: string, i_id: string){
        super(i_email, i_password);
        this.id = i_id;
        this.name = i_name;
    }
}
export default Patient;