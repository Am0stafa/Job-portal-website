const config = require('./dbConfig');
const sql = require('mssql');

exports.ShowJobs = async (req, res) => {
    try{
    
        let pool = await sql.connect(config)
        console.log('database connected')
        let jobs =await pool.request().execute('showjobs')
        
        res.status(200).json({
            status: 'success',
            results: jobs.recordset.length,
              data: {
                jobs   
              }
          });
    }catch(err){
    
        res.status(404).json({
            status:"faild",
            message:err.message
                                                                                            
          })
    }

}

exports.ShowEmployers = async (req, res) => {
    try{
    
        let pool = await sql.connect(config)
        console.log('database connected')
        let data =await pool.request().execute('ShowEmployers')
        
        res.status(200).json({
            status: 'success',
            results: data.recordset.length,
              data: {
                data   
              }
        });
    }catch(err){
    
        res.status(404).json({
            status:"faild",
            message:err.message
                                                                                            
        })
    }

}

exports.JobSearch = async (req, res) => {
    try{
    
        let pool = await sql.connect(config)
        console.log('database connected')
        let data =await pool
                            .request()
                            .input('semester', sql.Int, req.body.semester)
                            .input('allowed_faculty',sql.VarChar(20),req.body.allowed_faculty)
                            .execute('JobSearch')
        
        res.status(200).json({
            status: 'success',
            results: data.recordset.length,
              data: {
                data   
              }
          });
    }catch(err){
    
        res.status(404).json({
            status:"faild",
            message:err.message
                                                                                            
          })
    }

}

exports.ViewProfile = async (req, res) => {
    try{
    
        let pool = await sql.connect(config)
        console.log('database connected')
        let data =await pool
                            .request()
                            .input('user_id', sql.Int, req.body.userId)
                            .execute('ViewProfile')
        
        res.status(200).json({
            status: 'success',
            results: data.recordset.length,
              data: {
                data   
              }
          });
    }catch(err){
    
        res.status(404).json({
            status:"faild",
            message:err.message
                                                                                            
          })
    }

}

exports.DeleteProfile = async (req, res) => {
    try{
    
        let pool = await sql.connect(config)
        console.log('database connected')
        let data =await pool
                            .request()
                            .input('user_id', sql.Int, req.body.userId)
                            .execute('DeleteProfile')
        
        res.status(200).json({
            status: 'success',
            results: 'deleted sucessfully'
          });
    }catch(err){
    
        res.status(404).json({
            status:"faild",
            message:err.message
                                                                                            
          })
    }

}

exports.AdminViewEmps = async (req, res) => {
    try{
    
        let pool = await sql.connect(config)
        console.log('database connected')
        let data =await pool
                            .request()
                            .execute('AdminViewEmps')
        
        res.status(200).json({
            status: 'success',
            results: data.recordset.length,
              data: {
                data   
              }
          });
    }catch(err){
    
        res.status(404).json({
            status:"faild",
            message:err.message
                                                                                            
          })
    }

}

exports.AdminViewJobs = async (req, res) => {
    try{
    
        let pool = await sql.connect(config)
        console.log('database connected')
        let data =await pool
                            .request()
                            .execute('AdminViewJobs')
        
        res.status(200).json({
            status: 'success',
            results: data.recordset.length,
              data: {
                data   
              }
          });
    }catch(err){
    
        res.status(404).json({
            status:"faild",
            message:err.message
                                                                                            
          })
    }

}

exports.AdminViewFRs = async (req, res) => {
    try{
    
        let pool = await sql.connect(config)
        console.log('database connected')
        let data =await pool
                            .request()
                            .execute('AdminViewFRs')
        
        res.status(200).json({
            status: 'success',
            results: data.recordset.length,
              data: {
                data   
              }
          });
    }catch(err){
    
        res.status(404).json({
            status:"faild",
            message:err.message
                                                                                            
          })
    }

}

exports.AddContact = async (req, res) => {
    try{
    
        let pool = await sql.connect(config)
        console.log('database connected')
        let data =await pool
                            .request()
                            .input('emp_id', sql.Int, req.body.emp_id)
                            .input('name', sql.VarChar(20), req.body.name)
                            .input('job_title', sql.VarChar(20), req.body.job_title)
                            .input('email', sql.VarChar(20), req.body.email)
                            .input('mobile_number', sql.VarChar(20), req.body.mobile_number)
                            .input('fax', sql.VarChar(20), req.body.fax)
                            .execute('AddContact')
        
        res.status(200).json({
            status: 'success',
            results:'data inserted sucessfully in Contact_person table'
              
          });
    }catch(err){
    
        res.status(404).json({
            status:"faild",
            message:err.message
                                                                                            
          })
    }

}

exports.AddHR = async (req, res) => {
    try{
    
        let pool = await sql.connect(config)
        console.log('database connected')
        let data =await pool
                            .request()
                            .input('emp_id', sql.Int, req.body.emp_id)
                            .input('name', sql.VarChar(20), req.body.name)
                            .input('email', sql.VarChar(20), req.body.email)
                            .execute('AddHR')
        
        res.status(200).json({
            status: 'success',
            results:'data inserted sucessfully in HR_Director table'
              
          });
    }catch(err){
    
        res.status(404).json({
            status:"faild",
            message:err.message
                                                                                            
        })
    }

}

exports.ViewProfileStatus = async (req, res) => {
    try{
    
        let pool = await sql.connect(config)
        console.log('database connected')
        let data =await pool
                            .request()
                            .input('emp_id', sql.Int, req.body.emp_id)
                            .output('status', sql.VarChar(255))
                            .output('reason', sql.VarChar(100))
                            .execute('ViewProfileStatus')
        
        res.status(200).json({
            status: 'success',
             data: data.output
        });
        
    }catch(err){
    
        res.status(404).json({
            status:"faild",
            message:err.message
                                                                                            
        })
    }

}

exports.AddFaculty = async (req, res) => {
    try{
    
        let pool = await sql.connect(config)
        console.log('database connected')
        let data =await pool
                            .request()
                            .input('job_id', sql.Int, req.body.job_id)
                            .input('allowed_faculty',sql.VarChar(20), req.body.allowed_faculty)
                            .execute('AddFaculty')
        
        res.status(200).json({
            status: 'success',
            results:'data inserted sucessfully in Allowed_faculties table'
        });
        
    }catch(err){
    
        res.status(404).json({
            status:"faild",
            message:err.message
                                                                                            
        })
    }

}

exports.AddSemester = async (req, res) => {
    try{
    
        let pool = await sql.connect(config)
        console.log('database connected')
        let data =await pool
                            .request()
                            .input('job_id', sql.Int, req.body.job_id)
                            .input('semester',sql.Int, req.body.semester)
                            .execute('AddSemester')
        
        res.status(200).json({
            status: 'success',
            results:'data inserted sucessfully in Required_semesters table'
        });
        
    }catch(err){
    
        res.status(404).json({
            status:"faild",
            message:err.message
                                                                                            
        })
    }

}

exports.EmpViewJobs = async (req, res) => {
    try{
    
        let pool = await sql.connect(config)
        console.log('database connected')
        let data =await pool
                            .request()
                            .input('emp_id', sql.Int, req.body.emp_id)
                            .execute('EmpViewJobs')
        
        res.status(200).json({
            status: 'success',
            results: data.recordset.length,
             data:{ 
                    data
             }
             
        });
        
    }catch(err){
    
        res.status(404).json({
            status:"faild",
            message:err.message
                                                                                            
        })
    }

}

exports.EmpViewApplicants = async (req, res) => {
    try{
    
        let pool = await sql.connect(config)
        console.log('database connected')
        let data =await pool
                            .request()
                            .input('emp_id', sql.Int, req.body.emp_id)
                            .input('job_id', sql.Int, req.body.job_id)
                            .execute('EmpViewApplicants')
        
        res.status(200).json({
            status: 'success',
            results: data.recordset.length,
             data:{ 
                    data
             }
             
        });
        
    }catch(err){
    
        res.status(404).json({
            status:"faild",
            message:err.message
                                                                                            
        })
    }

}

exports.AddMobile = async (req, res) => {
    try{
    
        let pool = await sql.connect(config)
        console.log('database connected')
        let data =await pool
                            .request()
                            .input('sid', sql.Int, req.body.sid)
                            .input('mobileNumber',sql.VarChar(20), req.body.mobileNumber)
                            .execute('AddMobile')
        
        res.status(200).json({
            status: 'success',
            results:'data inserted sucessfully in Student_phoneNumber table'
        });
        
    }catch(err){
    
        res.status(404).json({
            status:"faild",
            message:err.message
                                                                                            
        })
    }

}

//!
exports.ViewMyStatus = async (req, res) => {
    try{
    
        let pool = await sql.connect(config)
        console.log('database connected')
        let data =await pool
                            .request()
                            .input('sid', sql.Int, req.body.sid)
                            .input('job_id', sql.Int, req.body.job_id)
                            .output('application_status', sql.VarChar(255))
                            .execute('ViewMyStatus')
        
        res.status(200).json({
            status: 'success',
             data: data.output
        });
        
    }catch(err){
    
        res.status(404).json({
            status:"faild",
            message:err.message
                                                                                            
        })
    }

}


exports.ViewAdvisors = async (req, res) => {
    try{
    
        let pool = await sql.connect(config)
        console.log('database connected')
        let data =await pool
                            .request()
                            .execute('ViewAdvisors')
        
        res.status(200).json({
            status: 'success',
             data:{ data}
        });
        
    }catch(err){
    
        res.status(404).json({
            status:"faild",
            message:err.message
                                                                                            
        })
    }

}

exports.CocViewStudents = async (req, res) => {
    try{
    
        let pool = await sql.connect(config)
        console.log('database connected')
        let data =await pool
                            .request()
                            .input('ii_id', sql.Int, req.body.ii_id)
                            .execute('CocViewStudents')
        
        res.status(200).json({
            status: 'success',
             data:{ data}
        });
        
    }catch(err){
    
        res.status(404).json({
            status:"faild",
            message:err.message
                                                                                            
        })
    }

}

exports.ViewProgressReports = async (req, res) => {
    try{
    
        let pool = await sql.connect(config)
        console.log('database connected')
        let data =await pool
                            .request()
                            .input('advisor_id', sql.Int, req.body.advisor_id)
                            .execute('ViewProgressReports')
        
        res.status(200).json({
            status: 'success',
             data:{ data}
        });
        
    }catch(err){
    
        res.status(404).json({
            status:"faild",
            message:err.message
                                                                                            
        })
    }

}

exports.AdminReviewEmp = async (req, res) => {
    try{
    
        let pool = await sql.connect(config)
        console.log('database connected')
        let data =await pool
                            .request()
                            .input('admin_id', sql.Int, req.body.admin_id)
                            .input('emp_id', sql.Int, req.body.emp_id)
                            .input('profile_status', sql.Bit, req.body.profile_status)
                            .input('reason', sql.VarChar(100), req.body.reason)
                            .execute('AdminReviewEmp')
        
        res.status(200).json({
            status: 'success',
             result:'employer accpeted/reqected successfully'
        });
        
    }catch(err){
    
        res.status(404).json({
            status:"faild",
            message:err.message
                                                                                            
        })
    }

}

exports.EmpEditProfile = async (req, res) => {
//in complete
    try{
    
        let pool = await sql.connect(config)
        console.log('database connected')
        let data =await pool
                            .request()
                            .input('id', sql.Int, req.body.id)
                            .input('password', sql.VarChar(8), req.body.password)
                            .input('address', sql.VarChar(10), req.body.address)
                            .input('company_name', sql.VarChar(10), req.body.company_name)
                            .input('company_name', sql.VarChar(10), req.body.company_name)
                            .execute('EmpEditProfile')
        
        res.status(200).json({
            status: 'success',
             result:'profile updated successfully'
        });
        
    }catch(err){
    
        res.status(404).json({
            status:"faild",
            message:err.message
                                                                                            
        })
    }

}

exports.AddFacultyRepToll = async (req, res) => {
    try{
    
        let pool = await sql.connect(config)
        console.log('database connected')
        let data =await pool
                            .request()
                            .input('job_id', sql.Int, req.body.job_id)
                            .input('facultyRep_id', sql.Int, req.body.facultyRep_id)
                            .input('reason', sql.VarChar(100), req.body.reason)
                            .execute('AddFacultyRepToll')
        
        res.status(200).json({
            status: 'success',
             result:'faculty representative added successfully'
        });
        
    }catch(err){
    
        res.status(404).json({
            status:"faild",
            message:err.message
                                                                                            
        })
    }

}

exports.AdminReviewJob = async (req, res) => {
    try{
    
        let pool = await sql.connect(config)
        console.log('database connected')
        let data =await pool
                            .request()
                            .input('admin_id', sql.Int, req.body.admin_id)
                            .input('job_id', sql.Int, req.body.job_id)
                            .input('visibility', sql.Bit, req.body.visibility)
                            .execute('AdminReviewJob')
        
        res.status(200).json({
            status: 'success',
             result:'job visibility changed successfully'
        });
        
    }catch(err){
    
        res.status(404).json({
            status:"faild",
            message:err.message
                                                                                            
        })
    }

}

exports.EmpUpdateApplicant = async (req, res) => {
    try{
    
        let pool = await sql.connect(config)
        console.log('database connected')
        let data =await pool
                            .request()
                            .input('student_id', sql.Int, req.body.student_id)
                            .input('job_id', sql.Int, req.body.job_id)
                            .input('application_status', sql.VarChar(20), req.body.application_status)
                            .execute('EmpUpdateApplicant')
        
        res.status(200).json({
            status: 'success',
             result:'status of an applicant has changed'
        });
        
    }catch(err){
    
        res.status(404).json({
            status:"faild",
            message:err.message
                                                                                            
        })
    }

}

exports.courseInformation = async (req, res) => {
    try{
    
        let pool = await sql.connect(config)
        console.log('database connected')
        let data =await pool
                            .request()
                            .input('facRep_id', sql.Int, req.body.facRep_id)
                            .input('job_id', sql.Int, req.body.job_id)
                            .output('ii_status', sql.Bit)
                            .execute('courseInformation')
        
        res.status(200).json({
            status: 'success',
            data: data.output
        });
        
    }catch(err){
    
        res.status(404).json({
            status:"faild",
            message:err.message
                                                                                            
        })
    }

}

exports.ApplyForJob = async (req, res) => {
    try{
    
        let pool = await sql.connect(config)
        console.log('database connected')
        let data =await pool
                            .request()
                            .input('sid', sql.Int, req.body.sid)
                            .input('job_id', sql.Int, req.body.job_id)
                            .execute('ApplyForJob')
        
        res.status(200).json({
            status: 'success',
             data:{ data}
        });
        
    }catch(err){
    
        res.status(404).json({
            status:"faild",
            message:err.message
                                                                                            
        })
    }

}

exports.UserRegister = async (req, res) => {
    try{
    
        let pool = await sql.connect(config)
        console.log('database connected')
        let data =await pool
                            .request()
                            .input('usertype', sql.VarChar(20), req.body.usertype)
                            .input('email', sql.VarChar(50), req.body.email)
                            .input('first_name', sql.VarChar(20), req.body.first_name)
                            .input('middle_name', sql.VarChar(20), req.body.middle_name)
                            .input('last_name', sql.VarChar(20), req.body.last_name)
                            .input('GIU_id', sql.Int, req.body.GIU_id)
                            .input('semester', sql.Int, req.body.semester)
                            .input('faculty', sql.VarChar(20), req.body.faculty)
                            .input('major', sql.VarChar(20), req.body.major)
                            .input('gpa', sql.Decimal(4, 2), req.body.gpa)
                            .input('adress', sql.VarChar(10), req.body.adress)
                            .input('company_name', sql.VarChar(20), req.body.company_name)
                            .input('company_phone', sql.VarChar(20), req.body.company_phone)
                            .input('fax', sql.VarChar(50), req.body.fax)
                            .input('company_website', sql.VarChar(50), req.body.company_website)
                            .input('type_of_business', sql.VarChar(30), req.body.type_of_business)
                            .input('establishment_year', sql.VarChar(255), req.body.establishment_year)
                            .input('origin_country', sql.VarChar(20), req.body.origin_country)
                            .input('industry', sql.VarChar(20), req.body.industry)
                            .input('n_current_employees', sql.Int, req.body.n_current_employees)
                            .input('products_services', sql.VarChar(30), req.body.products_services)
                            .input('age', sql.Int, req.body.age)
                            .output('password', sql.VarChar(8))
                            .output('idUser', sql.Int)
                            .execute('UserRegister')
        
        res.status(200).json({
            status: 'success',
            data: data.output
        });
        
    }catch(err){
    
        res.status(404).json({
            status:"faild",
            message:err.message
                                                                                            
        })
    }

}

exports.UserLogin = async (req, res) => {
    try{
    
        let pool = await sql.connect(config)
        console.log('database connected')
        let data =await pool
                            .request()
                            .input('email', sql.VarChar(50), req.body.email)
                            .input('password', sql.VarChar(20), req.body.password)
                            .output('success', sql.Bit)
                            .output('user_id', sql.Int)
                            .execute('UserLogin')
        
        res.status(200).json({
            status: 'success',
            data: data.output
        });
        
    }catch(err){
    
        res.status(404).json({
            status:"faild",
            message:err.message
                                                                                            
        })
    }

}



