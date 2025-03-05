import React from "react";

const SearchBar=({value, onChange})=>{
    return(
     <div className="input-container">
        <input type='text' placeholder="Search assets.." value={value} onChange={(e)=>onChange(e.target.value)} />          
     </div>
        
    )
}

export default SearchBar;