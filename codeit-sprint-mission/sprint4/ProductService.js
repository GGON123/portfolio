import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://sprint-mission-api.vercel.app/products',
  timeout: 3000,
});

async function getProductList(params = {}) {
  const res = await instance.get(`/`, {params});
  return res.data;
}

async function getProduct(id) {
  const res = await instance.get(`/${id}`);
  return res.data;
}

async function createProduct(productDada) {
  const res = await instance.post(`/`, productDada);
  return res.data;
}

async function patchProduct(id, productDada) {
  const res = await instance.patch(`/${id}`, productDada);
  return res.data;
}

async function deleteProduct(id) {
  const res = await instance.delete(`/${id}`);
  return `${res.status} ${res.statusText} ${res.message}`;
}

export {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct,
};