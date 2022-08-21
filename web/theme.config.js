export default {
  projectLink: 'https://github.com/junghyeonsu/awesome-dev-activity-review', // GitHub link in the navbar
  docsRepositoryBase: 'https://github.com/junghyeonsu/awesome-dev-activity-review/tree/main/web/pages', // base URL for the docs repository
  // defaultMenuCollapsed: false,
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: `MIT ${new Date().getFullYear()} © junghyeonsu.`,
  footerEditLink: `Edit this page on GitHub`,
  logo: (
    <>
      <span>Awesome Dev Activity Review</span>
    </>
  ),
  head: (
    <>
      <title>Awesome Dev Activity Review</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="여러 개발 활동들의 리뷰들을 모아둬요" />
      <meta name="og:title" content="Awesome Dev Activity Review" />
    </>
  ),
  i18n: [{ locale: "ko", text: "한국어" }],
}
