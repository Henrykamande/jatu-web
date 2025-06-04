<template>
  <div class="pl-6 grid md:grid-cols-12">
    <div
      @mouseover="activateItem(category)"
      @mouseout="tryHideSubs"
      class="menu_item col-span-12"
      v-for="(category, index) in categories.records"
      :key="index"
    >
      <span class="main_name">
        {{ category.name | capitalize }}
        <font-awesome-icon
          style="font-size: 18px; position: relative; float: right; top: 4px"
          class="h-4 w-4 mr-10 cursor-pointer"
          :icon="['fas', 'angle-right']"
        />
      </span>
    </div>

    <!-- sub items -->
    <div
      style="margin-top: 9.05rem"
      class="sub_items col-span-9 left-1/4"
      v-if="activeMenu"
      :class="{
        show_sub_items: subItemsDisplay,
        hide_sub_items: subItemsHidden,
      }"
      @mouseover="showSubItems"
      @mouseout="hideSubItems"
    >
      Sub Menus comes here
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["imageUrl", "user"]),
  },
  data() {
    return {
      categories: [],
      subHeader: [],
      activeMenu: null,
      menuOpen: false,
      subItemsDisplay: false,
      subItemsHidden: true,
      subsActive: false,
      activeName: "",
    };
  },
  async fetch() {
    const url = `api/categories`;
    const host = this.imageUrl;
    this.categories = await fetch(`${host}/${url}`).then((res) => res.json());
  },
  methods: {
    activatedName(item) {
      if (!this.activeMenu) {
        return false;
      }
      return this.activeMenu.name === item.name;
    },
    tryHideSubs() {
      if (this.subsActive) {
        return false;
      }
      this.hideSubItems();
    },
    changeSubsActive(val) {
      this.subsActive = val;
    },
    showSubItems() {
      this.subItemsDisplay = true;
      this.subItemsHidden = false;
      this.changeSubsActive(true);
    },
    hideSubItems() {
      this.subItemsDisplay = false;
      this.subItemsHidden = true;
      this.changeSubsActive(false);
    },
    async initState() {
      const { data } = await http.get(`/api/active/categories`);
      const { categories } = data;
      this.categories = categories;
    },
    activateItem(item) {
      this.activeMenu = item;
      this.subItemsDisplay = true;
      this.subItemsHidden = false;
      this.activeName = item.name;
    },
    closeMenu() {
      console.log("Close menu");
      this.$emit("close", true);
      this.menuOpen = true;
    },
  },
};
</script>

<style scoped>
.show_sub_items {
  display: block;
  transition: all 0.5s;
  top: 0px;
  opacity: 1;
}
.hide_sub_items {
  display: none;
  /* top: -1000px; */
  opacity: 0;
  transition: all 0.5s;
}
a {
  text-decoration: none;
}
.orange_link {
  color: #000;
}
.subcategory_name_item {
  min-width: 100px;
}
.dropdown-menu.show {
  overflow: hidden !important;
}
.sub_items {
  min-height: 374px;
  position: absolute;
  z-index: 1000000;
  background: rgba(255, 255, 255, 0.98);
  min-width: 720px;
  transition: all 0.5s;
  opacity: 1;
}
.menu_item {
  font-size: 14px;
  border-bottom: 1px solid #f5f5f5;
  transition: all 0.5s;
}
.menu_list {
  height: 110%;
}
.horizontal_menu {
  font-family: "Roboto", sans-serif;
  background: #fff;
  height: 90%;
  top: 0px;
}
.subcategory_name {
  font-size: 14px;
  padding-top: 5px;
  padding-bottom: 5px;
}
.main_name {
  cursor: pointer;
  padding-top: 4px;
  padding-bottom: 4px;
  display: inline-block;
  font-size: 16px;
  width: 100%;
}
.main_name a {
  color: #424242;
  font-weight: 500;
  font-size: 14px;
  transition: all 0.5s;
  padding-left: 1px;
}
.main_name a:hover {
  color: #ff7f50;
  /* padding-left: 4px; */
}
.active_menu a {
  color: #ff7f50;
}
.menu_item:hover {
  padding-left: 18px;
}
.munu_toolbar {
  text-align: center;
  padding-top: 3px;
  padding-bottom: 3px;
  background-color: rgba(0, 0, 0, 0.01);
  margin-top: 2px;
  color: #000;
}
</style>
