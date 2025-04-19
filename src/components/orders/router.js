const Index = () => import('./index.vue');
const ViewPage = () => import('./_pages/view.vue');

export default [
    {
        path: '/orders',
        component: Index
    },
    {
        path: '/order/details/:url',
        component: ViewPage
    }
]