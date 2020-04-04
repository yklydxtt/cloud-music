import axios from 'axios';
console.log(233)
const createInstance = (req) => axios.create({
	baseURL: 'http://localhost:3000',
	headers: {
		cookie: req.get('cookie') || ''
	},
});

export default createInstance;