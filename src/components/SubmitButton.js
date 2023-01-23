import React from "react";

const SubmitButton = ( {handleSubmit, disabled }) => {
   
    
    
    return (
        <button className="submit-button"  onClick={handleSubmit} disabled={disabled}>
            Submit
        </button>
    )
};

export default SubmitButton