import comp from "F:/my-project/utils/docs-vuepress/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"目录\",\"slug\":\"目录\",\"link\":\"#目录\",\"children\":[{\"level\":3,\"title\":\"简介\",\"slug\":\"简介\",\"link\":\"#简介\",\"children\":[]},{\"level\":3,\"title\":\"我们的优势\",\"slug\":\"我们的优势\",\"link\":\"#我们的优势\",\"children\":[]},{\"level\":3,\"title\":\"其他开源项目\",\"slug\":\"其他开源项目\",\"link\":\"#其他开源项目\",\"children\":[]},{\"level\":3,\"title\":\"作者\",\"slug\":\"作者\",\"link\":\"#作者\",\"children\":[]},{\"level\":3,\"title\":\"版权说明\",\"slug\":\"版权说明\",\"link\":\"#版权说明\",\"children\":[]}]}],\"git\":{\"updatedTime\":1720778229000,\"contributors\":[{\"name\":\"袁果锅\",\"email\":\"2914310412@qq.com\",\"commits\":1}]},\"filePathRelative\":\"README.md\",\"excerpt\":\"<!-- # Guoguo 工具类 -->\\n<br>\\n<br>\\n<br>\\n<br>\\n<p align=\\\"center\\\">\\n  <a href=\\\"https://github.com/shixindea/shixinde-utils/\\\">\\n       \\n  </a>\\n  </p><h3 align=\\\"center\\\">Guoguo-utils</h3>\\n  <p align=\\\"left\\\" style=\\\"text-indent:2em\\\">\\n   欢迎各位开发者使用我的JavaScript个人工具类库！这个库集合了一系列精心设计的静态方法，旨在简化日常开发中的常见任务，如字符串处理、数组操作、日期格式化等。我致力于打造一个高效、易用且可扩展的工具集，希望能为您的项目开发带来便利。\\n </p>\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
