import axios from "axios";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Response {
  properties: unknown;
  tracks: Track[];
}

export interface Track {
  layout: string;
  type: string;
  key: string;
  title: string;
  subtitle: string;
  share: Share;
  images?: Images;
  hub: Hub;
  artists?: Artist[];
  url: string;
  highlightsurls: Highlightsurls;
}

interface Highlightsurls {
  artisthighlightsurl?: string;
  trackhighlighturl?: string;
}

interface Artist {
  alias: string;
  id: string;
  adamid: string;
}

interface Hub {
  type: string;
  image: string;
  actions?: Action[];
  options: Option[];
  explicit: boolean;
  displayname: string;
}

interface Option {
  caption: string;
  actions: Action2[];
  beacondata: Beacondata;
  image: string;
  type: string;
  listcaption: string;
  overflowimage: string;
  colouroverflowimage: boolean;
  providername: string;
}

interface Beacondata {
  type: string;
  providername: string;
}

interface Action2 {
  name: string;
  type: string;
  uri: string;
}

interface Action {
  name: string;
  type: string;
  id?: string;
  uri?: string;
}

interface Images {
  background: string;
  coverart: string;
  coverarthq: string;
  joecolor: string;
}

interface Share {
  subject: string;
  text: string;
  href: string;
  image?: string;
  twitter: string;
  html: string;
  avatar?: string;
  snapchat: string;
}
export const shazamApi = createApi({
  reducerPath: "shazamAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", "ab342bcd34msh09b08163221b5a2p183adfjsn6431b4afccb8");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTracks: builder.query<Response, void>({ query: () => "/charts/track" }),
  }),
});
