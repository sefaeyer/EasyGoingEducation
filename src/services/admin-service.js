import { ADMIN_GET_ALL_BY_PAGE_API } from "@/helpers/api-routes";
import { getAuthHeader } from "@/helpers/auth-helper";

export const getAllAdminsByPage = async (
  page = 0,
  size = 10,
  sort = "name",
  type = "asc"
) => {
  const qs = `${ADMIN_GET_ALL_BY_PAGE_API}?page=${page}&size=${size}&sort=${sort}&type=${type}`;

  return fetch(`${ADMIN_GET_ALL_BY_PAGE_API}?${qs}`, {
    headers: await getAuthHeader(),
  });
};
