const { PageRouteEnum } = require('./src/enums/core/page-route.enum');
const { LanguageEnum } = require('./src/enums/core/language.enum');

/**
 * Configure your Gatsby site with this file.
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    pageRoutes: [
      {
        key: PageRouteEnum.GetStarted,
        camelCase: 'getStarted',
      },
      {
        key: PageRouteEnum.DesignPrinciple,
        camelCase: 'designPrinciple',
      },
      {
        key: PageRouteEnum.Color,
        camelCase: 'color',
      },
      {
        key: PageRouteEnum.Components,
        camelCase: 'components',
      },
    ],
    hosts: {
      foretWebsite: 'https://foretdesign.io',
      foretReactNpm: 'https://www.npmjs.com/package/@altenull/foret-react',
      foretNgNpm: 'https://www.npmjs.com/package/@altenull/foret-ng',
      foretGithub: 'https://github.com/altenull/foret',
      emotionTheming: 'https://emotion.sh/docs/theming',
    },
    nodeEnv: process.env.NODE_ENV,
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-intl',
      options: {
        path: `${__dirname}/src/intl`,
        languages: [LanguageEnum.Ko, LanguageEnum.En],
        defaultLanguage: LanguageEnum.En,
        redirect: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'codes',
        path: `${__dirname}/src/assets/codes`,
      },
    },
    {
      resolve: 'gatsby-remark-prismjs',
      options: {
        // Class prefix for <pre> tags containing syntax highlighting;
        // defaults to 'language-' (e.g. <pre class="language-js">).
        // If your site loads Prism into the browser at runtime,
        // (e.g. for use with libraries like react-live),
        // you may use this to prevent Prism from re-processing syntax.
        // This is an uncommon use-case though;
        // If you're unsure, it's best to use the default value.
        classPrefix: 'language-',
        // This is used to allow setting a language for inline code
        // (i.e. single backticks) by creating a separator.
        // This separator is a string and will do no white-space
        // stripping.
        // A suggested value for English speakers is the non-ascii
        // character '›'.
        inlineCodeMarker: null,
        // This lets you set up language aliases.  For example,
        // setting this to '{ sh: "bash" }' will let you use
        // the language "sh" which will highlight using the
        // bash highlighter.
        aliases: {},
        // This toggles the display of line numbers globally alongside the code.
        // To use it, add the following line in gatsby-browser.js
        // right after importing the prism color scheme:
        //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
        // Defaults to false.
        // If you wish to only show line numbers on certain code blocks,
        // leave false and use the {numberLines: true} syntax below
        showLineNumbers: false,
        // If setting this to true, the parser won't handle and highlight inline
        // code used in markdown i.e. single backtick code like `this`.
        noInlineHighlight: false,
        // This adds a new language definition to Prism or extend an already
        // existing language definition. More details on this option can be
        // found under the header "Add new language definition or extend an
        // existing language" below.
        languageExtensions: [
          {
            language: 'superscript',
            extend: 'javascript',
            definition: {
              superscript_types: /(SuperType)/,
            },
            insertBefore: {
              function: {
                superscript_keywords: /(superif|superelse)/,
              },
            },
          },
        ],
        // Customize the prompt used in shell output
        // Values below are default
        prompt: {
          user: 'root',
          host: 'localhost',
          global: false,
        },
        // By default the HTML entities <>&'" are escaped.
        // Add additional HTML escapes by providing a mapping
        // of HTML entities and their escape value IE: { '}': '&#123;' }
        escapeEntities: {},
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: ['gatsby-remark-prismjs'],
      },
    },
    {
      resolve: 'gatsby-plugin-scroll-reveal',
      options: {
        threshold: 0.5, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        // Advanced Options
        selector: '[data-sal]', // Selector of the elements to be animated
        rootMargin: '0% 50%', // Corresponds to root's bounding box margin
      },
    },
  ],
};
