import { images as imgs } from '../assets/img';

const sites = {
  colors: [
    {
      name: 'Color Space',
      url: 'https://mycolor.space/',
      description: 'Color palette and gradient generator',
      img: imgs.colorSpace,
    },
    {
      name: 'Coolors',
      url: 'https://coolors.co/',
      description: 'Color palette generator',
      img: imgs.coolors,
    },
    {
      name: 'Color Hunt',
      url: 'https://colorhunt.co/',
      description: 'Hand picked color palettes',
      img: imgs.colorHunt,
    },
  ],

  images: [
    {
      name: 'EzGIF',
      url: 'https://ezgif.com/svg-to-png',
      description:
        'Online photo conversion tools like SVG to PNG even from url',
      img: imgs.ezgif,
    },
    {
      name: 'SVG Repo',
      url: 'https://www.svgrepo.com/',
      description: 'Free SVG vectors and icons for commercial use',
      img: imgs.svgRepo,
    },
    {
      name: 'Image Color Picker',
      url: 'https://image-color.com/',
      description: 'Select colors from images',
      img: imgs.imageColor,
    },
    {
      name: 'Font Awesome',
      url: 'https://fontawesome.com/',
      description: 'Vector icons and logos',
      img: imgs.fontAwesome,
    },
    {
      name: 'unDraw',
      url: 'https://undraw.co/illustrations/',
      description: 'Illustrations with customizable accent colors',
      img: imgs.undraw,
    },
    {
      name: 'humaaans',
      url: 'https://www.humaaans.com/',
      description: 'Remixable illustrations of people',
      img: imgs.humaaans,
    },
  ],

  backgrounds: [
    {
      name: 'Cool Backgrounds',
      url: 'https://coolbackgrounds.io/',
      description: 'Collection of background tools',
      img: imgs.coolBackgrounds,
    },
    {
      name: 'Hero Patterns',
      url: 'https://www.heropatterns.com/',
      description: 'Customizable and repeatable SVG background patterns',
      img: imgs.heroPatterns,
    },
    {
      name: 'SVG Backgrounds',
      url: 'https://www.svgbackgrounds.com/',
      description: 'Fancy SVG backgrounds',
      img: imgs.svgBackgrounds,
    },
  ],

  HTML: [
    {
      name: 'Link Rels',
      url: 'https://3perf.com/blog/link-rels/',
      description: 'Preload, prefetch and other link tags',
      img: imgs.linkRels,
    },
    {
      name: 'Meta Tags',
      url: 'https://metatags.io/',
      description: 'Experiment with meta tags and see their effects',
      img: imgs.metaTags,
    },
  ],

  CSS: [
    {
      name: 'CSSFX',
      url: 'https://cssfx.dev/',
      description: 'CSS effects for hover and loading',
      img: imgs.cssfx,
    },
    {
      name: 'CSS-Tricks Grid Guide',
      url: 'https://css-tricks.com/snippets/css/complete-guide-grid/',
      description: 'Complete guide for CSS grid',
      img: imgs.cssTricksGrid,
    },
    {
      name: 'CSS-Tricks Flexbox Guide',
      url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
      description: 'Complete guide for CSS flexbox',
      img: imgs.cssTricksFlexbox,
    },
    {
      name: 'CSS-Tricks Date Guide',
      url:
        'https://css-tricks.com/everything-you-need-to-know-about-date-in-javascript/',
      description: 'Everything you need to know about Date in JavaScript',
      img: imgs.cssTricksDate,
    },
    {
      name: 'WebDevTrick',
      url: 'https://webdevtrick.com/web-design/css/',
      description: 'Collection of CSS techniques',
      img: imgs.webDevTrick,
    },
    {
      name: 'Hamburgers',
      url: 'https://jonsuh.com/hamburgers/',
      description: 'CSS-animated hamburger icons',
      img: imgs.hamburgers,
    },
    {
      name: 'CSS Effects Snippets',
      url: 'https://emilkowalski.github.io/css-effects-snippets/',
      description: 'Animated CSS effects',
      img: imgs.cssEffectsSnippets,
    },
    {
      name: 'Every Layout',
      url: 'https://every-layout.dev/',
      description: 'Information about layout methods',
      img: imgs.everyLayout,
    },
    {
      name: 'Text Input Effects',
      url: 'https://tympanus.net/Development/TextInputEffects/',
      description: 'Simple effects to enhance text input interations',
      img: imgs.textInputEffects,
    },
  ],

  JavaScript: [
    {
      name: 'The Modern JavaScript Tutorial',
      url: 'http://javascript.info/',
      description:
        'Basic to advanced topics with simple, detailed explanations',
      img: imgs.modernJs,
    },
    {
      name: 'JS Tips',
      url: 'https://www.jstips.co/en/javascript/',
      description: 'Helpful JavaScript resource',
      img: imgs.jsTips,
    },
    {
      name: 'Alligator.io',
      url: 'https://alligator.io/',
      description: 'Front-end web development',
      img: imgs.alligator,
    },
    {
      name: 'A Drip of JavaScript',
      url: 'http://adripofjavascript.com/archive.html',
      description: 'Quick JavaScript tips posted weekly',
      img: imgs.dripOfJs,
    },
    {
      name: 'RegEx101',
      url: 'https://regex101.com/',
      description: 'Online RegEx tester',
      img: imgs.regex101,
    },
  ],

  APIs: [
    {
      name: 'CountAPI',
      url: 'https://countapi.xyz/',
      description: 'Simple numeric counter that can be incremented by request',
      img: imgs.countApi,
    },
    {
      name: 'Public APIs',
      url: 'https://github.com/toddmotto/public-apis',
      description: 'Collective list of free APIs',
      img: imgs.publicApis,
    },
    {
      name: 'Random User Generator',
      url: 'https://randomuser.me/',
      description: 'Generate Lorem Ipsum user data',
      img: imgs.randomUser,
    },
    {
      name: 'API List',
      url: 'https://apilist.fun/',
      description: 'Collective list of APIs',
      img: imgs.apiList,
    },
    {
      name: 'News API',
      url: 'https://newsapi.org/',
      description: 'Worldwide news API with over 30,000 sources',
      img: imgs.newsApi,
    },
    {
      name: 'JSONPlaceholder',
      url: 'http://jsonplaceholder.typicode.com/',
      description: 'Free fake data API',
      img: imgs.jsonPlaceholder,
    },
    {
      name: 'Lorem Picsum',
      url: 'https://picsum.photos/',
      description: 'Lorem Ipsum for photos',
      img: imgs.loremPicsum,
    },
    {
      name: 'Placeholder',
      url: 'https://placeholder.com/',
      description: 'Gray placeholder images',
      img: imgs.placeholder,
    },
  ],

  inspiration: [
    // Portfolios
    {
      name: "Andrew Wang-Hoyer's Portfolio",
      url: 'http://andrew.wang-hoyer.com/',
      img: imgs.andrewWangHoyer,
    },
    {
      name: "Daniel Temkin's Portfolio",
      url: 'http://danieltemkin.com/',
      img: imgs.danielTemkin,
    },
    {
      name: "Hakim El Hattab's Portfolio",
      url: 'https://hakim.se/',
      img: imgs.hakimElHattab,
    },
    {
      name: "Lea Verou's Portfolio",
      url: 'http://lea.verou.me/',
      img: imgs.leaVerou,
    },
    {
      name: "Lokesh Dhakar's Portfolio",
      url: 'https://lokeshdhakar.com/',
      img: imgs.lokeshDhakar,
    },
    {
      name: "Sarah Drasner's Portfolio",
      url: 'https://sarahdrasnerdesign.com/',
      img: imgs.sarahDrasner,
    },
    {
      name: "Gilles Vermeulen's Portfolio",
      url: 'https://gillesvermeulen.be/',
      img: imgs.gillesVermeulen,
    },
    {
      name: "Marc's Portfolio",
      url: 'http://mrcthms.com/',
      img: imgs.marc,
    },
    {
      name: "Sean Dorr's Portfolio",
      url: 'https://seandorr.com/',
      img: imgs.seanDorr,
    },

    // Cool Sites
    {
      name: 'Httpster',
      url: 'https://httpster.net/',
      img: imgs.httpster,
    },
    {
      name: 'MFW Design',
      url: 'http://www.mfw-design.com/',
      img: imgs.mfwDesign,
    },
    {
      name: 'User Inyerface',
      url: 'https://userinyerface.com/',
      img: imgs.userInyerface,
    },
    {
      name: 'Checklist Design',
      url: 'https://www.checklist.design/',
      img: imgs.checklistDesign,
    },
    {
      name: 'Molamil',
      url: 'https://www.molamil.com/',
      img: imgs.molamil,
    },
    {
      name: 'Stripe',
      url: 'https://stripe.com/',
      img: imgs.stripe,
    },
    {
      name: 'Newlytics',
      url: 'https://newlytics.com/',
      img: imgs.newlytics,
    },
  ],
};

export default sites;
