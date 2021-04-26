import React, { useState, useEffect } from 'react';
import {DataContext} from './dataContext.js';
import {ManufacturerService} from './../services/manufacturerservice';
import TableContextComponentEvent from './tableContextComponentEvent';
const ManufacturerComponent=()=>{
    const [manufacturers, updateManufacturers] = useState([]);
    const [manufacturer, updateManufacturer] = useState({
        ManufacturerRowId:0,ManufacturerId:'',ManufacturerName:''
    });
    const[message,setMessage] = useState('');
    const serv = new ManufacturerService();
    useEffect(()=>{
        serv.getManufactureres()
            .then((response)=>{
                updateManufacturers(response.data.rows);
                setMessage('Manufacturers Received Succfully');
            })
            .catch((error)=>{
                setMessage(`Error Occured while receiving Manufacturers ${error}`);
            });
    },[]);
    const save=()=>{
        serv.postManufactureres(manufacturer)
            .then((response)=>{
                updateManufacturer(response.data);
                setMessage('Vendor Added Succfully');
            })
            .catch((error)=>{
                setMessage(`Error Occured while creating new Vendor ${error}`);
            });
    };
    return(
        <div className="container">
            <h2>The Manufacturer Registration</h2>
            <div className="container">{message}</div>
            <div className="form-group">
                <label>Manufacturer Row Id</label>
                <input className="form-control" value={manufacturer.ManufacturerRowId} readOnly/>
            </div>
            <div className="form-group">
                <label>Manufacturer Id</label>
                <input className="form-control" value={manufacturer.ManufacturerId}
                 onChange={(evt)=>updateManufacturer({...manufacturer, ManufacturerId:evt.target.value})}/>
            </div>
            <div className="form-group">
                <label>Manufacturer Name</label>
                <input className="form-control" value={manufacturer.ManufacturerName}
                 onChange={(evt)=>updateManufacturer({...manufacturer, ManufacturerName:evt.target.value})}/>
            </div>
             
            <div className="form-group">
                <input type="button" value="Clear" className="btn btn-primary" onClick={clear}/>
                <input type="button" value="Save" className="btn btn-success" onClick={save}/>
            </div>
            <hr/>
            <DataContext.Provider value={{manufacturers,updateManufacturers}}>
                <TableContextComponentEvent></TableContextComponentEvent>
            </DataContext.Provider>
        </div>
    );
};

export default ManufacturerComponent;