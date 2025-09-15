const Index = () => import("./index.vue");
const CreatePage = () => import("./_pages/create.vue");
const ViewPage = () => import("./_pages/view.vue");
const UnitPage = () => import("./_pages/unit-setup.vue");
const UnitManagerPage = () => import("./_pages/unit-manager.vue");
const SeasonManagerPage = () => import("./_pages/season-manager.vue");
const SeasonsPage = () => import("./_pages/seasons.vue");
const CostsManagerPage = () => import("./_pages/cost-manager.vue");
const CostsPage = () => import("./_pages/cost-definition.vue");
const InterWatchPage = () => import("./_pages/inter-watch.vue");
const ZonesPage = () => import("./_pages/zones.vue");

const LocalWatchPage = () => import("./_pages/local-watch.vue");
const LocalWatchManager = () => import("./_pages/local-manager.vue");

export default [
  {
    path: "/projects",
    component: Index,
  },
  {
    path: "/new/project",
    component: CreatePage,
  },
  {
    path: "/project/details/:url",
    component: ViewPage,
  },
  {
    path: "/unit/setup/:url",
    component: UnitPage,
  },
  {
    path: "/unit/setup/:project/:country",
    component: UnitManagerPage,
  },
  {
    path: "/local/watch/:url",
    component: LocalWatchPage,
  },
  {
    path: "/local/watch/:project/:country",
    component: LocalWatchManager,
  },
  {
    path: "/project/costs/:url",
    component: CostsPage,
  },
  {
    path: "/project/costs/:project/:country",
    component: CostsManagerPage,
  },
  {
    path: "/season/:project/:country",
    component: SeasonManagerPage,
  },
  {
    path: "/seasons/:url",
    component: SeasonsPage,
  },
  {
    path: "/project/zones/:url",
    component: ZonesPage,
  },
  {
    path: "/international/watch/:url",
    component: InterWatchPage,
  }
];
