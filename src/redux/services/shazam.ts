import axios from "axios";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TracksResponse } from "../../models/TrackResponse";

const shazamApi = createApi({
  reducerPath: "shazamAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", "ab342bcd34msh09b08163221b5a2p183adfjsn6431b4afccb8");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTracks: builder.query<TracksResponse, void>({ query: () => "/charts/track" }),
  }),
});

export default shazamApi;
