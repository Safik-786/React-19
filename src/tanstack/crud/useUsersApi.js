import { axiosInstancs } from "../../ApiHandling/api/axios";

/**
 * GET all users
 */
export const fetchUsers = async () => {
  const res = await axiosInstancs.get("/users");
  return res.data;
};

/**
 * CREATE user
 */
export const createUser = async (user) => {
  const res = await axiosInstancs.post("/users", user);
  return res.data;
};

/**
 * UPDATE user
 */
export const updateUser = async ({ id, data }) => {
  const res = await axiosInstancs.put(`/users/${id}`, data);
  return res.data;
};

/**
 * DELETE user
 */
export const deleteUser = async (id) => {
  await axiosInstancs.delete(`/users/${id}`);
  return id;
};
