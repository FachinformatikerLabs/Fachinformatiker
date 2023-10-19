export default defineAppConfig({
  docus: {
    title: 'Fachinformatiker',
    description: 'Fachinformatiker" ist eine Online-Plattform für die Prüfungsvorbereitung, die dich gezielt auf die Fachinformatiker-Prüfung vorbereitet. Durch eine Vielzahl an Ressourcen und Übungsmaterialien ermöglicht sie dir, dich effektiv und flexibel auf deine bevorstehende Prüfung vorzubereiten.',
    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',

    socials: {
      twitter: 'nyxb0',
      github: 'nyxb',

      // nuxt: {
      //   label: 'Nuxt',
      //   icon: 'simple-icons:nuxtdotjs',
      //   href: 'https://nuxt.com'
      // },

      youtube: 'https://youtube.com/@nyxb_0'
    },

    github: {
      dir: '/content',
      branch: 'main',
      repo: 'Fachinformatiker',
      owner: 'nyxb',
      edit: true,
      baseUrl: 'https://github.com/nyxb/Fachinformatiker/blob/main'
    },

    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },

    main: {
      padded: true,
      fluid: true
    },

    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    },

    footer: {
      credits: {
        text: 'Powered by Nyxb',
        href: 'https://nyxb.blog'
      }
    }
  }
})
