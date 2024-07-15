import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000'; // Your Flask backend URL

export const sendMessageToBot = async (message) => {
  const response = await axios.post(`${API_URL}/`, {
    queryResult: {
      queryText: message,
    },
  });
  return response.data;
};
