import mongoose, {Schema} from "mongoose";

const appointmentSchema = new Schema({
    patient: { type: String, required: true },
    doctor: { type: String, required: true },
    appointmentDate: { type: Date, required: true },
});

export const Appointment = mongoose.model("Appointment", appointmentSchema);