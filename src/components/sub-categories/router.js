const Index = () => import('./index.vue');
const CreatePage = () => import('./_pages/create.vue');
const ViewPage = () => import('./_pages/view.vue');
const SubCategoriesPage = () => import('./_pages/subs.vue');

export default [
    {
        path: '/sub-categories',
        component: Index
    },
    {
        path: '/new-sub-category/:url',
        component: CreatePage
    },
    {
        path: '/sub-category/:id',
        component: ViewPage
    },
    {
        path: '/category/sub-categories/:id',
        component: SubCategoriesPage
    }
]