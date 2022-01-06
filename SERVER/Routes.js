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




module.exports = router;
