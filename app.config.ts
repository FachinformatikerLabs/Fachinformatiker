export default defineAppConfig({
  docus: {
    title: 'Fachinformatiker',
    description: 'Fachinformatiker" ist eine Online-Plattform für die Prüfungsvorbereitung, die dich gezielt auf die Fachinformatiker-Prüfung vorbereitet. Durch eine Vielzahl an Ressourcen und Übungsmaterialien ermöglicht sie dir, dich effektiv und flexibel auf deine bevorstehende Prüfung vorzubereiten.',
    image: 'https://raw.githubusercontent.com/FachinformatikerLabs/Fachinformatiker/main/public/fachinformatiker-og.png',

    socials: {
      discord: 'http://nyxb.chat',
      twitter: 'nyxb0',
      github: 'nyxb',
      youtube: 'https://youtube.com/@nyxb_0'
    },

    github: {
      dir: '/content',
      branch: 'main',
      repo: 'Fachinformatiker',
      owner: 'nyxb',
      edit: true,
      baseUrl: 'https://github.com/'
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
        icon: '',
        text: 'Powered by Nyxb',
        href: 'https://nyxb.blog'
      }
    }
  }
})
