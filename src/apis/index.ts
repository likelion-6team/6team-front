import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_API as string;

const axiosApi = (url: string) => axios.create({ baseURL: url });

export const defaultInstance = axiosApi(baseUrl);

// jwt 토큰을 사용한다면
// const axiosAuthApi = (url: string, token: string | null) =>
//   axios.create({
//     baseURL: url,
//     headers: { Authorization: `Bearer ${token}` },
//   });

// export const authInstance = (token: string | null) =>
//   axiosAuthApi(baseUrl, token);
