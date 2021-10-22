import React, { useState, useEffect } from 'react';
import {DataContext} from './dataContext.js';
import {VendorService} from './../services/vendorservice';
import TableContextComponentEvent from './tableContextComponentEvent';
const VendorComponent=()=>{
    const [vendors, updateVendors] = useState([]);
    const [vendor, updateVendor] = useState({
        VendowRowId:0,VendorId:'',VendorName:'',VendorContactName:'',
        VendorAddress:'',VendorEmailAddress:'',VendorContactNumber:''
    });
    const[message,setMessage] = useState('');
    const serv = new VendorService();
    useEffect(()=>{
        serv.getVendors()
            .then((response)=>{
                updateVendors(response.data.rows);
                setMessage('Vendors Received Succfully');
            })
            .catch((error)=>{
                setMessage(`Error Occured while receiving Vendors ${error}`);
            });
    },[]);
    const clear=()=>{
        updateVendor({
            VendowRowId:0,VendorId:'',VendorName:'',VendorContactName:'',
            VendorAddress:'',VendorEmailAddress:'',VendorContactNumber:''
      });
    };
    const save=()=>{
        serv.postVendors(vendor)
            .then((response)=>{
                updateVendor(response.data);
                setMessage('Vendor Added Succfully');
            })
            .catch((error)=>{
                setMessage(`Error Occured while creating new Vendor ${error}`);
            });
    };
    return(
        <div className="container">
            <h2>The Vendor Registration</h2>
            <div className="container">{message}</div>
            <div className="form-group">
                <label>Vendor Row Id</label>
                <input className="form-control" value={vendor.VendowRowId} readOnly/>
            </div>
            <div className="form-group">
                <label>Vendor Id</label>
                <input className="form-control" value={vendor.VendorId}
                 onChange={(evt)=>updateVendor({...vendor, VendorId:evt.target.value})}/>
            </div>
            <div className="form-group">
                <label>Vendor Name</label>
                <input className="form-control" value={vendor.VendorName}
                 onChange={(evt)=>updateVendor({...vendor, VendorName:evt.target.value})}/>
            </div>
            <div className="form-group">
                <label>Vendor Contact Name</label>
                <input className="form-control" value={vendor.VendorContactName}
                 onChange={(evt)=>updateVendor({...vendor, VendorContactName:evt.target.value})}/>
            </div>
            <div className="form-group">
                <label>Vendor Address</label>
                <textarea className="form-control" value={vendor.VendorAddress}
                 onChange={(evt)=>updateVendor({...vendor, VendorAddress:evt.target.value})}></textarea>
            </div>
            <div className="form-group">
                <label>Vendor Email Address</label>
                <input className="form-control" value={vendor.VendorEmailAddress}
                 onChange={(evt)=>updateVendor({...vendor, VendorEmailAddress:evt.target.value})}/>
            </div>
            <div className="form-group">
                <label>Vendor Contact Number</label>
                <input className="form-control" value={vendor.VendorContactNumber}
                 onChange={(evt)=>updateVendor({...vendor, VendorContactNumber:evt.target.value})}/>
            </div>
            <div className="form-group">
                <input type="button" value="Clear" className="btn btn-primary" onClick={clear}/>
                <input type="button" value="Save" className="btn btn-success" onClick={save}/>
            </div>
            <hr/>
            <DataContext.Provider value={{vendors,updateVendors}}>
                <TableContextComponentEvent></TableContextComponentEvent>
            </DataContext.Provider>
        </div>
    );
};

export default VendorComponent;