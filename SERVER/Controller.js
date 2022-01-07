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




