import {defineStore} from 'pinia';
// import type {project} from '@/interfaces';
import type {project} from '../interfaces';

interface State {
    projectList: Map<number, project>;
}

export const useprojectsStore = defineStore({
    id: 'projects',
    state: (): State => {
        return {
            projectList: new Map<number, project>()
        };
    },
    getters: {
        getById: (state) => {
            return (id: number): project => {
                const project = state.projectList.get(id) as project;
                return project;
            } 
        }
    },
    actions: {
        initList(): void {
            this.projectList.set(33456,{
                id: 33456,
                name: 'ニューヨーク銀行通帳アプリ開発',
                description: '口座残高や入出金明細をスマホで確認できるアプリを開発する。React を使用し納品までの速度感を重視したい意向あり。',
                skills: 'React.js Laravel',
                customer: "株式会社モメモリ",
                assignees: '博田 高田',
                status: '提案中'
              });
        },
        addproject(project: project): void {
            this.projectList.set(project.id, project);
        }
    },
})
