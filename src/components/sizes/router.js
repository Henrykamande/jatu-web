const Index = () => import('./index.vue');
const CreatePage = () => import('./_pages/create.vue');
const ViewPage = () => import('./_pages/view.vue');

export default [
    {
        path: '/sizes',
        component: Index
    },
    {
        path: '/new-size',
        component: CreatePage
    },
    {
        path: '/sizes/:id',
        component: ViewPage
    }
]