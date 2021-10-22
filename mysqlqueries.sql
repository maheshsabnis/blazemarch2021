/*Creating Database*/
Create Database eShopping;
/*List of all Databases*/
Show Databases;
/*Deleting database*/
Drop Database eShopping;

/* Set the DB COntext*/

use eShopping;

/*
  Database Contains Tables
	- Table Containsing Columns
		- Columns has COnstraints
			- AUTO_INCREMENT
            - PRIMARY KEY
            - FOREIGN KEY aka References
            - Unique
    - Tables can have relations across them
		- COnstraints based relations e.g. References aka Froeign Key
    - Table Modification Post table creation
		- Add Column
        - MOdify exisiting column
        - Remove Column
*/

Create Table Categories (
  CategoryRoId int AUTO_INCREMENT PRIMARY KEY,
  CategoryId varchar(20) Unique
);

-- Modifying the Column Name from CategoryRoId to CategoryRowId
Alter Table Categories Change  CategoryRoId CategoryRowId int; 

-- Adding a new column of name CategoryName 
Alter Table Categories Add Column CategoryName Varchar(200) Not Null; 

-- listing all records from Categories

select * from Categories;

-- inserting records in Categories

insert into Categories Values(1, 'Cat-001', 'Electronics');

-- Inserting multiple records
insert into Categories Values
(2, 'Cat-002', 'Electrical'),
(3, 'Cat-003', 'Food');

-- updating the REcord
update Categories set CategoryName= 'Fast-Food' where CategoryRowId = 3;

-- deleting record

delete from Categories where  CategoryRowId = 3;

-- trying ti insert duplicate CategoryId
-- the following query will generate errors
insert into Categories Values(4, 'Cat-001', 'Electronics');

-- Creating Sub Categories Table
-- SubCategories Table will be childof the Categories Table

Create Table SubCategories(
 SubCategoryRowId int auto_increment primary Key,
 SubCategoryId varchar(20) unique not null,
 SubCategoryName varchar(200) not null,
 CategoryRowId int not null,
 constraint fk_CategoryRowId_in_SubCategory_table Foreign Key (CategoryRowId) 
 References Categories (CategoryRowId)
);

-- insert into SubCategories values(2, 'Sub-Cat-002', 'Mixer', 10);

select * from SubCategories


-- Create Stored Procs

DELIMITER //
Create Procedure getCategories()
BEGIN
 SELECT * FROM Categories;
END //
DELIMITER ;

-- execute the Stored Procedure

call getCategories()

-- Create a Stored Proc with Parameter

DELIMITER //
Create Procedure getCategoriesByCatName(
 IN catname varchar(200)
)
BEGIN
 SELECT * FROM Categories where CategoryName = catname;
END //
DELIMITER ;

-- execute stored proc with parameter

Call getCategoriesByCatName('Electronics');

-- Stored Prpocedure for Insert
 
DELIMITER //
create Procedure  InsertCategory (
 IN CategoryRowId int,
 IN CategoryId varchar(20),
 IN CategoryName varchar(200)
)  
Begin
  Insert into Categories values (
    CategoryRowId, CategoryId, CategoryName
  );
End //
DELIMITER ;

call  InsertCategory(4, 'Cat-004', 'Fashion')
 
 
 
 
 
 
 
