import axios from 'axios';
const baseUrl = 'http://localhost:7000/api/lotes';

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(({ data }) => data);
};

const getOne = (id) => {
  const request = axios.get(`${baseUrl}/${id}`);
  return request.then(({ data }) => data);
}

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then(({ data }) => data);
};

const remove = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(({ data }) => data)
}

const lotesService = {
  getAll,
  getOne,
  create,
  remove
};

export default lotesService;