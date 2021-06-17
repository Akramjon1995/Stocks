import React from 'react';


const SearchInput = ({onSearch}) => {

    const handleInputChange = (e) => {
        onSearch(e.target.value)
    }

    return (
        <div className="text-center px-4">
           <input type="text" className="form-control mb-5 w-75" placeholder="Enter Symbol" onChange={handleInputChange} />     
        </div>
    );
};


export default SearchInput;