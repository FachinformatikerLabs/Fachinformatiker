export default defineAppConfig({
  docus: {
    title: 'Docus',
    description: 'The best place to start your documentation.',
    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',

    socials: {
      twitter: 'nyxb0',
      github: 'nyxb',

      nuxt: {
        label: 'Nuxt',
        icon: 'simple-icons:nuxtdotjs',
        href: 'https://nuxt.com'
      },

      youtube: 'https://youtube.com/@nyxb_0'
    },

    github: {
      dir: '/content',
      branch: 'main',
      repo: 'Fachinformatiker',
      owner: 'nyxb',
      edit: true,
      baseUrl: ''
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