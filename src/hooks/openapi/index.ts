import { API_ENDPOINT } from '@/constants';
import { AuthApi, Configuration, UsersApi } from './codegen';

const config = new Configuration({
  basePath: API_ENDPOINT,
});

export const authApi = new AuthApi(config);
export const usersApi = new UsersApi(config);
// export const useFetchMemos = () => {
//   console.log('Fetch start');
//   const api = new MemosApi(config);
//   const { data } = useSWR('/memos', async () => {
//     const { data } = await api.findAll();
//     return data;
//   });
//   if (data != null) {
//     const first = data[0];
//     if (first != null) {
//       console.log(first.content);
//     }
//   }
//   console.log(data);
//   return data;
// };

// export const useAuthToken = () => {
//   const fetchAccessTokenFromServer = async (email: string, password: string) => {
//     return await authApi.login({ email, password });
//   };

//   const logout = async (refreshToken: string) => {
//     return await authApi.logout({ refreshToken });
//   };

//   return { fetchLoginDataFromServer, logout };
// };
