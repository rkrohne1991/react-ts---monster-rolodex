import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/users",
    prepareHeaders: (headers) => {
      headers.set("Access-Control-Allow-Origin", "*");
      return headers;
    },
  }),
  tagTypes: [],
  endpoints: (build) => ({
    getUsers: build.query<any, void>({
      query: () => ({
        url: "",
        validateStatus: (response, result) =>
          response.status === 200 && !result.isError,
      }),
    }),
  }),
});

export const { useGetUsersQuery } = userApi;
