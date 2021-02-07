import User from '../Entities/User';

class Doctor extends User{
    isActive = false;
    waitingCounter = 0;
    name: string;
    specialization: string;

    constructor(i_email: string, i_name: string, i_password: string, i_specialization: string){
        super(i_email, i_password);
        this.name = i_name;
        this.specialization = i_specialization;
    }
}

export default Doctor;