const Index = () => import("./index.vue");
const CreatePage = () => import("./_pages/create.vue");
const ViewPage = () => import("./_pages/view.vue");
const DocsPage = () => import("./_pages/attachments.vue");

export default [
  {
    path: "/blog",
    component: Index,
  },
  {
    path: "/new/blog",
    component: CreatePage,
  },
  {
    path: "/blog/details/:url",
    component: ViewPage,
  },
  {
    path: "/blog/attachments/:url",
    component: DocsPage,
  },
];
