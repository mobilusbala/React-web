import axios from 'axios';

const apiController = axios.create({
  baseURL: 'https://course-api.com',
});

 apiController.interceptors.request.use(
  (request) => {
    request.headers['Accept'] = 'application/json';
    //request.headers['Authorization'] = AUTH_TOKEN;
    console.log('request sent');
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiController.interceptors.response.use(
  (response) => {
    console.log('got response');
    return response.data;
  },
  (error) => {
    console.log(error.response);
    if (error.response.status === 404) {
      // do something
      console.log('NOT FOUND');
    }
    return Promise.reject(error.response);
  }
); 

export default apiController;