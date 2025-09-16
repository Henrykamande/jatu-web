import { backendUrl } from "@/common/index";
import Cookie from "js-cookie";

export const state = () => ({
  imageUrl: backendUrl,
  backendUrl: backendUrl,
  token: null,
  user: null,
  favorites: [],
});

export const mutations = {
  setUser(state, user) {
    state.user = user;
    Cookie.set("user", JSON.stringify(user));
  },
  setToken(state, token) {
    state.token = token;
    Cookie.set("jwt", token);
  },
  updateUser(state, updatedUser) {
    state.user = updatedUser;
  },
  logout(state, req) {
    if (process.client) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
    state.token = null;
    state.user = null;
    Cookie.remove("jwt");
    Cookie.remove("user");
  },
  addFavoriteItem(state, item) {
    const favorites = [...state.favorites];
    favorites.push(item);
    state.favorites = favorites;
  },
  removeFavoriteItem(state, item) {
    const favorites = [...state.favorites];
    const _item = favorites.find((product) => {
      return product._id === item._id;
    });
    const index = state.favorites.indexOf(_item);
    if (index !== -1) {
      favorites.splice(index, 1);
    }
    state.favorites = favorites;
  },
};

export const getters = {
  imageUrl(state) {
    return state.backendUrl;
  },
  user(state) {
    return state.user;
  },
  token(state) {
    return state.token;
  },
  isAuthenticated(state) {
    if (state.user !== null && state.token !== null) {
      return true;
    } else {
      return false;
    }
  },
  favorites(state) {
    return state.favorites;
  },
};

export const actions = {
  async nuxtServerInit({ commit, dispatch }, { req }) {},
  initAuth(context, req) {
    let user;
    let token;
    if (req) {
      if (!req.headers.cookie) {
        return;
      }
      const tokenCookie = req.headers.cookie.split(";").find((item) => {
        return item.trim().startsWith("jwt=");
      });
      if (!tokenCookie) {
        return;
      }

      const userCookie = req.headers.cookie.split(";").find((item) => {
        return item.trim().startsWith("user=");
      });
      if (!userCookie) {
        return;
      }

      user = JSON.parse(
        decodeURI(userCookie.split("=")[1]).replace(/%2C/g, ",")
      );
      token = tokenCookie.split("=")[1];
    } else if (process.client) {
      token = localStorage.getItem("token");
      const userString = localStorage.getItem("user");
      if (userString) {
        user = JSON.parse(userString);
      }
    }
    if (token) {
      context.commit("setToken", token);
    }
    if (user) {
      context.commit("setUser", user);
    }
  },
};
