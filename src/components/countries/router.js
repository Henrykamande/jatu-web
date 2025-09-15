const Index = () => import('./index.vue');
const CreatePage = () => import('./_pages/create.vue');
const ViewPage = () => import('./_pages/view.vue');

export default [
    {
        path: '/countries',
        component: Index
    },
    {
        path: '/new-country',
        component: CreatePage
    },
    {
        path: '/country/:id',
        component: ViewPage
    }
]