use Giu_job_portal
go


--CREATE PROC ShowEmployers
--AS
--Select *
--from employer
--inner join review_profile 
--on employer.employer_id =  Review_Profile.Review_Profile_employer_ID
--where Review_Profile.Review_Profile_status = 'accepted'
--order by employer.company_name 
--GO;



--create proc showjobs 
--as
--select *
--from Job 
--where visibility = 1 
--go;

--create proc JobSearch
--@semester int, @allowed_faculty varchar(20)
--as
--begin
--select *
--from Job
--inner join Required_semesters
--on Required_semesters.Required_semesters_ID = Job.JOB_ID
--inner join Allowed_faculties
--on Allowed_faculties.Allowed_faculties_ID = Job.JOB_ID
--where Required_semesters.semester = @semester OR Allowed_faculties.faculty_name = @allowed_faculty
--end
--go;


--CREATE PROC UserRegister
--@usertype varchar(30),@email varchar(50),@first_name varchar(20),@middle_name varchar(20),
--@last_name varchar(20), @birth_date datetime,@GIU_id int,@semester int, @faculty varchar(20),@major
--varchar(20),@gpa decimal(4,2),@adress varchar(10), @company_name varchar(20), @company_phone
--varchar(20),@fax varchar(50), @company_website varchar(50), @type_of_business varchar(30), 
--@establishment_year datetime, @origin_country varchar(20), @industry varchar(20), @n_current_employees
--int, @products_services varchar(30),

--@password varchar(8) output
--AS 
--INSERT INTO Users( email , username , pass )
--VALUES (@email , @first_name ,'1234')

--declare @idUser int 
----select the id of the last record in the table
--select @idUser = users_IFROM Users where  email=@emailD 



--set @password = '1234'
--print @password
--print @idUser
--if @usertype = 'Student'
--	begin
--	INSERT INTO Student(Student_ID,GIU_ID,Birth_date,Semester,Faculty,major, GPA,Student_Address,first_name,middle_name,last_name)
--	VALUES (@idUser,@GIU_id,@birth_date,@semester,@faculty,@major, @gpa, @adress,@first_name,@middle_name,@last_name)
--	end
--else if @usertype = 'Employer'
--	begin
--	INSERT INTO Employer(Employer_ID,Company_name,Employer_Address,Employer_phone_number,fax,website,type_of_business,
--	establishment_year, country_of_origin, industry, number_of_current_employees, products_or_services)
--	VALUES(@idUser,@company_name,@adress,@company_phone,@fax,@company_website,@type_of_business,
--	@establishment_year,@origin_country, @industry, @n_current_employees, @products_services)
--	end
--else if @usertype = 'Admin'
--	begin
--	INSERT INTO Admins VALUES(@idUser);
--	end
--else if @usertype = 'Career office coordinator'
--		begin 
--		INSERT INTO Career_Office_Coordinator VALUES (@idUser);
--		end
--else if @usertype = 'Faculty representative'
--		begin
--		INSERT INTO Faculty_Representative VALUES (@idUser , @faculty);
--		end
--else if @usertype='Academic_Advisor'
--begin
--INSERT INTO Academic_Advisor VALUES (@idUser , @faculty);

--end
--go;

--CREATE PROC UserLogin
--@email varchar(50),
--@password varchar(20),
--@success bit OUTPUT,
--@user_id int OUTPUT
--AS
--IF exists(
--SELECT users_ID FROM Users 
--WHERE  email=@email AND pass=@password)
--	begin 
--	SELECT @user_id= users_ID FROM Users 
--	WHERE  email=@email AND pass=@password
--	SET @success = 1;
--	print @success;
--	print @user_id;
--	end 
--ELSE 
--	begin 
--	SET @success = 0 ;
--	SET @user_id=-1;
--	print @success ;
--	print @user_id ;
--	END

--go;


--create proc ViewProfile
-- @user_id int 
--AS 

--select * 
--from Users
--where Users.users_ID = @user_id

--go;


--create proc DeleteProfile
-- @user_id int
--AS
--DELETE FROM Users
--WHERE  Users.users_ID= @user_id

--go;

--create proc AdminViewEmps
--AS 
--select *
--from Employer

--go ;

--create proc AdminReviewEmp
--@admin_id int, @emp_id int, @profile_status bit, @reason varchar(100)
--as 
--UPDATE Review_Profile
--SET Review_Profile.Review_Profile_status = 
--CASE
--    WHEN @profile_status=1 THEN 'ACCEPTED'
--        ELSE 'REJECTED'
--END
--, Review_Profile.reason = @reason
--WHERE Review_Profile.Review_Profile_employer_admin_ID = @admin_id and Review_Profile.Review_Profile_employer_admin_ID = @emp_id



--CREATE PROC AdminViewJobs
--AS 
--select * 
--from Job
--go ; 

--create proc AdminViewFRs
--as 
--select * 
--from Faculty_Representative
--go; 

--CREATE PROC AddFacultyRepToll
--@job_id int,
--@	 int
--AS
--UPDATE Industrial_Internship
--SET facultyRep_id=@facultyRep_id
--WHERE Industrial_Internship_ID=@job_id 





--CREATE PROC EmpEditProfile
--@id INT,
--@password VARCHAR(8),
--@address VARCHAR(10),
--@company_name VARCHAR(20),
--@company_phone VARCHAR(20),
--@fax VARCHAR(50),
--@company_website VARCHAR(50),
--@type_of_business VARCHAR(30),
--@establishment_year DATETIME,
--@origin_country VARCHAR(20),
--@industry VARCHAR(20),
--@n_current_employees INT,
--@products_services VARCHAR(30)
--AS
--UPDATE Users
--SET pass=@password
--WHERE users_ID=@id
--UPDATE Employer
--SET company_name=@company_name,Employer_Address=@address,Employer_phone_number=@company_phone,fax=@fax,
--website=@company_website,type_of_business=@type_of_business,establishment_year=@establishment_year,country_of_origin=@origin_country,industry=@industry,
--number_of_current_employees=@n_current_employees,products_or_services=@products_services
--WHERE Employer_ID=@id


--CREATE PROC AdminReviewJob
--@admin_id int, @job_id int, @visibility bit, @reason varchar(100)
--AS
--if exists(
--SELECT * from Industrial_internship --if job is industrial intern
--WHERE @job_id = Industrial_Internship_ID)
--	begin
--	if @visibility = 0 -- if not accepted : set reason = reason and visibility =0
--		begin
--		UPDATE Job
--		SET 
--		visibility = 0,
--		reason = @reason
--		WHERE
--			job_id = @job_id AND Admins_ID = @admin_id
--		end
--	else
--	begin -- if accepted : set reason with null, so that you know in FR
--		UPDATE Job
--		SET 
--		visibility = 0,
--		reason = null
--		WHERE
--			job_id = @job_id AND Admins_ID = @admin_id
--	end
--	end
--ELSE

--begin
--	UPDATE Job
--SET 
--	visibility = @visibility,
--	reason = @reason,
--	Admins_ID = @admin_id
--WHERE
--	job_id = @job_id
--end


--create proc AddContact
--@emp_id int, @name varchar(20), @job_title varchar(30), @email varchar(50), @mobile_number varchar(20), 
--@fax varchar(50)
--as
--insert into Contact_person(contact_person_employer_ID , Contact_person_name , job_title , email , mobile_number , fax)
--values(@emp_id , @name , @job_title , @email , @mobile_number , @fax )
--go ; 

--create proc AddHR
--@emp_id int, @name varchar(20), @email varchar(50)
--as
--insert into HR_Director(HR_Director_employer_id , name , email )
--values(@emp_id , @name , @email)
--go; 


--create proc ViewProfileStatus
--@emp_id int , @status bit OUTPUT , @reason varchar(100) OUTPUT 
--as
--select @status=Review_Profile_status , @reason=reason
--from Review_Profile
--where Review_Profile.Review_Profile_employer_ID = @emp_id
--go ; 

--insert error
--CREATE PROC PostJob
--@emp_id int, @title varchar(30), @description varchar(50), @department varchar(20), @start_date
--datetime, @end_date datetime, @application_deadline datetime, @n_available_internships int,
--@salary_range varchar(20), @qualifications varchar(100), @location varchar(20), @application_link
--varchar(50), @application_email varchar(50), @job_type varchar(30), @workdays int,
--@job_id int OUTPUT

--AS

--IF exists (SELECT * FROM Review_Profile	WHERE @emp_id= Review_Profile_employer_ID AND Review_Profile.Review_Profile_status = 1)-- if accepted
--BEGIN
--INSERT INTO Job(title,JOB_description,department,JOB_start_date,end_date,application_deadline,
--num_of_available_internships, salary_range, qualifications, JOB_location,
--application_email, job_type,employer_id)
--VALUES (@title , @description , @department,@start_date, @end_date, @application_deadline,
--@n_available_internships,@salary_range, @qualifications, @location,
--@application_email,@job_type,@emp_id)


----select last insterted element and get its id

--SELECT @job_id=Job.job_id FROM Job 
--WHERE job_id=(
--SELECT max(Job.job_id) 
--FROM Job
--);


--if @job_type='Part_time' 
--begin
--INSERT INTO Part_Time VALUES (@job_id , @workdays)
--end

--if @job_type='Freelance'
--begin

--INSERT INTO Freelane VALUES(@job_id)
--end

--if @job_type= 'Summer_internship'
--begin
--INSERT INTO Summer_internship VALUES (@job_id)
--end

--if @job_type= 'Full_Time'
--begin
--INSERT INTO Fulltime VALUES (@job_id)
--end

--if @job_type= 'Project_based'
--begin
--INSERT INTO Project_based VALUES (@job_id)
--end

----missing values for this type
--if @job_type= 'Industrial_internship'
--begin

--INSERT INTO Industrial_internship(Industrial_Internship_ID) VALUES (@job_id)
--END
--end



--create proc AddFaculty
--@job_id int,@allowed_faculty varchar(20)	
--as
--insert into Allowed_faculties(Allowed_faculties_ID , faculty_name )
--values(@job_id , @allowed_faculty )
--go 

--create proc AddSemester
--@job_id int,@semester int 
--as
--insert into Required_semesters(Required_semesters_ID , semester)
--values (@job_id , @semester )
--go ;

--create proc EmpViewJobs
--@emp_id int
--as
--select * 
--from Job 
--where @emp_id = Job.Employer_ID

go;

--CREATE PROC EmpViewApplicants
--@emp_id int, @job_id int
--AS
--Select*
--FROM Student
--LEFT OUTER JOIN Users on Users.users_ID=Student.Student_ID
--LEFT OUTER JOIN Employer on Employer.Employer_ID=Student.Student_ID
--LEFT OUTER JOIN Job on Job.JOB_ID =Student.Student_ID
--WHERE @emp_id=Employer.Employer_ID AND @job_id=Job.JOB_ID

GO;


--CREATE PROC EmpUpdateApplicant
--@student_id int, @job_id int, @application_status varchar(20)
--AS
--DECLARE @IIID int

--if EXISTS( -- if it's industrial intern
--SELECT * FROM Industrial_internship II
--WHERE Industrial_Internship_ID = @job_id
--)
--	begin
--	if EXISTS( -- if II is eligible
--	SELECT E.eligibility FROM Eligible E
--	WHERE E.Eligible_student_ID = @student_id AND @job_id = E.Eligible_II_ID AND E.eligibility = 1
--	)
--		begin
--		UPDATE Applies
--		SET application_status = @application_status
--		WHERE Applies.JOB_ID = @job_id AND Applies.Student_ID = @student_id
--		end
--	ELSE
--		begin
--		UPDATE Applies
--		SET application_status = 'rejected'
--		WHERE Applies.JOB_ID = @job_id AND Applies.Student_ID = @student_id
--		end
--	end
--ELSE
--	begin
--	UPDATE Applies
--	SET application_status = @application_status
--	WHERE Applies.JOB_ID = @job_id AND Applies.Student_ID = @student_id
--	end

--CREATE PROC courseInformation
--@facRep_id int, @job_id int,  @ii_status bit OUTPUT

--AS

--UPDATE Industrial_Internship
--SET @ii_status =
--CASE
--    WHEN Industrial_Internship.facultyRep_id = @facRep_id AND Industrial_Internship.Industrial_Internship_ID = @job_id THEN 1
--    ELSE 0
--END;
--go;

--CREATE PROC EvalProgressReport
--@sid int,
--@date datetime,
--@numeric_state int,
--@evaluation varchar(100)
--AS
--UPDATE Progress_report
--SET Progress_report_student_ID=@sid,Progress_report_DATE=@date,numeric_state=@numeric_state,evaluation=@evaluation
--WHERE Progress_report.Progress_report_student_ID=@sid



--CREATE PROC  ViewProgressReports
--@advisor_id int
--AS
--SELECT *
--FROM Progress_report , Student
--WHERE @advisor_id=Progress_report.Advisor_id AND Progress_report.Progress_report_student_ID=Student.Student_ID
--Go;

--CREATE PROC ViewAdvisors 
--AS
--SELECT *
--FROM Academic_Advisor
GO;

--CREATE PROC CocViewStudents 
--@ii_id int 
--AS
--SELECT*
--FROM Applies
--Left join Student on Student.Student_ID = Applies.Student_ID
--WHERE Applies.JOB_ID=@ii_id
GO ; 



--CREATE PROC CocUpdateEligibility
--@coc_id int, @s_id int, @ii_id int, @eligibility bit 
--AS
--UPDATE Eligible 
--SET @eligibility =
--CASE
--    WHEN Eligible.Eligible_coc_ID= @coc_id AND Eligible. Eligible_student_ID=@s_id  AND Eligible.Eligible_student_ID = @ii_id THEN 1
--    ELSE 0
--END
--go;






--create proc AddMobile
--@sid int,@mobileNumber varchar(20)
--as
--insert into Student_phoneNumber(Student_phoneNumber_ID , NUMBER )
--values(@sid , @mobileNumber )
go ; 

--create proc CreateCV
--@s_id int, @personal_mail varchar(50), @education varchar(100), @extracurricular_activities
--varchar(300), @linkedIn_link varchar(30), @github_link varchar(30), @skills varchar(300), @achievements varchar(300)
--as

--insert into CV_BUILDER(personal_mail , education , extracurricular_activities , linkedIn_link , githubLink , skills ,
--achievements )
--values ( @personal_mail , @education , @extracurricular_activities , @linkedIn_link , @github_link , @skills , @achievements )
--go ; 


--create proc ApplyForJob
--@sid int, @job_id int
--as
--UPDATE Applies
--SET Applies.application_status = 
--CASE
--    WHEN Applies.Student_ID =@sid and Applies.JOB_ID = @job_id THEN 'pending'
--        ELSE ''
--END

--go;


--create proc ViewMyStatus
--@sid int, @job_id int , @application_status varchar(20) output
--as
--select @application_status=application_status
--from Applies
--where Applies.Student_ID = @sid and Applies.JOB_ID = @job_id 
go ; 

--create proc AddProgressReport
--@sid int, @date datetime, @description varchar (100)
--as
--insert into Progress_report(Progress_report_student_ID , Progress_report_DATE  , Description )
--values (@sid  , @date , @description )
go ; 


--CREATE PROC StudentEditProfile
--@sid int, @first_name varchar(20),@middle_name varchar(20), @last_name
--varchar(20), @birth_date datetime,@GIU_id int,@semester int, @faculty varchar(20),@major varchar(20),@gpa decimal(4,2)
--,@adress varchar(10)
--AS
--UPDATE Student
--set  Student.Student_ID = @sid , Student.first_name = @first_name , Student.middle_name = @middle_name , 
--Student.last_name = @last_name , Student.Birth_date = @birth_date  , 
--Student.Semester = @semester , Student.Faculty = @faculty , Student.major = @major , Student.GPA = @gpa , 
--Student.Student_Address = @adress
--go ;