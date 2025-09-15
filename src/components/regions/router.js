const Index = () => import('./index.vue');
const CreatePage = () => import('./_pages/create.vue');
const RegionsPage = () => import('./_pages/regions.vue');
const ViewPage = () => import('./_pages/view.vue');

export default [
    {
        path: '/regions',
        component: Index
    },
    {
        path: '/country/regions/:url',
        component: RegionsPage
    },
    {
        path: '/create/region/:url',
        component: CreatePage
    },
    {
        path: '/region/:url',
        component: ViewPage
    }
]