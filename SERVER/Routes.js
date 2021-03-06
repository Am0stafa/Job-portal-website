const express = require('express');
const Controller = require('./Controller')
const router = express.Router();



router
  .route('/ShowJobs')
  .get(Controller.ShowJobs)
  
router
  .route('/ShowEmployers')
  .get(Controller.ShowEmployers)
  
router
  .route('/JobSearch')
  .post(Controller.JobSearch)
  
router
  .route('/ViewProfile')
  .post(Controller.ViewProfile)
  
router
  .route('/DeleteProfile')
  .delete(Controller.DeleteProfile)

router
  .route('/AdminViewEmps')
  .get(Controller.AdminViewEmps)

router
  .route('/AdminViewJobs')
  .get(Controller.AdminViewJobs)

router
  .route('/h')
  .get(Controller.h)

router
  .route('/AddContact')
  .post(Controller.AddContact)

router
  .route('/AddHR')
  .post(Controller.AddHR)

router
  .route('/ViewProfileStatus')
  .get(Controller.ViewProfileStatus)
  
router
  .route('/AddFaculty')
  .post(Controller.AddFaculty)
  
router
  .route('/AddSemester')
  .post(Controller.AddSemester)
  
router
  .route('/EmpViewJobs')
  .get(Controller.EmpViewJobs)

router
  .route('/EmpViewApplicants')
  .get(Controller.EmpViewApplicants)

router
  .route('/AddMobile')
  .post(Controller.AddMobile)

router
  .route('/ViewMyStatus')
  .get(Controller.ViewMyStatus)

router
  .route('/ViewAdvisors')
  .get(Controller.ViewAdvisors)

router
  .route('/CocViewStudents')
  .get(Controller.CocViewStudents)
  
router
  .route('/getuserID')
  .get(Controller.getuserID)

router
  .route('/ViewProgressReports')
  .get(Controller.ViewProgressReports)

router
  .route('/AdminReviewEmp')
  .patch(Controller.AdminReviewEmp)

router
  .route('/EmpEditProfile')
  .patch(Controller.EmpEditProfile)

router
  .route('/AddFacultyRepToll')
  .patch(Controller.AddFacultyRepToll)

router
  .route('/AdminReviewJob')
  .patch(Controller.AdminReviewJob)

router
  .route('/EmpUpdateApplicant')
  .patch(Controller.EmpUpdateApplicant)

router
  .route('/UserRegister')
  .post(Controller.UserRegister)

router
  .route('/createStudent')
  .post(Controller.createStudent)

router
  .route('/createEmployer')
  .post(Controller.createEmployer)

router
  .route('/createAdmin')
  .post(Controller.createAdmin)

router
  .route('/UserLogin')
  .post(Controller.UserLogin)

router
  .route('/ApplyForJob')
  .post(Controller.ApplyForJob)



module.exports = router;
