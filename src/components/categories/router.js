const Index = () => import('./index.vue');
const CreatePage = () => import('./_pages/create.vue');
const ViewPage = () => import('./_pages/view.vue');

export default [
    {
        path: '/categories',
        component: Index
    },
    {
        path: '/new-category',
        component: CreatePage
    },
    {
        path: '/category/:id',
        component: ViewPage
    }
]