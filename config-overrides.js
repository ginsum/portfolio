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
      "@info-color": "#a9f5c2",
      "@success-color": "#26A47E",
      "@processing-color": "#43e185",
      "@error-color": "#ff76ab",
      "@highlight-color": "#86eeca",
      "@warning-color": "#ff76ab",
      "@black": "#434343",
      "@border-radius-base": "6px",
      "@border-color-base": "#f0f0f0",
      "@font-size-base": "14px",
      "@heading-color": "fade(#434343, 85%)",
      "@box-shadow-base":
        "0 2px 6px -2px rgba(0, 0, 0, 0.12), 0 3px 8px 0 rgba(0, 0, 0, 0.08), 0 4px 14px 4px rgba(0, 0, 0, 0.05)"
    }
  })
);
