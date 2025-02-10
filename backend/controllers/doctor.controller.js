import { Doctor } from '../models/doctor.model.js'



// Get all doctors
const getAllDoctors =  async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.status(200).json(doctors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get doctor by ID
const getDoctor = async (req, res) => {
    const doctorId = req.params.id;
    try {
         // Find the doctor by ID in the database
         const doctor = await Doctor.findById(doctorId);
         if (!doctor) {
             return res.status(404).json({ message: "Doctor not found" });
         }
        res.status(200).json(doctor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Add a new doctor
const addDoctor =  async (req, res) => {
    const doctor = new Doctor({
        name: req.body.name,
        speciality: req.body.speciality,
    });
    try {
        const newDoctor = await doctor.save();
        console.log(newDoctor);
        res.status(201).json(newDoctor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a doctor by ID
const deleteDoctor =  async (req, res) => {
    try {
        await Doctor.findByIdAndDelete(req.params.id);
        res.json({ message: "Doctor deleted" });
    } catch (error) {
        console.error("Error deleting doctor:", error);
        res.status(500).json({ message: error.message });
    }
};

// Update a doctor by ID
const updateDoctor = async (req, res) => {
    const doctorId = req.params.id;
    const { name, speciality } = req.body;

    try {
        // Find the doctor by ID in the database
        const doctor = await Doctor.findById(doctorId);
        if (!doctor) {
            return res.status(404).json({ message: "Doctor not found" });
        }

        // Update the doctor properties
        doctor.name = name;
        doctor.speciality = speciality;

        // Save the updated doctor
        await doctor.save();
        console.log(doctor);

        // You can send the updated doctor details in the response
        res.json(doctor);
    } catch (error) {
        console.error("Error updating doctor details:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export {
    getAllDoctors,
    getDoctor,
    addDoctor,
    updateDoctor,
    deleteDoctor
}