import mongoose, {Schema} from "mongoose";

const patientSchema = new Schema({
    name: { type: String, required: true },
    age: { type: String, required: true },
    gender: { type: String, required: true },
});

// In DB the document/table name becomes plural with lowercase for eg. Patient become patients
export const Patient = mongoose.model("Patient", patientSchema); 
