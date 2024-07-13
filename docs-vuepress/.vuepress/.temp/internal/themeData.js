export const themeData = JSON.parse("{\"locales\":{\"/\":{\"repo\":\"https://github.com/shixindea/shixinde-utils\",\"selectLanguageName\":\"简体中文\",\"selectLanguageText\":\"选择语言\",\"navbar\":[{\"text\":\"主页\",\"link\":\"/\"},{\"text\":\"快速上手\",\"link\":\"/theme-reco/快速上手\",\"activeMatch\":\"/theme-reco/\"}],\"sidebar\":{\"/theme-reco/\":[{\"text\":\"目录\",\"collapsible\":false,\"children\":[{\"text\":\"快速上手\",\"link\":\"快速上手\"},{\"text\":\"校验规则\",\"link\":\"check-validate\"}]}]},\"sidebarDepth\":2,\"notFound\":[\"没找到\",\"网页走丢了\"],\"backToHome\":\"返回首页\"},\"/en/\":{\"repo\":\"https://github.com/shixindea/shixinde-utils\",\"selectLanguageName\":\"English\",\"selectLanguageText\":\"Language\",\"navbar\":[],\"sidebar\":{\"/theme-reco/\":[{\"text\":\"目录\",\"collapsible\":false,\"children\":[{\"text\":\"快速上手\",\"link\":\"快速上手\"},{\"text\":\"校验规则\",\"link\":\"check-validate\"}]}]}}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"navbar\":[],\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"heading\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
