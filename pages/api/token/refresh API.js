import axios from "../../../utils/customAxiosUtil";

export const requestAccessToken = async (refresh_token) => {
  return await axios
    .post(`${serverURL}/token/refresh/`, {
      refresh: refresh_token,
    })
    .then((response) => {
      return response.data.access;
    })
    .catch((e) => {
      console.log(e.response.data);
    });
};

export const checkAccessToken = async (refresh_token) => {
  if (axios.defaults.headers.common["Authorization"] === undefined) {
    return await requestAccessToken(refresh_token).then((response) => {
      return response;
    });
  } else {
    return axios.defaults.headers.common["Authorization"].split(" ")[1];
  }
};
