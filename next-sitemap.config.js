/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://horizonteweb.vercel.app',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
    additionalSitemaps: [
      'https://horizonteweb.vercel.app/sitemap-0.xml',
    ],
  },
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: 'daily',
      priority: path === '/' ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    }
  },
}
