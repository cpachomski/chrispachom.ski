export default {
  work: {
    key: 'section-work',
    sectionName: 'Work',
    blurb: `Currently tech leading at CNN Business.`,
    items: [
      {
        key: 'cnnbiz-sr-web-dev',
        title: 'Sr. Web Developer',
        subtitle: 'CNN Business',
        duration: 'Feb 2018 - Present',
        bullets: [
          'Tech Lead for high impact product refresh. Managed development of microservice architectures with an emphasis on real-time streaming and one-way data flow.',
          'Mentored fellow developers on stacks, tooling, and product/development lifecycle. Conducted remote learning sessions/presentations to train and empower our global team.',
          'Developed GraphQL APIs to aggregate RESTful services into reusable fragments, types, and queries (Node).',
          'Developed e2e tested, compose-able, and theme-able React components within our design system.',
          'Create and maintained cloud-based CI/CD pipelines to ensure a fast turnaround time for fixes and features.',
        ],
      },
      {
        key: 'cnnmoney-web-dev',
        title: 'Web Developer',
        subtitle: 'CNN Money',
        duration: 'Aug 2016 - Feb 2018',
        bullets: [
          'Developed and maintained legacy stack for existing money.cnn.com property.',
          'Developed modern React sites for CNN Media, CNN Tech, and CNN Money Switzerland brands utilizing the wonders of one-way data flow, ES6+, GraphQL, and css-in-js.',
          'Proposed and developed a novel system for serving pre-rendered React components and their dependencies via RESTful APIs, allowing for incremental adoption of React in older JS projects.',
        ],
      },
      {
        key: 'onerockwell-fe-dev',
        title: 'Frontend Developer',
        subtitle: 'One Rockwell',
        duration: 'Feb 2016 - Aug 2016',
        bullets: [
          'Developed eCommerce sites for high profile retailers.',
          'Provided design and UX insight to improve/maintain existing sites.',
          'Developed server-side features within the Magento eCommerce framework (PHP).',
          'Performed accessibility audits of client applications to ensure ADA compliance.',
        ],
      },
      {
        key: 'born-fe-dev',
        title: 'Frontend Developer',
        subtitle: 'BORN Group',
        duration: 'Sep 2015 - Feb 2016',
        bullets: [
          'Developed eCommerce sites for high profile retailers.',
          'Provided design and UX insight to improve/maintain existing sites.',
          'Developed server-side features within the Magento eCommerce framework (PHP).',
          'Translated designs into pixel-perfect CSS.',
        ],
      },
      {
        key: 'ironpaper-web-dev',
        title: 'Web Developer',
        subtitle: 'Ironpaper',
        duration: 'May 2015 - Sep 2015',
        bullets: [
          'Developed custom Wordpress sites from mockup to production.',
          'Developed responsive HTML/CSS templates and pages.',
          'Integrated Google Analytics and Google Tag Manager for client specific reporting.',
        ],
      },
    ],
  },
  code: {
    key: 'section-code',
    sectionName: 'Code',
    blurb: '* CLICKITY CLACKETY CLICK CLICK CLICK *',
    items: [
      {
        key: 'code-project-stockboy',
        title: 'Stockboy',
        subtitle: 'Node | Telegram',
        bullets: [
          'Telegram bot for parsing chat messages and sending stock quotes on command.',
        ],
        links: [
          {
            title: 'code',
            url: 'https://github.com/cpachomski/Stockboy',
          },
        ],
      },
      {
        key: 'code-project-flocking',
        title: 'Flocking',
        subtitle: 'JS | HTML Canvas',
        bullets: [
          'JS implementation of a basic flocking algorithm.',
          'Boid vectors are calculated as a summation of cohesion, dispersion, and alignment forces.',
        ],
        links: [
          {
            title: 'view',
            url: 'https://flocking.surge.sh',
          },
          {
            title: 'code',
            url: 'https://github.com/cpachomski/flocking',
          },
        ],
      },
      {
        key: 'code-project-lines',
        title: 'Lines',
        subtitle: 'React | CSS Modules | HTML Canvas',
        bullets: [
          'An HTML canvas experiment for generating abstract desktop backgrounds.',
          'Anytime the canvas is clicked, a point is added. The new point is connected to every existing point by a straight line.',
          'Users can change the line color, background color, or use a random color generator.',
          'Points can be added randomly via the random generator.',
        ],
        links: [
          {
            title: 'view',
            url: 'https://lines.surge.sh',
          },
          {
            title: 'code',
            url: 'https://github.com/cpahomski/lines',
          },
        ],
      },
    ],
  },
  music: {
    sectionName: 'Music',
  },
}
