const Index = () => import('./index.vue');
const CreatePage = () => import('./_pages/create.vue');
const ViewPage = () => import('./_pages/view.vue');

export default [
    {
        path: '/pages',
        component: Index
    },
    {
        path: '/new-page',
        component: CreatePage
    },
    {
        path: '/page/:id',
        component: ViewPage
    }
];