import { images as imgs } from '../assets/img';
import * as tags from './tags';

const sites = {
  colors: [
    {
      name: 'Color Hunt',
      url: 'https://colorhunt.co/',
      description: 'Hand picked color palettes',
      img: imgs.colorHunt,
      tagNames: [tags.PALETTES],
    },
    {
      name: 'Color Lisa',
      url: 'http://www.colorlisa.com/',
      description:
        "Color palette masterpieces from the world's greatest artists",
      img: imgs.colorLisa,
      tagNames: [tags.PALETTES],
    },
    {
      name: 'Color Space',
      url: 'https://mycolor.space/',
      description: 'Color palette and gradient generator',
      img: imgs.colorSpace,
      tagNames: [tags.GRADIENTS],
    },
    {
      name: 'Colormind',
      url: 'http://colormind.io/',
      description:
        'Color scheme generator that uses deep learning to get colors from photographs and movies',
      img: imgs.colormind,
      tagNames: [tags.PALETTES],
    },
    {
      name: 'Colors Interactor',
      url: 'https://colors.learn.uno/',
      description:
        'A simple way to check the interactions between the colors of your palette',
      img: imgs.colorsInteractor,
      tagNames: [tags.PALETTES],
    },
    {
      name: 'Coolors',
      url: 'https://coolors.co/',
      description: 'Color palette generator',
      img: imgs.coolors,
      tagNames: [tags.PALETTES],
    },
    {
      name: 'CSS Gradient',
      url: 'https://cssgradient.io/',
      description: 'CSS Gradient generator',
      img: imgs.cssGradient,
      tagNames: [tags.GRADIENTS],
    },
    {
      name: 'Grabient',
      url: 'https://www.grabient.com/',
      description: 'Beautiful and simple UI for generating web gradients',
      img: imgs.grabient,
      tagNames: [tags.GRADIENTS],
    },
    {
      name: 'Picular',
      url: 'https://picular.co/',
      description: 'Google, but for colors',
      img: imgs.picular,
      tagNames: [tags.TOOLS],
    },
  ],

  images: [
    {
      name: 'Duotone',
      url: 'https://duotone.shapefactory.co/',
      description:
        'Collection of images from Unsplash with a customizable duotone filter',
      img: imgs.duotone,
      tagNames: [tags.IMAGES, tags.TOOLS],
    },
    {
      name: 'EzGIF',
      url: 'https://ezgif.com/svg-to-png',
      description:
        'Online photo conversion tools like SVG to PNG even from url',
      img: imgs.ezgif,
      tagNames: [tags.TOOLS],
    },
    {
      name: 'Feather',
      url: 'https://feathericons.com/',
      description: 'Simply beautiful open source icons',
      img: imgs.featherIcons,
      tagNames: [tags.ICONS],
    },
    {
      name: 'Font Awesome',
      url: 'https://fontawesome.com/',
      description: 'Vector icons and logos',
      img: imgs.fontAwesome,
      tagNames: [tags.ICONS],
    },
    {
      name: 'Fork Awesome',
      url: 'https://forkaweso.me/Fork-Awesome/',
      description: 'Fork of Font Awesome with even more icons',
      img: imgs.forkAwesome,
      tagNames: [tags.ICONS],
    },
    {
      name: 'humaaans',
      url: 'https://www.humaaans.com/',
      description: 'Remixable illustrations of people',
      img: imgs.humaaans,
      tagNames: [tags.ILLUSTRATIONS],
    },
    {
      name: 'Image Color Picker',
      url: 'https://image-color.com/',
      description: 'Select colors from images',
      img: imgs.imageColor,
      tagNames: [tags.TOOLS],
    },
    {
      name: 'Personas',
      url: 'https://personas.draftbit.com/',
      description: 'Playful avatar generator for the modern age',
      img: imgs.personas,
      tagNames: [tags.ILLUSTRATIONS, tags.TOOLS],
    },
    {
      name: 'SVG Repo',
      url: 'https://www.svgrepo.com/',
      description: 'Free SVG vectors and icons for commercial use',
      img: imgs.svgRepo,
      tagNames: [tags.ICONS],
    },
    {
      name: 'unDraw',
      url: 'https://undraw.co/illustrations/',
      description: 'Illustrations with customizable accent colors',
      img: imgs.undraw,
      tagNames: [tags.ILLUSTRATIONS],
    },
    {
      name: 'Unicons',
      url: 'https://iconscout.com/unicons',
      img: imgs.unicons,
      tagNames: [tags.ICONS],
    },
    {
      name: 'useAnimations',
      url: 'https://useanimations.com/',
      img: imgs.useAnimations,
      tagNames: [tags.ICONS, tags.ANIMATED],
    },
  ],

  backgrounds: [
    {
      name: 'Cool Backgrounds',
      url: 'https://coolbackgrounds.io/',
      description: 'Collection of background tools',
      img: imgs.coolBackgrounds,
      tagNames: [tags.TOOLS],
    },
    {
      name: 'Hero Patterns',
      url: 'https://www.heropatterns.com/',
      description: 'Customizable SVG background patterns',
      img: imgs.heroPatterns,
      tagNames: [tags.PATTERNS],
    },
    {
      name: 'Subtle Patterns',
      url: 'https://www.toptal.com/designers/subtlepatterns/',
      description: 'Subtle background patterns',
      img: imgs.subtlePatterns,
      tagNames: [tags.PATTERNS],
    },
    {
      name: 'SVG Backgrounds',
      url: 'https://www.svgbackgrounds.com/',
      description: 'Fancy SVG backgrounds',
      img: imgs.svgBackgrounds,
      tagNames: [tags.TOOLS],
    },
  ],

  HTML: [
    {
      name: 'Link Rels',
      url: 'https://3perf.com/blog/link-rels/',
      description: 'Preload, prefetch and other link tags',
      img: imgs.linkRels,
      tagNames: [tags.TECHNIQUES],
    },
    {
      name: 'Meta Tags',
      url: 'https://metatags.io/',
      description: 'Experiment with meta tags and see their effects',
      img: imgs.metaTags,
      tagNames: [tags.TECHNIQUES],
    },
    {
      name: 'web.dev',
      url: 'https://web.dev/',
      description: 'Useful guidance and analysis on modern web capabilities',
      img: imgs.webDev,
      tagNames: [tags.TECHNIQUES, tags.TOOLS],
    },
  ],

  CSS: [
    {
      name: 'Components AI',
      url: 'https://components.ai/',
      description: 'Experiment with fancy CSS designs',
      img: imgs.componentsAi,
      tagNames: [tags.TOOLS],
    },
    {
      name: 'CSS Effects Snippets',
      url: 'https://emilkowalski.github.io/css-effects-snippets/',
      description: 'Animated CSS effects',
      img: imgs.cssEffectsSnippets,
      tagNames: [tags.CLICK_TO_COPY],
    },
    {
      name: 'CSSFX',
      url: 'https://cssfx.dev/',
      description: 'CSS effects for hover and loading',
      img: imgs.cssfx,
      tagNames: [tags.CLICK_TO_COPY],
    },
    {
      name: 'CSS-Tricks Date Guide',
      url:
        'https://css-tricks.com/everything-you-need-to-know-about-date-in-javascript/',
      description: 'Everything you need to know about Date in JavaScript',
      img: imgs.cssTricksDate,
      tagNames: [tags.TECHNIQUES],
    },
    {
      name: 'CSS-Tricks Flexbox Guide',
      url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
      description: 'Complete guide for CSS flexbox',
      img: imgs.cssTricksFlexbox,
      tagNames: [tags.TECHNIQUES],
    },
    {
      name: 'CSS-Tricks Grid Guide',
      url: 'https://css-tricks.com/snippets/css/complete-guide-grid/',
      description: 'Complete guide for CSS grid',
      img: imgs.cssTricksGrid,
      tagNames: [tags.TECHNIQUES],
    },
    {
      name: 'Every Layout',
      url: 'https://every-layout.dev/',
      description: 'Information about layout methods',
      img: imgs.everyLayout,
      tagNames: [tags.TECHNIQUES],
    },
    {
      name: 'Experimental Layout Lab',
      url: 'https://labs.jensimmons.com/',
      description:
        'Experiments by Jen Simmons demonstrating CSS Grid and graphic design on the web',
      img: imgs.experimentalLayout,
      tagNames: [tags.TECHNIQUES],
    },
    {
      name: 'Hamburgers',
      url: 'https://jonsuh.com/hamburgers/',
      description: 'CSS-animated hamburger icons',
      img: imgs.hamburgers,
      tagNames: [tags.TECHNIQUES, tags.CLICK_TO_COPY],
    },
    {
      name: 'Text Input Effects',
      url: 'https://tympanus.net/Development/TextInputEffects/',
      description: 'Simple effects to enhance text input interations',
      img: imgs.textInputEffects,
      tagNames: [tags.TECHNIQUES, tags.CLICK_TO_COPY],
    },
    {
      name: 'WebDevTrick',
      url: 'https://webdevtrick.com/web-design/css/',
      description: 'Collection of CSS techniques',
      img: imgs.webDevTrick,
      tagNames: [tags.TECHNIQUES],
    },
  ],

  JavaScript: [
    {
      name: 'Alligator.io',
      url: 'https://alligator.io/',
      description: 'Front-end web development',
      img: imgs.alligator,
      tagNames: [tags.TECHNIQUES],
    },
    {
      name: 'A Drip of JavaScript',
      url: 'http://adripofjavascript.com/archive.html',
      description: 'Quick JavaScript tips posted weekly',
      img: imgs.dripOfJs,
      tagNames: [tags.TECHNIQUES],
    },
    {
      name: 'JS Tips',
      url: 'https://www.jstips.co/en/javascript/',
      description: 'Helpful JavaScript resource',
      img: imgs.jsTips,
      tagNames: [tags.TECHNIQUES],
    },
    {
      name: 'The Modern JavaScript Tutorial',
      url: 'http://javascript.info/',
      description:
        'Basic to advanced topics with simple, detailed explanations',
      img: imgs.modernJs,
      tagNames: [tags.TECHNIQUES],
    },
    {
      name: 'RegEx101',
      url: 'https://regex101.com/',
      description: 'Online RegEx tester',
      img: imgs.regex101,
      tagNames: [tags.REGEX],
    },
  ],

  APIs: [
    {
      name: 'API List',
      url: 'https://apilist.fun/',
      description: 'Collective list of APIs',
      img: imgs.apiList,
      tagNames: [tags.COLLECTION],
    },
    {
      name: 'CountAPI',
      url: 'https://countapi.xyz/',
      description: 'Simple numeric counter that can be incremented by request',
      img: imgs.countApi,
    },
    {
      name: 'JSONPlaceholder',
      url: 'http://jsonplaceholder.typicode.com/',
      description: 'Free fake data API',
      img: imgs.jsonPlaceholder,
      tagNames: [tags.PLACEHOLDERS],
    },
    {
      name: 'Lorem Picsum',
      url: 'https://picsum.photos/',
      description: 'Lorem Ipsum for photos',
      img: imgs.loremPicsum,
      tagNames: [tags.PLACEHOLDERS],
    },
    {
      name: 'News API',
      url: 'https://newsapi.org/',
      description: 'Worldwide news API with over 30,000 sources',
      img: imgs.newsApi,
    },
    {
      name: 'Placeholder',
      url: 'https://placeholder.com/',
      description: 'Gray placeholder images',
      img: imgs.placeholder,
      tagNames: [tags.PLACEHOLDERS],
    },
    {
      name: 'Public APIs',
      url: 'https://github.com/toddmotto/public-apis',
      description: 'Collective list of free APIs',
      img: imgs.publicApis,
      tagNames: [tags.COLLECTION],
    },
    {
      name: 'Random User Generator',
      url: 'https://randomuser.me/',
      description: 'Generate Lorem Ipsum user data',
      img: imgs.randomUser,
      tagNames: [tags.PLACEHOLDERS],
    },
  ],

  inspiration: [
    // Portfolios
    {
      name: "Andrew Wang-Hoyer's Portfolio",
      url: 'http://andrew.wang-hoyer.com/',
      img: imgs.andrewWangHoyer,
      tagNames: [tags.PORTFOLIO],
    },
    {
      name: "Daniel Temkin's Portfolio",
      url: 'http://danieltemkin.com/',
      img: imgs.danielTemkin,
      tagNames: [tags.PORTFOLIO],
    },
    {
      name: "Gilles Vermeulen's Portfolio",
      url: 'https://gillesvermeulen.be/',
      img: imgs.gillesVermeulen,
      tagNames: [tags.PORTFOLIO],
    },
    {
      name: "Hakim El Hattab's Portfolio",
      url: 'https://hakim.se/',
      img: imgs.hakimElHattab,
      tagNames: [tags.PORTFOLIO],
    },
    {
      name: "Lea Verou's Portfolio",
      url: 'http://lea.verou.me/',
      img: imgs.leaVerou,
      tagNames: [tags.PORTFOLIO],
    },
    {
      name: "Lokesh Dhakar's Portfolio",
      url: 'https://lokeshdhakar.com/',
      img: imgs.lokeshDhakar,
      tagNames: [tags.PORTFOLIO],
    },
    {
      name: "Marc's Portfolio",
      url: 'http://mrcthms.com/',
      img: imgs.marc,
      tagNames: [tags.PORTFOLIO],
    },
    {
      name: "Sarah Drasner's Portfolio",
      url: 'https://sarahdrasnerdesign.com/',
      img: imgs.sarahDrasner,
      tagNames: [tags.PORTFOLIO],
    },
    {
      name: "Sean Dorr's Portfolio",
      url: 'https://seandorr.com/',
      img: imgs.seanDorr,
      tagNames: [tags.PORTFOLIO],
    },

    // Cool Sites
    {
      name: 'Checklist Design',
      url: 'https://www.checklist.design/',
      img: imgs.checklistDesign,
      tagNames: [tags.TOOLS],
    },
    {
      name: 'MFW Design',
      url: 'http://www.mfw-design.com/',
      img: imgs.mfwDesign,
      tagNames: [tags.COOL_SITE],
    },
    {
      name: 'Molamil',
      url: 'https://www.molamil.com/',
      img: imgs.molamil,
      tagNames: [tags.COOL_SITE],
    },
    {
      name: 'Newlytics',
      url: 'https://newlytics.com/',
      img: imgs.newlytics,
      tagNames: [tags.COOL_SITE],
    },
    {
      name: 'Stripe',
      url: 'https://stripe.com/',
      img: imgs.stripe,
      tagNames: [tags.COOL_SITE],
    },
    {
      name: 'User Inyerface',
      url: 'https://userinyerface.com/',
      img: imgs.userInyerface,
      tagNames: [tags.COOL_SITE],
    },

    // Showcases/Compilations
    {
      name: 'Awwwards',
      url: 'https://www.awwwards.com/',
      img: imgs.awwwards,
      tagNames: [tags.COLLECTION],
    },
    {
      name: 'Behance',
      url: 'https://www.behance.net/galleries/Interaction',
      img: imgs.behance,
      tagNames: [tags.COLLECTION],
    },
    {
      name: 'Bulma',
      url: 'https://bulma.io/expo/',
      img: imgs.bulma,
      tagNames: [tags.COLLECTION],
    },
    {
      name: 'Collect UI',
      url: 'https://collectui.com/',
      img: imgs.collectUi,
      tagNames: [tags.COLLECTION],
    },
    {
      name: 'Design Details',
      url: 'https://brianlovin.com/design-details',
      img: imgs.designDetails,
      tagNames: [tags.COLLECTION],
    },
    {
      name: 'DesignMunk',
      url: 'https://designmunk.com/',
      img: imgs.designMunk,
      tagNames: [tags.COLLECTION],
    },
    {
      name: 'Dribbble',
      url: 'https://dribbble.com/',
      img: imgs.dribbble,
      tagNames: [tags.COLLECTION],
    },
    {
      name: 'Email Love',
      url: 'https://emaillove.com/',
      img: imgs.emailLove,
      tagNames: [tags.COLLECTION],
    },
    {
      name: 'Httpster',
      url: 'https://httpster.net/',
      img: imgs.httpster,
      tagNames: [tags.COLLECTION],
    },
    {
      name: 'Made with Laravel',
      url: 'https://madewithlaravel.com/',
      img: imgs.madeWithLaravel,
      tagNames: [tags.COLLECTION],
    },
    {
      name: 'Made with React.js',
      url: 'https://madewithreactjs.com/',
      img: imgs.madeWithReact,
      tagNames: [tags.COLLECTION],
    },
    {
      name: 'Made with Vue.js',
      url: 'https://madewithvuejs.com/',
      img: imgs.madeWithVue,
      tagNames: [tags.COLLECTION],
    },
    {
      name: 'Material-UI Showcase',
      url: 'https://material-ui.com/discover-more/showcase/',
      img: imgs.materialUi,
      tagNames: [tags.COLLECTION],
    },
    {
      name: 'One Page Love',
      url: 'https://onepagelove.com/',
      img: imgs.onePageLove,
      tagNames: [tags.COLLECTION],
    },
    {
      name: 'Pages',
      url: 'https://www.pages.xyz',
      img: imgs.pages,
      tagNames: [tags.COLLECTION],
    },
    {
      name: 'pttrns',
      url: 'https://pttrns.com/',
      img: imgs.pttrns,
      tagNames: [tags.COLLECTION],
    },
    {
      name: 'UI Movement',
      url: 'https://uimovement.com/',
      img: imgs.uiMovement,
      tagNames: [tags.COLLECTION],
    },
    {
      name: 'UI Sources',
      url: 'https://www.uisources.com/',
      img: imgs.uiSources,
      tagNames: [tags.COLLECTION],
    },
    {
      name: 'Webframe',
      url: 'https://webframe.xyz/',
      img: imgs.webframe,
      tagNames: [tags.COLLECTION],
    },
  ],
};

export default sites;
