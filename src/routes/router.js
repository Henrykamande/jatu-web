import Vue from "vue";
import Router from "vue-router";

import SystemDashboard from "@/components/dashboard/index.vue";
import LoginPage from "@/components/auth/login.vue";
import RegistrationPage from "@/components/auth/register.vue";
// auth routes
import AuthRoutes from "@/components/auth/router";
// module routes
import RegionsRoutes from "@/components/regions/router";
import ProductsRoutes from "@/components/products/router";
import CategoriesRoutes from "@/components/categories/router";
import CountriesRoutes from "@/components/countries/router";
import GiftpacksRoutes from "@/components/giftpacks/router";
import SizesRoutes from "@/components/sizes/router";
import SubCategoriesRoutes from "@/components/sub-categories/router";
import BrandsRoutes from "@/components/brands/router";
import SliderRoutes from "@/components/slider/router";
import BlogRoutes from "@/components/blog/router";
import UsersRoutes from "@/components/users/router";
import OrderRoutes from "@/components/orders/router";
import SeoRoutes from "@/components/seo/router";
import PagesRoutes from "@/components/pages/router";
import ProjectRoutes from "@/components/projects/router";
import ServicesRoutes from "@/components/services/router";
import ProjectPricingRoutes from "@/components/project-pricing/router";
import ProjectRequestRoutes from "@/components/project-requests/router";
import FarmOwnersRoutes from "@/components/farm-owners/router";
import AgriInvestorsRoutes from "@/components/agri-investors/router";
import ExpertRoutes from "@/components/experts/router";
import AvailableFarmsRoutes from "@/components/available-farms/router";
import MeetingRequestsRoutes from "@/components/meeting-requests/router";
import UpcomingEventsRoutes from "@/components/upcoming-events/router";
import NewsletterRoutes from "@/components/newsletters/router";
import ProjectCategoriesRoutes from "@/components/project-categories/router";
import FarmApplicationsRoutes from "../components/farm-applications/router"
import ListedEquipments from "../components/listed-equipment/router";
import RentEqApplications from "../components/rent-eq-applications/router";

import DefaultLayout from "@/layout/defaultLayout";
Vue.use(Router);

export function UserGuard(to, from, next) {
  const user = localStorage.getItem("name");
  if (!user) {
    return next("/login");
  }
  return next();
}

export default new Router({
  mode: "history",
  // base: process.env.BASE_URL,
  routes: [
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/register",
      component: RegistrationPage,
    },
    {
      path: "/",
      component: DefaultLayout,
      beforeEnter: (to, from, next) => {
        const tokenStatus = localStorage.token;
        if (tokenStatus == undefined || tokenStatus == null) {
          next("/login");
        } else {
          next();
        }
      },
      children: [
        {
          path: "/dashboard",
          name: "SystemDashboard",
          component: SystemDashboard,
        },
        ...SubCategoriesRoutes,
        ...CategoriesRoutes,
        ...CountriesRoutes,
        ...GiftpacksRoutes,
        ...SizesRoutes,
        ...BrandsRoutes,
        ...ProductsRoutes,
        ...AuthRoutes,
        ...SliderRoutes,
        ...BlogRoutes,
        ...UsersRoutes,
        ...OrderRoutes,
        ...SeoRoutes,
        ...PagesRoutes,
        ...ProjectRoutes,
        ...ServicesRoutes,
        ...ProjectPricingRoutes,
        ...ProjectRequestRoutes,
        ...RegionsRoutes,
        ...FarmOwnersRoutes,
        ...AgriInvestorsRoutes,
        ...ExpertRoutes,
        ...AvailableFarmsRoutes,
        ...MeetingRequestsRoutes,
        ...UpcomingEventsRoutes,
        ...NewsletterRoutes,
        //new
        ...ProjectCategoriesRoutes,
        ...FarmApplicationsRoutes,
        ...ListedEquipments,
        ...RentEqApplications,
      ],
    },
  ],
});
