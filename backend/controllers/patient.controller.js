import { Patient } from "../models/patient.model.js"


const getAllPatients = async (req, res) => {
    try {
        const patients = await Patient.find();
        res.status(200).json(patients);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const getPatient = async (req, res) => {
    const patientId = req.params.id;
    try {
         // Find the patient by ID in the database
         const patient = await Patient.findById(patientId);
         if (!patient) {
             return res.status(404).json({ message: "Patient not found" });
         }
        res.status(200).json(patient);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const addPatient = async (req, res) => {
    const {name, age, gender} = req.body;
    const patient = new Patient({ name, age, gender })
    // const patient = new Patient({
    //     name: req.body.name,
    //     age: req.body.age,
    //     gender: req.body.gender,
    // });
    console.log('newPatient', req.body);
    try {
        const newPatient = await patient.save();
        // const newPatient = await Patient.create(patient);
        console.log(newPatient);
        res.status(201).json(newPatient);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const deletePatient = async (req, res) => {
    try {
        await Patient.findByIdAndDelete(req.params.id);
        res.json({ message: "Patient deleted" });
    } catch (error) {
        console.error("Error deleting patient:", error);
        res.status(500).json({ message: error.message });
    }
}

const updatePatient = async (req, res) => {
    const patientId = req.params.id;
    const { name, age, gender } = req.body;

    try {
        // Find the patient by ID in the database
        const patient = await Patient.findById(patientId);
        if (!patient) {
            return res.status(404).json({ message: "Patient not found" });
        }

        // Update the patient properties
        patient.name = name;
        patient.age = age;
        patient.gender = gender;

        // Save the updated patient
        await patient.save();
        console.log(patient);

        // You can send the updated patient details in the response
        res.json(patient);
    } catch (error) {
        console.error("Error updating patient details:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
export { getAllPatients, getPatient, addPatient, deletePatient, updatePatient }