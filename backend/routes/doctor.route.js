import { Router } from 'express'
import multer from "multer";
import { getAllDoctors, getDoctor, addDoctor, updateDoctor, deleteDoctor } from '../controllers/doctor.controller.js'

const router = Router();

const upload = multer();

router.route('').get(getAllDoctors);

router.route('/add').post(upload.none(), addDoctor);

router.route('/:id').get(getDoctor)
                    .post(updateDoctor)
                    .delete(deleteDoctor)


export default router;
