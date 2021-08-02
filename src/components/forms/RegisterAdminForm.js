import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerAdmin } from '../../redux/user/actions';

const RegisterAdminForm = () => {
	const [success, setSuccess] = useState(false);
	const dispatch = useDispatch();
	const [admin, setAdmin] = useState({
		username: '',
		password: '',
		role: 'admin',
	});

	const handleChange = (e) => {
		setAdmin({
			...admin,
			[e.target.name]: e.target.value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setSuccess(false);
		setTimeout(() => {
			dispatch(registerAdmin(admin));
		}, 1500);
		setAdmin({
			username: '',
			password: '',
			role: 'admin',
		});
	};
	return (
		<div>
			<h3>Register As An Admin</h3>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					required
					name='username'
					value='admin.username'
					placeholder='Enter a UserName'
					onChange={handleChange}
				/>
				<input
					type='text'
					required
					name='password'
					value='admin.password'
					placeholder='Enter a password'
					onChange={handleChange}
        />
        {
          success === false ? <button type='submit'>Register</button> : <div>
            <h6>You are trying to register</h6>
            <h6>You are trying to register</h6>
            <h6>You are trying to register</h6>
          </div>
        }

			</form>
		</div>
	);
};

export default RegisterAdminForm;
