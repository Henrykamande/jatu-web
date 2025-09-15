const Index = () => import('./index.vue');
const CreatePage = () => import('./_pages/create.vue');
const ViewPage = () => import('./_pages/view.vue');

export default [
    {
        path: '/project-categories',
        component: Index
    },
    {
        path: '/new-project-category',
        component: CreatePage
    },
    {
        path: '/project-category/:id',
        component: ViewPage
    }
]