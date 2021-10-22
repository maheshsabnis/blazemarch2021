import React,{useState} from 'react';
import DepartmentHttpService from './../services/departmenthttpservice';
const CreateDepartmentComponent=(props)=>{
    const serv = new DepartmentHttpService();
    const [dept, setDept] = useState({DeptNo:0,DeptName:'',Location:'',Capacity:0});

    const clear=()=>{
        setDept({DeptNo:0,DeptName:'',Location:'',Capacity:0});
        props.history.push("/");
    };

    const save=()=>{
         serv.postData(dept)
         .then((response)=>{
            setDept(response.data.record);
            // navigate to the ListDepartments component
            props.history.push("/");
        }).catch((error)=>{
            console.log(`Eror ocured ${error}`);
        });
    };
  return(
    <div className="container">
    <div className="form-group">
        <label>DeptNo</label>
        <input type="text" name="DeptNo" value={dept.DeptNo} onChange={(evt)=> setDept({...dept, DeptNo:parseInt(evt.target.value)})}  className="form-control"/>
    </div>
    <div className="form-group">
        <label>DeptNmae</label>
        <input type="text" name="DeptName" value={dept.DeptName} onChange={(evt)=> setDept({...dept, DeptName:evt.target.value})}  className="form-control"/>
    </div>
    <div className="form-group">
        <label>Location</label>
        <input type="text" name="Location" value={dept.Location} onChange={(evt)=> setDept({...dept, Location:evt.target.value})}  className="form-control"/>
    </div>
    <div className="form-group">
        <label>Capacity</label>
        <input type="text" name="Capacity" value={dept.Capacity} onChange={
            (evt)=> setDept({...dept, Capacity:parseInt(evt.target.value)})
        }  className="form-control"/>
    </div>
    <div className="form-group">
        <input type="button" value="Clear" className="btn btn-primary"
         onClick={clear}/>
        <input type="button" value="Save" className="btn btn-success"
         onClick={save}/>
    </div>
</div>
  );
};

export default CreateDepartmentComponent;
