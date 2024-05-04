<script setup lang="ts">
import {computed,reactive,onMounted,ref} from 'vue';
import { RouterLink,useRouter } from 'vue-router';
import type {project} from '../../interfaces';
import { useprojectsStore } from '../../stores/projects';
import api from "../../api";
import { getCheck } from '../../services/auth/getCheck';

const router = useRouter();

// const tokenCheck = getCheck();
// console.log("tokenCheck:",tokenCheck)
const isAuthenticated = ref(false);
const projects = ref<any>();

onMounted(async () => {
    
  try {
    // const tokenResult = await tokenCheck;
    // if (tokenResult) {
      isAuthenticated.value = true;
      const response = await api.get('/project/get');
      projects.value = response.data.projects;
      console.log("projects.value:",projects.value)
    // }else{
    //     router.push("/auth/login");
    // }
    // const response = await api.get('/project/get');
    // isAuthenticated.value = true;
    // projects.value = response.data.projects;
    
  } catch (error) {
    console.error('データの取得中にエラーが発生しました:', error);
  }
});

</script>


<template>
    <h1>案件管理</h1>
    <div id="breakcrumds">
        <ul>
            <li>
                <RouterLink :to="{name: 'AppTop'}">
                    TOP
                </RouterLink>
            </li>
        </ul>
    </div>
    <p>
        新規案件登録は<RouterLink :to="{name: 'projectAdd'}">こちら</RouterLink>
    </p>
    <p>
        ログアウトは<RouterLink :to="{name: 'logout'}">こちら</RouterLink>
    </p>
    <section>
        <h2>案件リスト</h2>
        <section>
            <ul>
                <!-- <li v-for="(case, index) in projects?.data" :key="index">
                    <RouterLink :to="{name: 'projectDetail', params:{id: case.id}}">
                        <span class="case">{{case.name}}</span>
                    </RouterLink>
                </li> -->
                <li v-for="project in projects" :key="project.id">
                    <RouterLink :to="{name: 'projectDetail', params:{id: project.id}}">
                    {{ project.name }}
                    </RouterLink>
                </li>
            </ul>
        </section>
    </section>
</template>

<style scoped>
ul {
    padding-left:0;
}
li {
    list-style: none;
    
}
.case {
    border-bottom: 1px solid black;
}
</style>