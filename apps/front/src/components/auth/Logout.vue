<script lang="ts" setup>
import { computed, reactive } from "vue";
import { useRouter } from "vue-router";
import { useAuth } from "../../composable/useAuth";
import { deleteLogout } from "../../services/auth/deleteLogout";
import api from "../../api";

const { isAuthenticated, logout: any, errors, loading } = useAuth();
const router = useRouter();

interface LoginForm {
  email: string;
  password: string;
}

const form = reactive<LoginForm>({
  email: "",
  password: "",
});

const reEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

const isFormValid = computed(() => {
  return reEmail.test(form.email) && form.password.length > 8;
});

const logout = async () => {
  await deleteLogout();
  router.push("/auth/login");
  // try {
  //   // ログアウトのAPIリクエストを送信
  //   await api.delete("/auth/logout");
  //   router.push("/auth/login");
  // } catch (error: any) {
  //   // エラーメッセージを表示
  //   console.error("Logout error:", error.response.data.message);
  // }
};
</script>

<template>
  <p v-if="errors" class="invalid">{{ errors }}</p>
  <form @submit.prevent="logout" class="auth-form">
    <button
      type="submit"
      class="submit-btn"
    >
      Logout
    </button>
  </form>
</template>

<style scoped></style>
