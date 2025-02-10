import mongoose, {Schema} from "mongoose";

const doctorSchema = new Schema({
    name: { type: String, required: true },
    speciality: { type: String, required: true },
});

export const Doctor = mongoose.model("Doctor", doctorSchema);
