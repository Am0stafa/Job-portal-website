CREATE DATABASE Giu_job_portal;
use Giu_job_portal


CREATE TABLE Users(
users_ID INT IDENTITY not null ,
email varchar(255),
firstName varchar(255),
lastName varchar(255),
middleName varchar(255),
pass varchar(255),
PRIMARY KEY(users_ID)
);

ALTER TABLE Users
ADD Username varchar(20) ; 



Create table Student(

Student_ID int  NOT NULL ,
GIU_ID int IDENTITY NOT NULL ,
Birth_date datetime , 
Age AS (YEAR (CURRENT_TIMESTAMP ) - YEAR(Birth_date)) , 
Semester int , 
Faculty varchar(25) , 
major varchar(25) , 
GPA decimal , 
Student_Address varchar(25) , 
CV varchar(25) , 
CoverLetter varchar(50) , 

PRIMARY KEY(Student_ID),
FOREIGN KEY(Student_ID) REFERENCES Users(users_ID) ON DELETE CASCADE ON UPDATE CASCADE , 

);
ALTER TABLE Student
ADD first_name varchar(20), last_name varchar(20) , middle_name varchar(20) ; 
ALTER TABLE Student
DROP COLUMN GIU_ID;

ALTER TABLE Student
ADD GIU_ID int;

CREATE TABLE Student_phoneNumber(
 Student_phoneNumber_ID int NOT NULL  , 
 NUMBER INT NOT NULL  ,
 PRIMARY KEY (Student_phoneNumber_ID , NUMBER ),
 FOREIGN KEY(Student_phoneNumber_ID) REFERENCES Student(Student_ID) ON DELETE CASCADE ON UPDATE CASCADE ,


);

CREATE TABLE Employer (

Employer_ID int PRIMARY KEY , 
Company_name varchar(25) , 
Employer_Address varchar(25), 
Employer_phone_number int , 
fax varchar(25) , 
website varchar(25), 
type_of_business varchar(25) , 
establishment_year datetime , 
country_of_origin varchar(25) , 
industry varchar(25), 
number_of_current_employees int , 
products_or_services varchar(20),

FOREIGN KEY(Employer_ID) REFERENCES Users(users_ID) ON DELETE CASCADE ON UPDATE CASCADE ,


);

CREATE TABLE Contact_person (
contact_person_employer_ID INT NOT NULL PRIMARY KEY,
Contact_person_name varchar(255),
job_title varchar(255),
email varchar(255),
mobile_number varchar(255),
fax varchar(255)
FOREIGN KEY(contact_person_employer_ID) REFERENCES Employer(Employer_ID) ON DELETE CASCADE ON UPDATE CASCADE,

);

CREATE TABLE HR_Director (
HR_Director_employer_id int PRIMARY KEY , 
name varchar(20) , 
email varchar(20) , 
FOREIGN KEY(HR_Director_employer_id) REFERENCES Employer(Employer_ID) ON DELETE CASCADE ON UPDATE CASCADE,

);


CREATE TABLE Admins(
Admins_ID INT NOT NULL PRIMARY KEY,
FOREIGN KEY(Admins_ID) REFERENCES Users(Users_ID) ON DELETE CASCADE ON UPDATE CASCADE,
);


CREATE TABLE Faculty_Representative(
Faculty_Representative_ID  INT NOT NULL PRIMARY KEY,
Faculty VARCHAR(255)
FOREIGN KEY(Faculty_Representative_ID) REFERENCES Users(Users_ID) ON DELETE CASCADE ON UPDATE CASCADE,
);


CREATE TABLE Academic_Advisor (

Academic_Advisor_ID  int  NOT NULL PRIMARY KEY,
Faculty varchar(20),
FOREIGN KEY(Academic_Advisor_ID ) REFERENCES Users(Users_ID) ON DELETE CASCADE ON UPDATE CASCADE,
);

CREATE TABLE Career_Office_Coordinator(

Career_Office_Coordinator_ID     int   NOT NULL PRIMARY KEY,
FOREIGN KEY(Career_Office_Coordinator_ID) REFERENCES Users(Users_ID) ON DELETE CASCADE ON UPDATE CASCADE,

);

CREATE TABLE Review_Profile(
Review_Profile_employer_ID INT NOT NULL ,
Review_Profile_employer_admin_ID INT NOT NULL ,
Review_Profile_status varchar(255),
reason varchar(255),
PRIMARY KEY (Review_Profile_employer_ID , Review_Profile_employer_admin_ID ),
FOREIGN KEY(Review_Profile_employer_ID) REFERENCES Employer(Employer_ID) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY(Review_Profile_employer_admin_ID) REFERENCES Admins(Admins_ID) ON DELETE NO ACTION on update NO ACTION ,
);

CREATE TABLE Job(
JOB_ID INT PRIMARY KEY , 
title VARCHAR(20) , 
JOB_description VARCHAR(20) , 
department VARCHAR(20) ,
JOB_start_date DATETIME , 
end_date DATETIME , 
duration AS(YEAR (CURRENT_TIMESTAMP ) - YEAR(JOB_start_date)) , 
application_deadline DATETIME , 
num_of_available_internships INT , 
salary_range DECIMAL , 
qualifications VARCHAR(20),
JOB_location VARCHAR(50),
application_link VARCHAR(80) , 
application_email VARCHAR(80),
job_type VARCHAR(80) ,
Employer_ID INT ,
Admins_ID INT,
visibility BIT,
reason VARCHAR(20), 
FOREIGN KEY(Employer_ID) REFERENCES Employer ,
FOREIGN KEY(Admins_ID) REFERENCES Admins ,

);

CREATE TABLE Allowed_faculties(

Allowed_faculties_ID int NOT NULL,
faculty_name VARCHAR(20) NOT NULL,
PRIMARY KEY(Allowed_faculties_ID, faculty_name),
FOREIGN KEY(Allowed_faculties_ID) REFERENCES  job(JOB_ID) ON DELETE CASCADE ON UPDATE CASCADE,
);

CREATE TABLE Required_semesters(
Required_semesters_ID INT NOT NULL,
semester INT NOT NULL,
PRIMARY KEY (Required_semesters_ID,semester),
FOREIGN KEY(Required_semesters_ID) REFERENCES Job(JOB_ID) ON DELETE CASCADE ON UPDATE CASCADE,
);

CREATE TABLE Part_time(
Part_time_ID INT NOT NULL,
work_days varchar(255),
FOREIGN KEY(Part_time_ID) REFERENCES Job(JOB_ID) ON DELETE CASCADE ON UPDATE CASCADE,

);

CREATE TABLE Freelane (

free_ID int PRIMARY KEY , 
FOREIGN KEY(free_ID) REFERENCES Job(JOB_ID) ON DELETE CASCADE ON UPDATE CASCADE,

);

CREATE TABLE Summer_internship (
Summer_internship_ID int PRIMARY KEY , 
FOREIGN KEY(Summer_internship_ID) REFERENCES Job(JOB_ID) ON DELETE CASCADE ON UPDATE CASCADE,

);

CREATE TABLE Fulltime(
Fulltime_ID int PRIMARY KEY , 
FOREIGN KEY(Fulltime_ID) REFERENCES Job(JOB_ID) ON DELETE CASCADE ON UPDATE CASCADE,

);




CREATE TABLE project_based (

project_based_ID int PRIMARY KEY , 
FOREIGN KEY(project_based_ID) REFERENCES Job(JOB_ID) ON DELETE CASCADE ON UPDATE CASCADE,

);



CREATE TABLE Industrial_Internship(
 
Industrial_Internship_ID int NOT NULL PRIMARY KEY,
Status VARCHAR(20),
aa_id int,
facultyRep_id int,
FOREIGN KEY( Industrial_Internship_ID) REFERENCES job(JOB_ID) ON DELETE     CASCADE ON UPDATE CASCADE, 
FOREIGN KEY( aa_id) REFERENCES Academic_Advisor (Academic_Advisor_ID) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY(facultyRep_id ) REFERENCES Faculty_Representative(Faculty_Representative_ID)ON DELETE NO ACTION on update NO ACTION ,
);

CREATE TABLE CV_BUILDER(

personal_mail varchar(20) primary key , 
education varchar(20),
extracurricular_activities varchar(20),
linkedIn_link varchar(20),
githubLink varchar(20),
skills varchar(20),
achievements varchar(20), 
Student_ID int,
GIU_first_name varchar(20),
middle_name varchar(20),
last_name varchar(20), 
GIU_mail varchar(20),
GPA decimal,
Semester varchar(20),
Faculty varchar(20),
major varchar(20) , 
FOREIGN KEY(Student_ID) REFERENCES Student ON DELETE CASCADE ON UPDATE CASCADE,

);
ALTER TABLE CV_BUILDER
DROP COLUMN  GIU_first_name , middle_name , last_name , GIU_mail , GPA , Semester , Faculty , major ; 



CREATE TABLE Applies(

Student_ID int NOT NULL,
JOB_ID int NOT NULL,
application_status VARCHAR(20),
PRIMARY KEY(Student_ID, JOB_ID),
FOREIGN KEY(Student_ID) REFERENCES Student ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY(JOB_ID) REFERENCES Job ON DELETE CASCADE ON UPDATE CASCADE,
);


CREATE TABLE Eligible(
Eligible_student_ID INT NOT NULL,
Eligible_II_ID INT NOT NULL, 
Eligible_coc_ID INT NOT NULL, 
eligibility BIT,
PRIMARY KEY (Eligible_student_ID,Eligible_II_ID),
FOREIGN KEY(Eligible_student_ID) REFERENCES Student(Student_ID) ON DELETE NO ACTION ON UPDATE NO ACTION,
FOREIGN KEY(Eligible_II_ID) REFERENCES Industrial_Internship(Industrial_Internship_ID) ON DELETE NO ACTION ON UPDATE NO ACTION,
FOREIGN KEY(Eligible_coc_ID) REFERENCES Faculty_Representative(Faculty_Representative_ID) ON DELETE NO ACTION ON UPDATE NO ACTION,
);

CREATE TABLE Progress_report (

Progress_report_student_ID int , 
Progress_report_DATE DATE , 
Numeric_state INT , 
evaluation varchar(20) , 
Description varchar(20) , 
Advisor_id int ,


PRIMARY KEY(Progress_report_student_ID , Progress_report_DATE ),
FOREIGN KEY(Progress_report_student_ID) REFERENCES  Student(Student_ID) ON DELETE NO ACTION ON UPDATE NO ACTION,
FOREIGN KEY(Advisor_id) REFERENCES  Admins(Admins_ID) ON DELETE NO ACTION ON UPDATE NO ACTION,


);
-----DONE
INSERT INTO Users
VALUES ('first@gmail.com', 'abdooo', 'mostafa','elsayed' , '1234','abdoxp');
INSERT INTO Users
VALUES ('second@gmail.com', 'omar', 'khalid','yousif' , '1234','omar');
INSERT INTO Users
VALUES ('third@gmail.com', 'kareem', 'mostafa','emad' , '1234','kareem');
INSERT INTO Users
VALUES ('fourth@gmail.com', 'yousif', 'amr','elsamanody' , '1234','youif');
INSERT INTO Users
VALUES ('fifth@gmail.com', 'nour', 'mostafa','dfdsf' , '1234','nour');




--student stoped to test before proceding
INSERT INTO Student
VALUES (1, '2012-02-21,1',4, 'computer science','securit',1.2,'6 street','cv 1', 'coverletter 1')


INSERT INTO Student
VALUES (1,  CURRENT_TIMESTAMP, 'computer science','securit',1.2,'6 street','cv 1', 'coverletter 1')

INSERT INTO Student
VALUES (2, 'nour', 'omar', 'khalid','2022-01-04T01:50:10.3497074+02:00', 'engineering','security',4.2,'7 street','cv 2', 'overletter 2')

INSERT INTO Student 
VALUES (3, 'khalid', 'ala', 'Caroline', CAST('02-21-2012 6:10:00 PM' AS DATETIME2),1, 'computer science','data science',1.2,'3 stree','cv3', 'coverletter 3')




INSERT INTO Contact_person
VALUES( 1,'abdoo','zabal','abdo@gmail.com', 01211038011,200);


INSERT INTO Contact_person
VALUES(2, 'omar','accountant','ssfsf@gmail.com', '012100180','300');


INSERT INTO Contact_person
VALUES(3, 'donia','sales','aksf@gmail.com', '012100180','300');


INSERT INTO Academic_Advisor
VALUES(1,'computer science')

INSERT INTO Academic_Advisor
VALUES(4,'business')

INSERT INTO Academic_Advisor
VALUES('2','engineering')



INSERT INTO Career_Office_Coordinator
VALUES (1)

INSERT INTO Career_Office_Coordinator
VALUES(2)

INSERT INTO Career_Office_Coordinator
VALUES (3)
--

INSERT INTO Part_time
VALUES (1,'sunday monday thursday')


INSERT INTO Freelane
VALUES (2);




INSERT INTO Summer_internship
VALUES (3);



--

INSERT INTO CV_Builder
VALUES ('first@gmail.com', 'pre school','dancing', 'https://eg.linkedin.com/in/slim-abdennadher-803b87', 'www.github/abdom0stafa','nothing','nothing', 1,'abdelrahman','mostafa','elsayed','first@gmail.com',1.2,2,'computerscience','security')

INSERT INTO CV_Builder
VALUES ('abdo@gmail.com', 'high school','sleeping', 'https://eg.linkedin.com/in/abdoMostafa', 'www.github/omar','sleeping','eating', 211674);


INSERT INTO CV_Builder
VALUES ('mostafa@gmail.com', 'middle school','sleeping', 'https://eg.linkedin.com/in/mostafa', 'www.github/mostafa','sleeping','non', 211674) ;


INSERT INTO Eligible 
VALUES  (1, 1,1, 1)

INSERT INTO Eligible 
VALUES  (2, 2,2, 0)


INSERT INTO Student_phoneNumber
VALUES ( '1' , '012200583');

INSERT INTO Student_phoneNumber
VALUES ( '2' , '54685837 ' );

INSERT INTO Student_phoneNumber
VALUES ( '3' , '787904 ' );
---------------------------------------------------------------------------------

INSERT INTO HR_Director
VALUES ('1' ,  'donia' , 'donia@gmail.com');

INSERT INTO HR_Director
VALUES ('2' ,  'sara' , 'sara@gmail.com');

INSERT INTO HR_Director
VALUES ('3' ,  'ahmed' , 'ahmed@gmail.com');
--------------------------------------------------------------------------------------
INSERT INTO Admins
VALUES('1' ); 

INSERT INTO Admins
VALUES('2' ); 

INSERT INTO Admins
VALUES('3' ); 

----------------------------------------------------------------------------------------
INSERT INTO Faculty_Representative
VALUES('1' , 'Computer science'); 

INSERT INTO Faculty_Representative
VALUES('2' , ' Engineering'); 

INSERT INTO Faculty_Representative
VALUES('3' , ' medicine '); 


INSERT INTO Allowed_faculties
VALUES('1' , 'computer science ' );


INSERT INTO Allowed_faculties
VALUES('2' , ' engineering ' );


INSERT INTO Allowed_faculties
VALUES('3' , ' pharmacy' );


INSERT INTO Required_semesters
VALUES (' 1 ' , '8' );
INSERT INTO Required_semesters
VALUES (' 2 ' , '6' );
INSERT INTO Required_semesters
VALUES (' 3 ' , '8' );
---------------------------------------------------------------------------------------------

INSERT INTO Industrial_Internship
VALUES('1' , 'rejected' , '1' , '1');

INSERT INTO Industrial_Internship
VALUES('2' , 'rejected' , '2' , '2');



-----------------------------------------------------------------------------

INSERT INTO Applies
VALUES ('1' , '1' ,'accepted');


INSERT INTO Applies
VALUES ('2' , '2' ,'accepted');


INSERT INTO Applies
VALUES ('3' , '3' , ' rejected ' );
---------------------------------------------------------------------------


INSERT INTO Employer VALUES (1, 'juhayna', 'ffffgy street', 012038386635,'2567gveyg', 'www.gdcvcs.com', 'realestate', 2002, 'egypt', 'agricultural', 20,'selling houses')

INSERT INTO Employer VALUES (2, 'beety', 'faafgy street', 013038386635,'267gveyg', 'www.gdcvcs.net', 'restaurant', 2003, 'cameron', 'industrial', 30,'fast food')  

INSERT INTO Employer VALUES (3, 'lamar', 'fbbfgy street', '014038386635','27gveyg', 'www.gdcvcs.org', 'cafe', '12/10/2002 12:00:00 AM', 'senegal', 'economical',40,'beverages')  
  


INSERT INTO Review_Profile VALUES(1,1, 'hdcb' ,  'howa keda')  
INSERT INTO Review_Profile VALUES(2,2, 'ogf',  '8atata')
INSERT INTO Review_Profile VALUES(3,3, 'mo',  'ma3lesh')

 
INSERT INTO Job VALUES(200,'engineer','hdj','engineering', '12/02/2002',' 12/08/2002', convert(datetime,'18-06-2012 10:34:09 PM',5), 20, 2000.2, 'jhdbsc', 'tagamo3', 'www.linkawy.com', 'hgsvhvjs@gmail.com', 'archeticture', 1, 1, 1, 'ajhv axbu')
INSERT INTO Job VALUES(300,'doctor','dj','medicine', '12/05/2002',' 12/10/2002', convert(datetime,'17-07-2012 11:00:00 PM',2), 50, 5000.2, 'dbsc', 'maadi', 'www.linkawy.org', 'svhvjs@yahoo.com', 'pets', 2, 2, 0, 'hv axbu')

INSERT INTO Job VALUES(400,'journalist','hj','journalism', '12/02/2005',' 12/08/2007', convert(datetime,'18-06-2014 12:34:09 PM',7), 100, 7000.2, 'hdbsc', 'zayed', 'www.linkawy.net', 'hgsvhvjs@hotmail.com', 'sports', 3, 3, 0, ' axbu')


INSERT INTO Progress_report VALUES(1,convert(datetime,'18-06-2019 12:34:09 PM',7),200, 'hdcb' ,  'howa keda',1)  
INSERT INTO Progress_report VALUES(2,convert(datetime,'18-06-2010 12:34:09 PM',7),300, 'hdc' ,  'keify keda',2)
INSERT INTO Progress_report VALUES(3,convert(datetime,'18-06-2011 12:34:09 PM',7),400, 'dfc' ,  'keda keda',3)