import React from 'react';

const SubmitButton = ({ handleSubmit, disabled, label }) => {
	return (
		<button
			className='submit-button'
			onClick={handleSubmit}
			disabled={disabled}
		>
			{label}
		</button>
	);
};

export default SubmitButton;
