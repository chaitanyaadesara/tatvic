import axios from "axios";

// axios.defaults.withCredentials = true;
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Access-Control-Allow-Headers'] = '*';

const headers = {
  Accept: "application/json",
};

export const API = {
  /**
   * Get request
   */
  GetAxiosRequest: async (url, params = {}) => {
    // const session = await Helpers.currentSession()
    // if (localStorage.getItem('token')) headers.Authorization = localStorage.getItem('token')
    const res = await axios.get(url, { headers, params });
    return res.data;
  },
  /**
   * post request
   */
  PostAxiosRequest: async (url, params = {}) => {

    // if (localStorage.getItem('token')) headers.Authorization = localStorage.getItem('token')
    const res = await axios.post(url, params, { headers });
    // return res.data;
    return res;
  },
  /**
   * Put request
   */
  PutAxiosRequest: async (url, params = {}) => {
    // if (localStorage.getItem('token')) headers.Authorization = localStorage.getItem('token')
    const res = await axios.put(url, params, { headers });

    return res.data;
  },
  /**
   * Delete request
   */
  DeleteAxiosRequest: async (url) => {
    // if (localStorage.getItem('token')) headers.Authorization = localStorage.getItem('token')
    const res = await axios.delete(url, { headers });
    return res;
  },
};
