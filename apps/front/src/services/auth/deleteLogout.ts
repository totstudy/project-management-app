import api from "../../api";

export async function deleteLogout(): Promise<any> {
  console.log("logout-hoge:")
  return await api
    .delete("/auth/logout")
    .then((res) => {
      return res;
    })
    .catch((error) => {
      throw error.response.data.errors[0].message;
    });
}