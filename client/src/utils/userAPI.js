import axios from 'axios';

export default {
	registerUser: (firstName, lastName, email, password) => {
		return axios.post('/api/users/register', {
			firstName: firstName,
			lastName: lastName,
			email: email,
			password: password
		});
	},
	loginUser: (email, password) => {
		return axios.post('/api/auth/login', {
			email: email,
			password: password
		});
	},
	getSessionUserId: () => {
		return axios.get('/api/auth/session');
	},
	logoutUser: () => {
		return axios.post('/api/auth/logout');
	},
	getUser: id => {
		return axios.get(`/api/users/${id}`);
	}
};
