import axios from "axios";

export const HTTP = axios.create({
  baseURL: `http://localhost:4040/`,
  headers: {
    // Authorization: "Bearer {token}"
  }
});
