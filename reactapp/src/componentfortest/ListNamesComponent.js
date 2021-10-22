import React from 'react';
import PropTypes from 'prop-types';
import ListOptionsComponent from './ListOptionsComponent';
function ListNamesComponent(props){
    const {names} = props;
    if(!names.length){
        return <span className="empty">
            No Names to display in List
        </span>
    }
    return (
        <ol className="names">
            {
                names.map((name)=>(
                    <ListOptionsComponent key={name} value={name}></ListOptionsComponent>
                ))
            }
        </ol>
    );
};


// data type constrains for the names props with its default value

ListNamesComponent.propTypes = {
    names: PropTypes.array
};

// default value
ListNamesComponent.defaultProps = {
    names: [
        "Jack Reacher",
        "James Bond",
        "Indiana Jones",
        "Ethan Hunt",
        "Jason Bourn"
    ]
};


export default ListNamesComponent;

