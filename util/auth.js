import axios from "axios";

const API_KEY = process.env.API_KEY;

const authenticate = async (mode, email, password) => {
  const URL = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  const response = await axios.post(URL, {
    email,
    password,
    returnSecureToken: true,
  });
  return response.data.idToken;
};

export const createUser = (email, password) => {
  return authenticate("signUp", email, password);
};

export const login = (email, password) => {
  return authenticate("signInWithPassword", email, password);
};
