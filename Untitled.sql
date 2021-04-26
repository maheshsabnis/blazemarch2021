Create Database eComm
use eComm

Create Table Category (
	CategoryRowId int AUTO_INCREMENT Primary Key,
    CategoryId varchar(20) Unique Not Null,
    CategoryName varchar(100) Not Null
)