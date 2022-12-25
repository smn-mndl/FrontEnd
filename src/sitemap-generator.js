require("babel-register")({
    presets: ["es2015", "react"]
  });
  require.extensions['.css'] = () => {}
  require.extensions['.scss'] = () => {}
  require.extensions['.jpg'] = () => {}
  const router = require("./sitemap-routes").default;
  const Sitemap = require("react-router-sitemap").default;
  
  function generateSitemap() {
      return (
        new Sitemap(router)
            .build("https://www.sumanmondal.com")
            .save("./public/sitemap.xml")
      );
  }
  
  generateSitemap();