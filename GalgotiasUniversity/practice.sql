/* create table Customer(Cust_id int not null primary key,cust_name string not null);

create table Item(item_no int not null primary key, item_name strin not null, price int not null);

create table Sale(bill_no int not null primary key, bill_date date, Cust_id int, item_no int, qty_sold int);

 insert into Customer values(1,"Tarun Sisodia");
 insert into Customer(Cust_id,cust_name) values(2,"John Wick");
insert into Customer values(3,"TimeEscape");
insert into Customer values(4,"CodeTheWate");
insert into Customer values(5,"nezah2");
insert into Customer values(6,"Jigyasa");
insert into Customer values(7,"Prashant Mishra");
insert into Customer values(8,"Komal Mam");
insert into Customer values(9,"Karan Sharma");
insert into Customer values(10,"lakshya Arora");
*/

-- select * from Customer;
/*
insert into Item(item_no,item_name,price) values (1,"KeyBoard",9999);
insert into Item values (2,"MacBook4",350000);
insert into Item(item_no,item_name,price) values(3,"Java Course",5000);
insert into Item(item_no,item_name,price) values (4,"PlayStation",60000);
*/
/*
select distinct Cust_id from Customer;

create table Course(id int , name string, price int);

 insert into Course values(1,"GenAi",10000);
 insert into Course values(1,"GenAIV2",200000);
 insert into Course(name,price) values("DSA Dom",70000); 
 insert into Course values(3,"NODE.Js",6000);
 select distinct name from Course;
 -- select distinct name from Course;
 /* CREATE TABLE Student (
    Stud_no INTEGER PRIMARY KEY,
    Stud_name VARCHAR(50),
    Class VARCHAR(20)
);
INSERT INTO Student VALUES (1, 'Raj', 'MCA');
INSERT INTO Student VALUES (2, 'Priya', 'MCA');
INSERT INTO Student VALUES (3, 'Tarun Sisodia', 'MCA IOP CNCS');


SELECT * FROM Student;
SELECT Stud_name FROM Student;
Select Class from Student;
	
update Student set Class = 'MCA AI ML' where Stud_no = 2;
*/
