import axios from 'axios';
import { v4 as uuid } from 'uuid';

const axiosInstance = axios.create({
  baseURL: '/v2/prices',
  headers: { 'x-access-token': process.env['REACT_APP_API_KEY'] },
});

axiosInstance.interceptors.response.use(
  response =>
    response.data.data.map(item => ({
      origin: item.origin,
      destination: item.destination,
      price: item.value,
      departDate: item['depart_date'],
      gate: item.gate,
      id: uuid(),
    })),
  error => {
    const { status } = error.response;

    if (status === 400) {
      throw new Error(`You've provided invalid data...`);
    }

    if (status === 401) {
      throw new Error('No valid token provided!');
    }

    throw new Error('Something went wrong...');
  }
);

export default axiosInstance;
