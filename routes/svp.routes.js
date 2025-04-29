import express from 'express'
import { 
    LoginIndex,
    GetDashboard,
    AddStudentDetails,
    BulkUpload,
    GetStudentsDetails,
    UpdateStudentDetails,
    StudentVaccinated,
    VaccinationDriveManagement,
    GetDrives,
    GetDriveDetails,
    UpdateDriveDetails,
    DeleteDriveDetails,
    GetVaccinationReport,
    DownloadReport} from '../controllers/login.controllers'

const router = express.Router()


// Coordinator login 
router.post('/api/login' ,LoginIndex )

// To get Dashboard summary
router.get('/api/dashboard/summary' ,GetDashboard )

//Student management add details
router.post('/api/students' ,AddStudentDetails)

//bulk upload
router.post('/api/students/bulk-upload' ,BulkUpload )

//Get student details
router.get('/api/students' ,GetStudentsDetails )

//update student details
router.put('/api/students/:id' ,UpdateStudentDetails )

//mark student as vaccinated or not
router.post('/api/students/:id/vaccinate' , StudentVaccinated)

//vaccination drive management
router.post('/api/drives' ,VaccinationDriveManagement )

//Get drives 
router.get('/api/drives' ,GetDrives )

// Get drive details 
router.get('/api/drives/:id' ,GetDriveDetails )

//Update drive details
router.put('/api/drives/:id' ,UpdateDriveDetails )

//Delete drive details
router.delete('/api/drives/:id' ,DeleteDriveDetails )

//get vaccination report
router.get('/api/reports' ,GetVaccinationReport )

//download report
router.get('/api/reports/download' ,DownloadReport )


export default router;