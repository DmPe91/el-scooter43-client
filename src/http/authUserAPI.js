import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (email, password, name) => {
  const { data } = await $host.post("api/user/registration", {
    email,
    password,
    name,
    role: "USER",
  });
  localStorage.setItem("token", data.token);

  return jwt_decode(data.token);
};

export const login = async (email, password) => {
  const { data } = await $host.post("api/user/login", { email, password });
  localStorage.setItem("token", data.token);

  return jwt_decode(data.token);
};

export const check = async () => {
  const { data } = await $authHost.get("api/user/auth");
  localStorage.setItem("token", data.token);

  return jwt_decode(data.token);
};

export const basket_user = async (id) => {
  const { data } = await $host.get("api/basket/" + id);
  return data;
};

export const baskets = async () => {
  const { data } = await $host.get("api/basket/");
  return data;
};

export const delete_basket = async (id) => {
  const { data } = await $host.delete("api/basket/" + id);
};

export const add_basket_product = async (basketId, productId) => {
  const { data } = await $host.post(
    "api/basket/" + basketId + "/product/" + productId
  );
};

export const delete_basket_product = async (id) => {
  const { data } = await $host.delete("api/basket/" + id);
};

export const create_order = async (cause, place, contact, description) => {
  const { data } = await $host.post("api/order/", {
    cause,
    place,
    contact,
    description,
  });
};

export const create_review = async (cause, description) => {
  const { data } = await $host.post("api/review/", {
    cause,
    description,
  });
};

export const moderation_review = async (id) => {
  const { data } = await $host.patch("api/review/" + id);
};

export const reviews = async () => {
  const { data } = await $host.get("api/review/");
  return data;
};

export const orders = async () => {
  const { data } = await $host.get("api/order/");
  return data;
};

export const delete_order = async (id) => {
  const { data } = await $host.delete("api/order/" + id);
};

export const delete_review = async (id) => {
  const { data } = await $host.delete("api/review/" + id);
};
