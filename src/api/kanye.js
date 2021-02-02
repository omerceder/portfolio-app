import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.kanye.rest/',
	params: {
		format: 'text'
	}
});
