import express from 'express';
import controller from '../controllers/vaccineApi';

const router = express.Router();

router.post('/loadVaccineRecords', controller.loadVaccineRecords);
router.get('/vaccine-summary', controller.vaccineSummary);

export = router;
