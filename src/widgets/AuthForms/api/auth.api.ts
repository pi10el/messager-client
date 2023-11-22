import type { ILoginBody, IRegisterBody, IToken } from '../types/api.types';
import { api } from '../../../app/store/api';

const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<IToken, ILoginBody>({
      query: (body) => ({
        url: 'auth/login',
        method: 'POST',
        body,
      }),
    }),

    register: build.mutation<IToken, IRegisterBody>({
      query: (body) => ({
        url: 'auth/register',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
