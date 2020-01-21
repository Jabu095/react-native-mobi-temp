import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAILED,
} from '../types';

import {
  NetworkCall as api,
  Methods as httpMethod,
  BASE_URL as httpEndPoints,
} from '../../api';

export const login = user => dispatch => {
  dispatch({
    type: LOGIN_REQUEST,
  });

  api(httpMethod.POST, httpEndPoints.ENDPOINT.V1.Login, user)
    .then(res =>
      dispatch({
        type: LOGIN_REQUEST_SUCCESS,
        payload: res,
      }),
    )
    .catch(err =>
      dispatch({
        type: LOGIN_REQUEST_FAILED,
        payload: err.response.data,
      }),
    );
};
