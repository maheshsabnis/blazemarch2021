import React, { useState, useEffect } from 'react';
import {DataContext} from './dataContext.js';
import {ProductService} from './../services/productservice';
import TableContextComponentEvent from './tableContextComponentEvent';
import ListComponent from './listcomponent.js';

const SubCategoryComponent=()=>{
    const [products, updateProducts] = useState([]);
    const [product, updateProduct] = useState({
        ProductRowId:0,ProductId:'',ProductName:'',ProductPrice:0,ProductDescription:'',
        SubCategoryRowId:0,VendowRowId:0,ManufacturerRowId:0
    });
    const [message, setMessage] = useState('');
    const serv = new ProductService();
    const clear=()=>{
        updateProduct({
            ProductRowId:0,ProductId:'',ProductName:'',ProductPrice:0,ProductDescription:'',
            SubCategoryRowId:0,VendowRowId:0,ManufacturerRowId:0
      });
    };
    useEffect(()=>{
        serv.getProducts()
            .then((response)=>{
                updateProducts(response.data);
                setMessage('Categories Received Succfully');
            })
            .catch((error)=>{
                setMessage(`Error Occured while receiving Categories ${error}`);
            });
    },[]);
    const save=()=>{
        serv.postProducts(product)
            .then((response)=>{
                updateProduct(response.data);
                setMessage('Product Added Successfully');
            })
            .catch((error)=>{
                setMessage(`Error Occured while creating new Product ${error}`);
            });
    };
    
    return (
        <div className="container">
            <h1>The Product Registartion</h1>
            <div className="form-group">
              <strong>{message}</strong>
            </div>
            <div className="form-group">
                <label>Product Row Id</label>
                <input type="text" className="form-control" value={product.ProductRowId} readOnly/>
            </div>
            <div className="form-group">
                <label>Product  Id</label>
                <input type="text" className="form-control"
                 value={product.ProductId}
                onChange={(evt)=>updateProduct({...product, ProductId: evt.target.value})}/>
            </div>
            <div className="form-group">
                <label>Product  Name</label>
                <input type="text" className="form-control"
                 value={product.ProductName}
                onChange={(evt)=>updateProduct({...product, ProductName: evt.target.value})}/>
            </div>

            <div className="form-group">
                <label>Product  Price</label>
                <input type="number" className="form-control"
                 value={product.ProductPrice}
                onChange={(evt)=>updateProduct({...product, ProductPrice:parseInt(evt.target.value)})}/>
            </div>

            <div className="form-group">
                <label>Product  Description</label>
                <textarea type="text" className="form-control"
                 value={product.ProductDescription}
                onChange={(evt)=>updateProduct({...product, ProductDescription:evt.target.value})}></textarea>
            </div>

            <div className="form-group">
                <label>Sub Category  Name</label>
                <ListComponent
                 stateProp={product.SubCategoryRowId}
                emitValue={(id)=>updateProduct({...product, SubCategoryRowId: parseInt(id)})}></ListComponent>
            </div>
            <div className="form-group">
                <label>Vendor  Name</label>
                <ListComponent
                 stateProp={product.VendowRowId}
                emitValue={(id)=>updateProduct({...product, VendowRowId: parseInt(id)})}></ListComponent>
            </div>
            <div className="form-group">
                <label>Manufacturer  Name</label>
                <ListComponent
                 stateProp={product.ManufacturerRowId}
                emitValue={(id)=>updateProduct({...product, ManufacturerRowId: parseInt(id)})}></ListComponent>
            </div>

            <div className="form-group">
                <input type="button" value="Clear" className="btn btn-primary" onClick={clear}/>
                <input type="button" value="Save" className="btn btn-success" onClick={save}/>
            </div>
            <hr/>
            <DataContext.Provider value={{products,updateProducts}}>
                <TableContextComponentEvent></TableContextComponentEvent>
            </DataContext.Provider>
        </div>
        )
   
};

export default SubCategoryComponent;