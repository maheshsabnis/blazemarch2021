import React, { useState, useEffect } from 'react';
import {DataContext} from './dataContext.js';
import {ProductService} from './../services/productservice';
import TableContextComponentEvent from './tableContextComponentEvent';

const ProductListComponent=()=>{
    const [products,updateProducts] = useState([]);
    const serv = new ProductService();
    const [message, setMessage] = useState('');
    useEffect(()=>{
        serv.getProducts()
            .then((response)=>{
                updateProducts(response.data.rows);
                setMessage('Products Received Succfully');
            })
            .catch((error)=>{
                setMessage(`Error Occured while receiving Products ${error}`);
            });
    },[]);

    return(
        <div className="container">

            <h1>Available Products</h1> 
            <h2>{message}</h2>
            <DataContext.Provider value={{products,updateProducts}}>
                 <TableContextComponentEvent></TableContextComponentEvent>
            </DataContext.Provider>
        
        </div>
    );
};

export default ProductListComponent;