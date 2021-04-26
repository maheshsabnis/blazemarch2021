Create Database eComm
use eComm
/*Category Table*/
Create Table Category (
	CategoryRowId int AUTO_INCREMENT Primary Key,
    CategoryId varchar(20) Unique Not Null,
    CategoryName varchar(100) Not Null
)
/*Sub Category Table*/
Create Table SubCategory (
  SubCategoryRowId int AUTO_INCREMENT Primary Key,
  SubCategoryId varchar(20) Unique Not Null,
  SubCategoryName varchar(100) Not Null,
  CategoryRowId int Not Null,
  Constraint fk_category_row_id Foreign Key (CategoryRowId) References Category (CategoryRowId)
)
/*Vendor Table*/

Create Table Vendor(
 VendowRowId int AUTO_INCREMENT Primary Key,
 VendorId varchar(20) Unique Not Null,
 VendorName varchar(100) Not Null,
 VendorContactName varchar(100) Not Null,
 VendorAddress varchar(200) Not Null,
 VendorEmailAddress varchar(100) Not Null,
 VendorContactNumber varchar(100) Not Null
)


/*Manufacturer Table*/

Create Table Manufacturer(
 ManufacturerRowId int AUTO_INCREMENT Primary Key,
 ManufacturerId varchar(20) Unique Not Null,
 ManufacturerName varchar(100) Not Null
)

/*Product Table*/
Create Table Product (
  ProductRowId int AUTO_INCREMENT Primary Key,
  ProductId varchar(20) Unique Not Null,
  ProductName varchar(100) Not Null,
  ProductPrice int null,
  ProductDescription varchar(400) not null,
  SubCategoryRowId int not null,
  VendowRowId int not null,
  ManufacturerRowId int not null,
  Constraint fk_subcategory_row_id Foreign Key (SubCategoryRowId) References SubCategory (SubCategoryRowId),
  Constraint fk_manufacturer_row_id Foreign Key (ManufacturerRowId) References Manufacturer (ManufacturerRowId),
  Constraint fk_vendor_row_id Foreign Key (VendowRowId) References Vendor (VendowRowId)
)

/* Customer */
Create Table Customer(
  CustomerRowId int AUTO_INCREMENT Primary Key,
  CustomerId  varchar(20) Unique Not Null,
  CustomerName varchar(200) not null,
  CustomerAddress varchar(200) not null,
  CustomerCity varchar(50) not null,
  CustomerEmail varchar(80) not null,
  CustomerContactNo int not null
)

/*Order Table*/
Create Table OrderMaster(
  OrderId int AUTO_INCREMENT Primary Key,
  CustomerRowId int Not Null,
  OrderDate Date not null,
  TotalAmount int not null,
  ExpectedDeliveryDate Date Not null,
  ActualDeliveryDate Date,
  Constraint fk_Customer_row_id Foreign Key (CustomerRowId) References Customer(CustomerRowId)
)

/*Order Item Details Table*/
Create Table OrderMasterItemDetails (
	OrderItemId int AUTO_INCREMENT Primary Key,
    ProductRowId int not null,
    UnitPrice int not null,
    Quantity int not null,
    TotalItemPrice int not null,
    OrderId int not null,
	Constraint fk_product_row_id Foreign Key (ProductRowId) References Product (ProductRowId),
    Constraint fk_order_id Foreign Key (OrderId) References OrderMaster (OrderId)
)

/* Dispatch */

Create Table DispatchProcess(
	DispatchRowId int AUTO_INCREMENT PRIMARY KEY,
	OrderId int not null,
    DispatchedDate Date Not null,
    DelivaryAgentName varchar(200) not null,
    AgentContactNumber int not null,
	ActualDeliveryDate Date Not Null,
    DispatchStatus varchar(100) not null,
    Constraint fk_order_id1 Foreign Key (OrderId) References OrderMaster (OrderId)
)

 

/* User Master */
create table UserMaster (
	UserName varchar(40) Primary Key,
	Password varchar(20) not null,
	EmailAddress varchar(50) unique not null
)

/* User Login */ 
create table UserLoginInfo (
  LoginCountId int Auto_increment primary key,
  UserName varchar(40) not null,
  LoginDateTime Date Not null,
  LogOutDateTime Date Not null
)

 

create table RoleMaster(
  RoleName varchar(20) Primary Key,
  RoleDescription varchar(200) not null 
)

create table UsersInRole (
	 UsersInRoleId int AUTO_INCREMENT Primary Key,		
	 UserName varchar(40) not null,
     RoleName varchar(20) not null
)

