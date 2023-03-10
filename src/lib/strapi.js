import axios from "axios";

export const API_URL = "http://127.0.0.1:1337/api";

export const fetchAPI = async (path) => {
	const url = `${API_URL}${path}`;
	const response = await axios.get(url);
	return response.data;
};
