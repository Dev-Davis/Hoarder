import axios from 'axios';
import apiKeys from '../apiKeys';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getStuff = uid => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/stuff.json?orderBy="uid"&equalTo="${uid}"`)
    .then((res) => {
      const stuffs = [];
      if (res.data !== null) {
        Object.keys(res.data).forEach((stuffKey) => {
          res.data[stuffKey].id = stuffKey;
          stuffs.push(res.data[stuffKey]);
        });
      }
      resolve(stuffs);
    })
    .catch(err => reject(err));
});

const postStuff = newStuff => axios.post(`${baseUrl}/stuff.json`, newStuff);

export default {
  getStuff,
  postStuff,
};