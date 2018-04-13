import axios from 'axios';


export default function (config) {
  return axios.create(config);
}
