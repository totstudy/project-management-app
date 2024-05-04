import api from "../../api";

// 認証チェックを行う関数
export async function getCheck(): Promise<boolean> {
  try {
    const response = await api.get("/auth/check");
    return response.data.authenticated;
  } catch (error) {
    console.error("認証チェックエラー:", error);
    throw error;
  }
}

