const express = require('express');
const cors = require('cors');
const session = require('express-session');

const CategoryDal = require('./dal/categorydal.js');

const SubCategoryDal = require('./dal/subcategorydal.js');

const VendorDal = require('./dal/vendordal.js');

const ManufacturerDal = require('./dal/manufacturerdal.js');

const ProductDal = require('./dal/productdal.js');

const CustomerDal = require('./dal/customerdal.js');

const OrderMasterDal = require('./dal/ordermasterdal.js');

const OrderMasterItemsDetailsDal = require('./dal/ordermasteritemsdetails.js');

const DispatchProcessDal = require('./dal/dispatchprocessdal.js');

const SecurityDal = require('./dal/securitydal.js');

const catDal = new CategoryDal();
const subCatDal = new SubCategoryDal();
const vendorDal = new  VendorDal();
const manufacturerDal = new  ManufacturerDal();
const productDal = new ProductDal();
const customerDal =new CustomerDal();
const orderMasterDal = new OrderMasterDal();
const ordermasteritemsdetailsdal = new OrderMasterItemsDetailsDal();
const dispatchprocessdal  =new DispatchProcessDal();
const securityDal = new SecurityDal();

let instance = express();
instance.use(express.urlencoded({extended:false}));
instance.use(express.json());
instance.use(cors());

instance.use(session({
    secret: 'xYz12321zYx',
    resave:false,
    saveUninitialized:true,
    cookie:{maxAge:3600000}
}));

// Category Endpoints
instance.get('/api/categories',catDal.getCategories);
instance.get('/api/categories/:id',catDal.getCategories);
instance.post('/api/categories', catDal.createCategory);



// SubCategory Endpoints
instance.get('/api/subcategories',subCatDal.getSubCategories);
instance.get('/api/subcategories/:id',subCatDal.getSubCategorieById);
instance.post('/api/subcategories', subCatDal.createSubCategory);

// Vendor Endpoints
instance.get('/api/vendors',vendorDal.getVendors);
instance.get('/api/vendors/:id',vendorDal.getVendorsById);
instance.post('/api/vendors', vendorDal.createVendor);

// Manufacturer Endpoints
instance.get('/api/manufacturers',manufacturerDal.getManufacturers);
instance.get('/api/manufacturers/:id',manufacturerDal.getManufacturersById);
instance.post('/api/manufacturers', manufacturerDal.createManufacturer);

// Product Endpoints
instance.get('/api/products',productDal.getProducts);
instance.get('/api/products/:id',productDal.getProductsById);
instance.post('/api/products', productDal.createProduct);

// Customer Endpoints
instance.get('/api/customers',customerDal.getCustomers);
instance.get('/api/customers/:id',customerDal.getCustomerById);
instance.post('/api/customers', customerDal.createCustomer);

// OrderMaster Endpoints
instance.get('/api/orders',orderMasterDal.getOrders);
instance.get('/api/orders/:id',orderMasterDal.getOrders);
instance.post('/api/orders', orderMasterDal.createOrder);

// OrderMasterItemDetails Endpoints
instance.get('/api/ordersitemdetails',ordermasteritemsdetailsdal.getOrderItemsDetails);
instance.get('/api/ordersitemdetails/:id',ordermasteritemsdetailsdal.getOrderItemDetailsById);
instance.post('/api/ordersitemdetails', ordermasteritemsdetailsdal.createOrderItemDetails);

// DispatchProcess Endpoints
instance.get('/api/dispatchprocesses',dispatchprocessdal.getDispatchProcesses);
instance.get('/api/dispatchprocesses/:id',dispatchprocessdal.getDispatchProcessesById);
instance.post('/api/dispatchprocesses', dispatchprocessdal.createDispatchProcess);


// Security Endpoints
instance.get('/api/roles', securityDal.getRoles);
instance.post('/api/registeruser',securityDal.createUser);
instance.post('/api/createuserrole',securityDal.createUserRole);
instance.post('/api/authuser', securityDal.authUser);
instance.post('/api/logout', securityDal.logout);

instance.listen(8090,()=>{
    console.log(`Servet Srated in port 8090`);
});