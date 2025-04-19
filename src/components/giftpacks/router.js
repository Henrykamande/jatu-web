const Index = () => import('./index.vue');
const CreatePage = () => import('./_pages/create.vue');
const ViewPage = () => import('./_pages/view.vue');

export default [
    {
        path: '/gift-packs',
        component: Index
    },
    {
        path: '/new/gift',
        component: CreatePage
    },
    {
        path: '/gift/details/:url',
        component: ViewPage
    }
]