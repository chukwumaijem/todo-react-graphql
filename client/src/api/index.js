import axios from 'axios';

const API_URL = process.env.REACT_APP_GRAPHQL_URL;

export const apiRequest = async (query) => {
  try {
    const { data: { data } } = await axios.post(API_URL, query);
    return data;
  } catch (error) {
    return { error };
  }
};
