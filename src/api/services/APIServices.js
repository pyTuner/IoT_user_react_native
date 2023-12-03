import axios from 'axios';
import { BASE_URL, BASE_URL_PRODUCTION2, BASE_URL_PRODUCTION_RESTRUCTURE } from '../constants/APIConstants';
import AsyncStorage from '@react-native-async-storage/async-storage';




// Login User
// export const loginUser = (values) => {
//     const url = `${BASE_URL}/login/login`;          // as we set default baseURL in navigation
//     console.warn('url', url);
//     return axios.post(url, values)      // attached baseURL with the URL and values('body' in thise case)
//         .then(response => response.data); 
// }



getToken = async () => {
  try {
    const value = await AsyncStorage.getItem('token')
    if (value !== null) {
      // console.warn('asyncStore>>>>:>', value);
      return value; 
    }

  } catch (err) {
    console.warn('unable to fetch token! \n', err);
  }

}

// const BASE_URL = BASE_URL_PRODUCTION2;
const BASE_URL_RESTRUCTURE = BASE_URL_PRODUCTION_RESTRUCTURE;

async function makeRequest(method, url, body = null, params = null, useRestructure = false) {
  try {
    const token = await getToken();
    const headers = { "Authorization": `Bearer ${token}` };
    const config = { headers };

    if (method === 'get' || method === 'delete') {
      config.params = params;
    }

    const baseURL = useRestructure ? BASE_URL_RESTRUCTURE : BASE_URL;
    console.log(`Request being sent: ${baseURL}${url}`);
    const response = await axios({ method, url: `${baseURL}${url}`, data: body, ...config });

    return response.data;
  } catch (error) {
    console.log("Error at API call:", error);
    return error;
  }
}

export async function doPost(apiSignature, body) {
  return await makeRequest('post', apiSignature, body);
}

export async function doPut(apiSignature, body) {
  return await makeRequest('put', apiSignature, body);
}

export async function doGet(apiSignature) {
  return await makeRequest('get', apiSignature);
}

export async function doGetParam(apiSignature, param) {
  return await makeRequest('get', `${apiSignature}${param}`);
}

// Functions for restructured URLs

export async function doPostRestructure(apiSignature, body) {
  return await makeRequest('post', apiSignature, body, null, true);
}

export async function doPutRestructure(apiSignature, body, id) {
  return await makeRequest('put', `${apiSignature}/${id}`, body, null, true);
}

// Add other restructured URL functions in a similar manner
