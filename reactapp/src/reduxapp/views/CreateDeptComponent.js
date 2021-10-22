import React,{useState} from 'react';

const CreateDeptComponent=(props)=>{
 const [dept,setDept]=useState({DeptNo:0,DeptName:''});

 const clear=()=>{
     setDept({DeptNo:0,DeptName:''});
 }
 const save=()=>{
     // passing teh state to the props object
    props.AddDepartment(dept);
 }

 return (
     <div className="container">
         <div className="form-group">
             <label>Dept No</label>
             <input type="text" className="form-control" 
               value={dept.DeptNo}
               onChange={(evt)=>setDept({...dept, DeptNo:parseInt(evt.target.value)})}/>
         </div>
         <div className="form-group">
             <label>Dept Name</label>
             <input type="text" className="form-control" 
             value={dept.DeptName}
             onChange={(evt)=>setDept({...dept, DeptName:evt.target.value})}/>
         </div>
         <div className="form-group">
            <input type="button" value="clear" className="btn btn-primary"
             onClick={clear}/>
            <input type="button" value="save" className="btn btn-success"
            onClick={save}/>
         </div>
     </div>
 );

};


export default CreateDeptComponent;
