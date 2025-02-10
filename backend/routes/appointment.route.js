import { Router } from "express";
import multer from "multer";
import { getAllAppointments, getAppointment, addAppointment, deleteAppointment, updateAppointment } from '../controllers/Appointment.controller.js'

const router = Router();

const upload = multer();

router.route("").get(getAllAppointments)

router.route('/add').post(upload.none(), addAppointment);

router.route('/:id')
            .get(getAppointment)
            .delete(deleteAppointment)
            .put(updateAppointment);

export default router

