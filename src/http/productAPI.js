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

export const delete_type = async (id) => {
  const { data } = await $host.delete("api/type/" + id);
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
  const { data } = await $authHost.post("api/product/add", product);

  return data;
};

export const fetchProducts = async (typeId, conditionId, page, limit = 8) => {
  const { data } = await $host.get("api/product", {
    params: {
      typeId,
      conditionId,
      page,
      limit,
    },
  });
  return data;
};

export const fetchProduct = async (id) => {
  const { data } = await $host.get("api/product/" + id);
  return data;
};

export const delete_product = async (id) => {
  const { data } = await $host.delete("api/product/" + id);
};
