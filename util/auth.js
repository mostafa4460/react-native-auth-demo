import axios from "axios";

const API_KEY = process.env.API_KEY;

const authenticate = async (mode, email, password) => {
  const URL = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  const response = await axios.post(URL, {
    email,
    password,
    returnSecureToken: true,
  });
};

export const createUser = async (email, password) => {
  await authenticate("signUp", email, password);
};

export const login = async (email, password) => {
  await authenticate("signInWithPassword", email, password);
};
