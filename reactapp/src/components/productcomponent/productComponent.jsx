import React, { Component } from 'react'
import DropDownComponent from './../reusablecomponents/dropdowncomponent';
class ProductComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            ProductId:'',
            ProductName:'',
            CategoryName:'',
            Manufacturer:'',
            BasePrice:0,
            Categories: undefined,
            Manufacturers: ["TATA","BAJAJ","HP"]
         };
    }

    handleChange(evt){
        // the callback is used because that state is mutated using the <select><option> change evebt
        // this is multi-Step event. The <option> will change then the selected option's valie will 
        // be passed to value of the <select> element. This will delayed the setState and hence the state
        // property mutation, hence we need callnack as second parameter 
        this.setState({[evt.target.name]:evt.target.value},()=>{
            console.log(`Category Name ${this.state.CategoryName}`);
            console.log(`Manufacturer Name ${this.state.Manufacturer}`);
        });
    }

    getSelectedCategory(val){
        this.setState({CategoryName:val},()=>{});
    }
    getSelectedManufacturer(val){
        this.setState({Manufacturer:val},()=>{});
    }

    render() { 
        return (  
            <div className="container">
                <div className="form-group">
                    <label>Categories</label>
                    {/* Generating theSelect options based on state*/}
                   {/* <select className="form-Control" name="CategoryName" value={this.state.CategoryName}
                     onChange={this.handleChange.bind(this)}>
                        {
                             this.state.Categories.map((cat,idx)=>(
                                 <option key={idx} value={cat}>{cat}</option>
                             ))   
                        }
                    </select> */}
                </div>
                <div className="form-group">
                    <label>Manufacturer</label>
                    <select className="form-Control" name="Manufacturer" value={this.state.Manufacturer}
                     onChange={this.handleChange.bind(this)}>
                    {
                             this.state.Manufacturers.map((man,idx)=>(
                                 <option key={idx} value={man}>{man}</option>
                             ))   
                        }
                    </select>
                </div>
                <hr/>
                <div className="container">
                    <label>Reusable Categories</label>
                    {/* stateProperty: is the 'state' property of the parent component passed to child component. So that the selected value from child component will update the state property i.e. CategoryName 
                     dataSource: the property of child component thatb will accept value from state property of the component using which the <options> will be generated in DropDownComponent
                    */}
                    <DropDownComponent
                     stateProperty={this.state.CategoryName}
                     dataSource={this.state.Categories}
                     selectedValue ={this.getSelectedCategory.bind(this)}
                    ></DropDownComponent>        
                    <br/>
                    selected Category {this.state.CategoryName}

                </div>
                <hr/>
                <div className="container">
                    <label>Reusable Categories</label>
                    <DropDownComponent
                     stateProperty={this.state.Manufacturer}
                     dataSource={this.state.Manufacturers}
                     selectedValue ={this.getSelectedManufacturer.bind(this)}
                    ></DropDownComponent>       
                    <br/>
                    selected Manufacturer {this.state.Manufacturer}
 
                </div>
            </div>
        );
    }
}
 
export default ProductComponent;