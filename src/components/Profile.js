import React, { useState, useEffect } from 'react';
import { Paper, Container, Avatar, Typography, Button } from '@mui/material';
import EditProfileDialog from './EditProfileDialog';
import { UserAuth } from '../AuthContext/AuthContext';

const Profile = () => {
	const [open, setOpen] = useState(false);
	const { user } = UserAuth();

	const [currentUser, setCurrentUser] = useState({
		name: 'Beyonce',
		description: 'Queen B',
	});

	const handleEdit = () => {
		setOpen(true);
	};

	return (
		<>
			<Container
				maxWidth='md'
				sx={{
					mt: 4,
				}}
			>
				<Paper
					sx={{
						padding: 2,
					}}
				>
					<Avatar
						src={user?.photoURL ? user.photoURL : 'https://i.pravatar.cc/300'}
						sx={{
							margin: '16px auto',
							width: 160,
							height: 160,
						}}
					/>
					<Typography
						variant='h2'
						align='center'
					>
						{user?.displayName ? user.displayName : currentUser.name}
					</Typography>
					<Typography
						variant='body1'
						align='center'
					>
						{currentUser.description}
					</Typography>
					<Typography
						variant='body1'
						align='center'
					>
						{user?.email}
					</Typography>
					<Button
						onClick={handleEdit}
						variant='outlined'
						sx={{
							display: 'block',
							margin: '16px auto',
						}}
					>
						Edit
					</Button>
				</Paper>
			</Container>
			<EditProfileDialog
				open={open}
				setOpen={setOpen}
				setCurrentUser={setCurrentUser}
				currentUser={currentUser}
			/>
		</>
	);
};

export default Profile;
