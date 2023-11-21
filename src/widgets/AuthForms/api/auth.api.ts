import { api } from '../../../app/store/api';

interface ILoginBody {
  username: string;
  password: string;
}

interface ILoginResponse {
  token: string;
}

const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<ILoginResponse, ILoginBody>({
      query: (body) => ({
        url: 'auth/login',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
