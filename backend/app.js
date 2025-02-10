import express from "express"
import cors from "cors"


const app = express()

app.use(cors({
    // origin: process.env.CORS_ORIGIN,
    origin: 'http://localhost:4200',
    credentials: true,
}));

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))

// Import routes
import patientRoutes from './routes/patient.route.js';
import doctorRoutes from './routes/doctor.route.js';
import appointmentRoutes from './routes/appointment.route.js';

// Routes
app.use("/api/patient", patientRoutes);
app.use("/api/doctor", doctorRoutes);
app.use("/api/appointment", appointmentRoutes);


export { app };