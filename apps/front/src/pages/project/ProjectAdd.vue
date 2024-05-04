<script setup lang="ts">
import { reactive } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import type {project} from '../../interfaces';
import { useprojectsStore } from '../../stores/projects';
import axios from 'axios';
import api from "../../api";

const router = useRouter();
const projectsStore = useprojectsStore();
const project: project = reactive(
    {
        id: 0,
        name: '',
        description: '',
        skills: '',
        customer: '',
        assignees: '',
        status: '',
    }
);

// const onAdd = (): void => {
//     console.log(project);
//     projectsStore.addproject(project);
//     router.push({name: 'projectList'});
// }

const onAdd = async (): Promise<void> => {
    try {
        console.log("try-project:",project)
        // メンバー情報をAPIに送信
        await api.post('/project/create', project); // APIのURLに適切なものを指定する
        console.log('会員登録が完了しました');
        router.push({ name: 'projectList' });
    } catch (error) {
        // console.log("error-project:",project)
        // エラーハンドリング
        console.error('会員登録中にエラーが発生しました:', error);
    }
}

</script>

<template>
    <h1>案件管理</h1>
    <nav id="breadcrumbs">
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
            <li>案件情報追加</li>
        </ul>
    </nav>
    <section>
        <h2>案件情報追加</h2>
        <p>情報を入力し、登録ボタンをクリックしてください。</p>
        <form v-on:submit.prevent="onAdd">
            <dl>
                <!-- <dt>
                    <label for="addId">ID&nbsp;</label>
                </dt>
                <dd>
                    <input type="number" id="addId" v-model.number="project.id" required>
                </dd> -->
                <dt>
                    <label for="addName">名前&nbsp;</label>
                </dt>
                <dd>
                    <input type="text" id="addName" v-model.number="project.name" required>
                </dd>
                <dt>
                    <label for="addDescription">description&nbsp;</label>
                </dt>
                <dd>
                    <input type="text" id="addDescription" v-model.number="project.description" required>
                </dd>
                <dt>
                    <label for="addSkills">skills&nbsp;</label>
                </dt>
                <dd>
                    <input type="text" id="addSkills" v-model.number="project.skills" required>
                </dd>
                <dt>
                    <label for="addCustomer">customer&nbsp;</label>
                </dt>
                <dd>
                    <textarea type="text" id="addCustomer" v-model.number="project.customer"></textarea>
                </dd>
                <dt>
                    <label for="addAssignees">assignees&nbsp;</label>
                </dt>
                <dd>
                    <textarea type="text" id="addAssignees" v-model.number="project.assignees"></textarea>
                </dd>
                <dt>
                    <label for="addStatus">status&nbsp;</label>
                </dt>
                <dd>
                    <textarea type="text" id="addStatus" v-model.number="project.status"></textarea>
                </dd>
            </dl>
            <button type="submit">登録</button>
        </form>
    </section>
</template>

<style scoped>
ul {
    padding-left:0;
}
li {
    list-style: none;
}
</style>

