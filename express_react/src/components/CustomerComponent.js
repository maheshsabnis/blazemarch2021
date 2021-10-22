import React, { useState, useEffect } from 'react';
import {DataContext} from './dataContext.js';
import {CustomerService} from './../services/customerservice';
import TableContextComponentEvent from './tableContextComponentEvent';
 

const CustomerComponent=()=>{
    const [customers, updateCustomers] = useState([]);
    const [customer, updateCustomer] = useState({
        CustomerRowId:0,CustomerId:'',CustomerName:'',CustomerAddress:'',CustomerCity:'',CustomerEmail:'',CustomerContactNo:0
    });
    const [message, setMessage] = useState('');
    const serv = new CustomerService();
    const clear=()=>{
        updateCustomer({
            CustomerRowId:0,CustomerId:'',CustomerName:'',CustomerAddress:'',CustomerCity:'',CustomerEmail:'',CustomerContactNo:0
      });
    };
    useEffect(()=>{
        serv.getCustomers()
            .then((response)=>{
                updateCustomers(response.data.rows);
                setMessage('Customers Received Successfully');
            })
            .catch((error)=>{
                setMessage(`Error Occured while receiving Categories ${error}`);
            });
    },[]);
    const save=()=>{
        serv.postCustomer(customer)
            .then((response)=>{
                updateCustomer(response.data);
                setMessage('Customer Added Successfully');
            })
            .catch((error)=>{
                setMessage(`Error Occured while creating new Customer ${error}`);
            });
    };
    
    return (
        <div className="container">
            <h1>The Customer Registartion</h1>
            <div className="form-group">
              <strong>{message}</strong>
            </div>
            <div className="form-group">
                <label>Customer Row Id</label>
                <input type="text" className="form-control" value={customer.CustomerRowId} readOnly/>
            </div>
            <div className="form-group">
                <label>Customer  Id</label>
                <input type="text" className="form-control"
                 value={customer.CustomerId}
                onChange={(evt)=>updateCustomer({...customer, CustomerId: evt.target.value})}/>
            </div>
            <div className="form-group">
                <label>Customer  Name</label>
                <input type="text" className="form-control"
                 value={customer.CustomerName}
                onChange={(evt)=>updateCustomer({...customer, CustomerName: evt.target.value})}/>
            </div>

            <div className="form-group">
                <label>Customer Address</label>
                <textarea  className="form-control"
                 value={customer.CustomerAddress}
                onChange={(evt)=>updateCustomer({...customer, CustomerAddress:evt.target.value})}></textarea>
            </div>

            <div className="form-group">
                <label>Customer City</label>
                <input type="text" className="form-control"
                 value={customer.CustomerCity}
                onChange={(evt)=>updateCustomer({...customer, CustomerCity:evt.target.value})}/>
            </div>

            <div className="form-group">
                <label>Customer Email</label>
                <input type="text" className="form-control"
                 value={customer.CustomerEmail}
                onChange={(evt)=>updateCustomer({...customer, CustomerEmail:evt.target.value})}/>
            </div>

            <div className="form-group">
                <label>Customer Contact Number</label>
                <input type="text" className="form-control"
                 value={customer.CustomerEmail}
                onChange={(evt)=>updateCustomer({...customer, CustomerEmail:evt.target.value})}/>
            </div>
             
             

            <div className="form-group">
                <input type="button" value="Clear" className="btn btn-primary" onClick={clear}/>
                <input type="button" value="Save" className="btn btn-success" onClick={save}/>
            </div>
            <hr/>
            <DataContext.Provider value={{customers,updateCustomers}}>
                <TableContextComponentEvent></TableContextComponentEvent>
            </DataContext.Provider>
        </div>
        )
   
};

export default CustomerComponent;