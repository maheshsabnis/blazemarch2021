import React, { useState, useEffect } from 'react';
import {DataContext} from './dataContext.js';
import {SubCategoryService} from './../services/subcategoryService';
import TableContextComponentEvent from './tableContextComponentEvent';
import ListComponent from './listcomponent.js';

const SubCategoryComponent=()=>{
    const [subcategories, updateSubCategories] = useState([]);
    const [subcategory, updateSubCategory] = useState({
        SubCategoryRowId:0,SubCategoryId:'',SubCategoryName:'',CategoryRowId:0
    });
    const [message, setMessage] = useState('');
    const serv = new SubCategoryService();
    const clear=()=>{
        updateSubCategory({
         SubCategoryRowId:0,SubCategoryId:'',SubCategoryName:'',CategoryRowId:0
      });
    };
    useEffect(()=>{
        serv.getSubCategories()
            .then((response)=>{
                updateSubCategories(response.data.rows);
                setMessage('Categories Received Succfully');
            })
            .catch((error)=>{
                setMessage(`Error Occured while receiving Categories ${error}`);
            });
    },[]);
    const save=()=>{
        serv.postSubCateory(subcategory)
            .then((response)=>{
                updateSubCategory(response.data);
                setMessage('Category Added Succfully');
            })
            .catch((error)=>{
                setMessage(`Error Occured while creating new ${error}`);
            });
    };
    
    return (
        <div className="container">
            <div className="form-group">
              <strong>{message}</strong>
            </div>
            <div className="form-group">
                <label>Sub Category Row Id</label>
                <input type="text" className="form-control" value={subcategory.SubCategoryRowId} readOnly/>
            </div>
            <div className="form-group">
                <label>Category  Id</label>
                <input type="text" className="form-control"
                 value={subcategory.SubCategoryId}
                onChange={(evt)=>updateSubCategory({...subcategory, SubCategoryId: evt.target.value})}/>
            </div>
            <div className="form-group">
                <label>Category  Name</label>
                <input type="text" className="form-control"
                 value={subcategory.SubCategoryName}
                onChange={(evt)=>updateSubCategory({...subcategory, SubCategoryName: evt.target.value})}/>
            </div>
            <div className="form-group">
                <label>Category  Name</label>
                <ListComponent
                 stateProp={subcategory.SubCategoryName}
                emitValue={(name)=>updateSubCategory({...subcategory, SubCategoryName: name})}></ListComponent>
            </div>

            <div className="form-group">
                <input type="button" value="Clear" className="btn btn-primary" onClick={clear}/>
                <input type="button" value="Save" className="btn btn-success" onClick={save}/>
            </div>
            <hr/>
            <DataContext.Provider value={{subcategories,updateSubCategory}}>
                <TableContextComponentEvent></TableContextComponentEvent>
            </DataContext.Provider>
        </div>
        )
   
};

export default SubCategoryComponent;