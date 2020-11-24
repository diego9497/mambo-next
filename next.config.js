const { locales, defaultLocale } = require("./i18n.json");
const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
  },
  i18n: {
    locales,
    defaultLocale,
  },
});
