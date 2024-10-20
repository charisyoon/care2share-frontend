import axios from 'axios';

// Replace this with your microservice's public IP or endpoint.
const BASE_URL = 'http://104.155.149.162:8000'; 

// Test connection with the microservice.
export const getHelloTest = async () => {
  try {
    const response = await axios.get(`http://104.155.149.162:8000/hello/test`);
    return response.data;
  } catch (error) {
    console.error('Error connecting to donor service:', error);
    throw error;
  }
};

// Make a donation request with the donor's UNI and swipe count.
export const donateSwipes = async (uni, numOfSwipes) => {
  try {
    const response = await axios.post(`${BASE_URL}/donate`, {
      donor_UNI: uni,
      num_of_swipes: numOfSwipes,
    });
    return response.data;
  } catch (error) {
    console.error('Error donating swipes:', error);
    throw error;
  }
};
