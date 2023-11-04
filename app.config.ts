export default defineAppConfig({
   docux: {
      title: 'Fachinformatiker',
      description: 'Fachinformatiker" ist eine Online-Plattform für die Prüfungsvorbereitung, die dich gezielt auf die Fachinformatiker-Prüfung vorbereitet. Durch eine Vielzahl an Ressourcen und Übungsmaterialien ermöglicht sie dir, dich effektiv und flexibel auf deine bevorstehende Prüfung vorzubereiten.',
      image: 'https://github.com/nyxb/docux/blob/main/.github/images/docux_repo_picture.png',
      socials: {
         // twitter: 'nyxb0',
         github: 'FachinformatikerLabs/Fachinformatiker',
         discord: 'https://fachinformatiker.site/discord',
      },
      github: {
         dir: 'content',
         branch: 'main',
         repo: 'Fachinformatiker',
         owner: 'FachinformatikerLabs',
         edit: true,
      },
      aside: {
         level: 1,
         collapsed: false,
         exclude: [],
         navigation: true,
      },
      main: {
         padded: true,
      },
      header: {
         title: 'Fachinformatiker',
         logo: true,
         showLinkIcon: true,
         exclude: [],
         navigation: false,
      },
      footer: {
         iconLinks: [
            // {
            //    href: 'https://nyxb.nexus',
            //    icon: 'simple-icons:web',
            // },
         ],
      },
   },
})
