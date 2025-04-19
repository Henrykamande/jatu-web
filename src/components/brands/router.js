const Index = () => import('./index.vue');
const CreatePage = () => import('./_pages/create.vue');
const ViewPage = () => import('./_pages/view.vue');
const BrandsPage = () => import('./_pages/subs.vue');

export default [
    {
        path: '/brands',
        component: Index
    },
    {
        path: '/new-brand/:url',
        component: CreatePage
    },
    {
        path: '/brand/:id',
        component: ViewPage
    },
    {
        path: '/category/brands/:id',
        component: BrandsPage
    }
];