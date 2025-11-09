/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://horizonteweb.vercel.app', 
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/server-sitemap.xml'], 
};
