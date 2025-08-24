import { FetchHttpClient } from "../base";

export const eComApi = FetchHttpClient.getInstance({
  baseURL: "http://localhost:5000/api/local",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer token",
  },
});

export const E_COM_API_ENTRY_POINTS = {
  GET_PRODUCTS: "/products",
};
