import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const createType = async (type) => {
  const { data } = await $authHost.post("api/type", type);
  return data;
};

export const fetchTypes = async () => {
  const { data } = await $host.get("api/type");
  return data;
};

export const createCondition = async (condition) => {
  const { data } = await $authHost.post("api/condition", condition);
  return data;
};

export const fetchCondition = async () => {
  const { data } = await $host.get("api/condition");
  return data;
};

export const createProduct = async (product) => {
  const { data } = await $authHost.post("api/product", product);

  return data;
};

export const fetchProducts = async () => {
  const { data } = await $host.get("api/product");
  return data;
};

export const fetchProduct = async (id) => {
  const { data } = await $host.get("api/product/" + id);
  return data;
};
