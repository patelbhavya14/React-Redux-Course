import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID JchPvTzpi8aP9n0KcH9tFpnFgI7oJxTPzsMaWsfmon8",
  },
});
