
export const BASE_URL = "https://api";

const createUrl = (base, path) => `${base}${path}`;

export const getTodos = () => [
  createUrl(BASE_URL, "/todos"),
  {
    method: "GET",
  }
];