import axios from "axios";

export const getAllBooks = async () => {
  const response = await axios.get(`${process.env.REACT_APP_API_SERVER}/books`);
  return response.data;
};

export const getBook = async ({ queryKey }) => {
  /* eslint-disable no-unused-vars */
  const [_key, { id }] = queryKey;

  const response = await axios.get(
    `${process.env.REACT_APP_API_SERVER}/books/${id}`
  );
  return response.data;
};

export const createBook = async ({ title, author }) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_SERVER}/books/`,
    { title, author }
  );

  return response.data;
};

export const updateBook = async ({ id, title, author }) => {
  const response = await axios.put(
    `${process.env.REACT_APP_API_SERVER}/books/${id}`,
    { title, author }
  );

  return response.data;
};

export const removeBook = async (id) => {
  await axios.delete(`${process.env.REACT_APP_API_SERVER}/books/${id}`);
  return true;
};
