export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"F:/my-project/utils/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Guoguo 工具类"} }],
  ["/en/", { loader: () => import(/* webpackChunkName: "en_index.html" */"F:/my-project/utils/docs/.vuepress/.temp/pages/en/index.html.js"), meta: {"title":"Hello VuePress"} }],
  ["/theme-reco/api%20copy%203.html", { loader: () => import(/* webpackChunkName: "theme-reco_api copy 3.html" */"F:/my-project/utils/docs/.vuepress/.temp/pages/theme-reco/api copy 3.html.js"), meta: {"title":"api"} }],
  ["/theme-reco/api%20copy%204.html", { loader: () => import(/* webpackChunkName: "theme-reco_api copy 4.html" */"F:/my-project/utils/docs/.vuepress/.temp/pages/theme-reco/api copy 4.html.js"), meta: {"title":"api"} }],
  ["/theme-reco/api%20copy%205.html", { loader: () => import(/* webpackChunkName: "theme-reco_api copy 5.html" */"F:/my-project/utils/docs/.vuepress/.temp/pages/theme-reco/api copy 5.html.js"), meta: {"title":"api"} }],
  ["/theme-reco/api%20copy.html", { loader: () => import(/* webpackChunkName: "theme-reco_api copy.html" */"F:/my-project/utils/docs/.vuepress/.temp/pages/theme-reco/api copy.html.js"), meta: {"title":"api"} }],
  ["/theme-reco/api.html", { loader: () => import(/* webpackChunkName: "theme-reco_api.html" */"F:/my-project/utils/docs/.vuepress/.temp/pages/theme-reco/api.html.js"), meta: {"title":"api"} }],
  ["/theme-reco/check-validate.html", { loader: () => import(/* webpackChunkName: "theme-reco_check-validate.html" */"F:/my-project/utils/docs/.vuepress/.temp/pages/theme-reco/check-validate.html.js"), meta: {"title":"校验规则"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"F:/my-project/utils/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
