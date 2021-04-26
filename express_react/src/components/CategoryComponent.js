import React, { useState, useEffect } from 'react';
import {DataContext} from './dataContext.js';
import {CategoryService} from './../services/categoryService';
import TableContextComponentEvent from './tableContextComponentEvent';

const CategoryComponent=()=>{
    const [categories, updateCategories] = useState([]);
    const [category, updateCategory] = useState({
        CategoryRowId:0,CategoryId:'',CategoryName:''
    });
    const [message, setMessage] = useState('');
    const serv = new CategoryService();
    const clear=()=>{
        updateCategory({
        CategoryRowId:0,CategoryId:'',CategoryName:''
      });
    };
    useEffect(()=>{
        serv.getCategories()
            .then((response)=>{
                updateCategories(response.data.rows);
                setMessage('Categories Received Succfully');
            })
            .catch((error)=>{
                setMessage(`Error Occured while receiving Categories ${error}`);
            });
    },[]);
    const save=()=>{
        serv.postCateory(category)
            .then((response)=>{
                updateCategory(response.data);
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
                <label>Category Row Id</label>
                <input type="text" className="form-control" value={category.CategoryRowId} readOnly/>
            </div>
            <div className="form-group">
                <label>Category  Id</label>
                <input type="text" className="form-control"
                 value={category.CategoryId}
                onChange={(evt)=>updateCategory({...category, CategoryId: evt.target.value})}/>
            </div>
            <div className="form-group">
                <label>Category  Name</label>
                <input type="text" className="form-control"
                 value={category.CategoryName}
                onChange={(evt)=>updateCategory({...category, CategoryName: evt.target.value})}/>
            </div>
            <div className="form-group">
                <input type="button" value="Clear" className="btn btn-primary" onClick={clear}/>
                <input type="button" value="Save" className="btn btn-success" onClick={save}/>
            </div>
            <hr/>
            <DataContext.Provider value={{categories,updateCategory}}>
                <TableContextComponentEvent></TableContextComponentEvent>
            </DataContext.Provider>
        </div>
        )
   
};

export default CategoryComponent;