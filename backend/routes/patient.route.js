import { Router } from "express";
import multer from "multer";
import { getAllPatients, getPatient, addPatient, deletePatient, updatePatient } from '../controllers/patient.controller.js'

const router = Router();

const upload = multer();

router.route("").get(getAllPatients)

router.route('/add').post(upload.none(), addPatient);

router.route('/:id')
            .get(getPatient)
            .delete(deletePatient)
            .put(updatePatient);

export default router

