const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "@primary-color": "#67D5B5",
      "@info-color": "#43d4e1",
      "@success-color": "#26A47E",
      "@processing-color": "#43d4e1",
      "@error-color": "#ff76ab",
      "@highlight-color": "#9a86ee",
      "@warning-color": "#ff76ab",
      "@black": "#25262a",
      "@border-radius-base": "6px",
      "@border-color-base": "#f0f0f0"
    }
  })
);
