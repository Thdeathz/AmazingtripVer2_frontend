import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setCredentials, logOut } from '~/features/Auth/authSlice';

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:8000/api',
    // credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token;
        if(token) {
            headers.set('Authorization', 'Bearer ' + token);
        }
        return headers;
    }
})

const baseQueryWithReAuth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if(result?.error?.originalStatus === 403) {
        console.log('Sending resfresh token');

        //Get new accessToken
        const refreshResult = await baseQuery('/refresh', api, extraOptions);
        console.log(refreshResult);
        if(refreshResult?.data) {
            const user = api.getState().auth.token;

            //store new accessToken
            api.dispatch(setCredentials({...refreshResult.data, user}));
            //retry query with new accessToken
            result = await baseQuery(args, api, extraOptions);
        } else {
            api.dispatch(logOut());
        }
    }
    return result;
}

export const apiSlice = createApi({
    baseQuery:  baseQueryWithReAuth,
    endpoints: builder => ({})
})