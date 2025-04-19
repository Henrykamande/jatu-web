const Index = () => import("./index.vue");
const CountriesPage = () => import("./_pages/countries.vue");
const CostsPage = () => import("./_pages/view.vue");

export default [
  {
    path: "/price/definition",
    component: Index,
  },
  {
    path: "/price/definition/:id",
    component: CostsPage,
  },
  {
    path: "/countries",
    component: CountriesPage,
  },
];
