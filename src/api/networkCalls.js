import axios from 'axios';
import {BASE_URL} from './endPoints';

export const NetworkCall = (
  method,
  url,
  data = null,
  token = null,
  customUrl = null,
  contentType = 'application/json',
) => {
  return axios({
    method: method,
    url: customUrl == null ? BASE_URL.LOCAL + url : customUrl,
    headers: {
      Authorization: token,
      'Content-Type': contentType,
    },
    data: data,
  }).then(res => res.data.data);
};
