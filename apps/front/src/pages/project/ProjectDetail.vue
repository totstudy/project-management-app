<script setup lang="ts">
import {computed,ref,onMounted} from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import type {project} from '../../interfaces';
import { useprojectsStore } from '../../stores/projects';
import api from "../../api";

const router = useRouter();
const projectId = ref<number>(0);
const project = ref<project | null>(null);

interface Props {
    id: number;
}

// メンバー情報を取得する関数
const fetchproject = async (id: number) => {
    try {
        const response = await api.get(`/project/${id}`);
        project.value = response.data.projects;
        console.log("project.value:",project.value)
        console.log("project.value:",project.value)
    } catch (error) {
        console.error('データの取得中にエラーが発生しました:', error);
    }
};

// ページがマウントされた時にメンバー情報を取得する
onMounted(() => {
    console.log("projectId.value:",router.currentRoute.value.params.id)
    projectId.value = Number(router.currentRoute.value.params.id);
    
    fetchproject(projectId.value);
});

const updateStatus = async () => {
    try {
        await api.put(`/project/${projectId.value}`, { status: project.value?.status });
        console.log('ステータスが更新されました');
        router.push({ name: 'projectList' });
    } catch (error) {
        console.error('ステータスの更新中にエラーが発生しました:', error);
    }
};
</script>
<template>
    <h1>案件管理</h1>
    <nav id="breakcrumds">
        <ul>
            <li>
                <RouterLink :to="{name: 'AppTop'}">
                    TOP
                </RouterLink>
            </li>
            <li>
                <RouterLink :to="{name: 'projectList'}">
                    案件リスト
                </RouterLink>
            </li>
            <li>案件詳細情報</li>
        </ul>
    </nav>
    <section>
        <h2>案件詳細情報</h2>
        <table>
            <thead>
                <th>
                    ID
                </th>
                <th>
                    名前
                </th>
                <th>
                    description
                </th>
                <th>
                    skills
                </th>
                <th>
                    customer
                </th>
                <th>
                    assignees
                </th>
                <th>
                    status
                </th>
            </thead>
            <tbody>
                <tr v-if="project">
                    <td>{{ project.id }}</td>
                    <td>{{ project.name }}</td>
                    <td>{{ project.description }}</td>
                    <td>{{ project.skills }}</td>
                    <td>{{ project.customer }}</td>
                    <td>{{ project.assignees }}</td>
                    <td>
                    <input type="text" v-model="project.status">
                    <button @click="updateStatus">更新</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<style scoped>
ul {
    padding-left:0;
}
li {
    list-style: none;
}
table {
    border-collapse: collapse;
    margin: 0 auto;
}
table thead th {
    border: 1px solid black;
}
table tbody td {
    border: 1px solid black;
}
</style>

