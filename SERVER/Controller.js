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

