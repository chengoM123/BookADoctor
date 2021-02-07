import Doctor from '../Entities/Doctor';
import Patient from '../Entities/Patient';

class Appointment{
    patient: Patient;
    doctor: Doctor;
    time: string;


    constructor(doc: Doctor, pat: Patient, time: string){
        this.patient = pat;
        this.doctor = doc;
        this.time = time;
    }
}

export default Appointment;