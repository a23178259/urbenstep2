import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        brand: "pages/Brand_Story.html",
        login: "pages/Login_Register.html",
        favorite: "pages/My_Favorite.html",
        productDetail: "pages/Product_Detail.html",
        productList: "pages/Product_List.html",
      },
    },
  },
});
