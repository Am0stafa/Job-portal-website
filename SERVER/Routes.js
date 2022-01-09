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
  .get(Controller.JobSearch)
  
router
  .route('/ViewProfile')
  .get(Controller.ViewProfile)
  
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
  .route('/AdminViewFRs')
  .get(Controller.AdminViewFRs)

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



module.exports = router;
