import React from 'react';
import PropTypes from 'prop-types';

function ListOptionsComponent(props){
    const {value} = props; // the fix name for props type
    return <li className={value}>{value}</li>;
};

// define a DataType Constraints for props 

ListOptionsComponent.propTypes = {
    value: PropTypes.string
};

export default ListOptionsComponent;