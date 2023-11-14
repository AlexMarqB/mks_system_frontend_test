import axios from "axios";

// Crie uma instância do Axios
const axiosClient = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

export { axiosClient };
