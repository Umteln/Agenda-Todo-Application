import React from 'react';

const SignInWithGoogleButton = ({ handleSubmit }) => {
	return (
		<button
			className='submit-button'
			onClick={handleSubmit}
		>
			Sign In With Google
		</button>
	);
};

export default SignInWithGoogleButton;
