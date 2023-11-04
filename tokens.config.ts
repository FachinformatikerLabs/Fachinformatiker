import { defineTheme } from 'pinceau'
import theme from '@nuxt-themes/tokens/config'

export default defineTheme({
   color: {
      // @ts-expect-error is fine
      primary: theme.color.yellow,
   },
   docux: {
      landing: {
         hero: {
            content: {
               title: {
                  gradientText: {
                     initial: 'linear-gradient(114deg, {color.gray.100} 10%, {color.gray.300} 54%, {color.gray.600})',
                     dark: 'linear-gradient(114deg, {color.gray.200} 10%, {color.gray.400} 54%, {color.gray.700})',
                  },
                  mixBlendMode: 'exclusion',
               },
            },
         },
         card: {
            wrapper: {
               backgroundImage: {
                  initial: 'linear-gradient(180deg, rgba({temp.color.gray.100}, 0.3), rgba({temp.color.gray.100}, 0.6))',
                  dark: 'linear-gradient(180deg, rgba({temp.color.gray.800}, 0.3), rgba({temp.color.gray.900}, 0.6))',
               },
            },
         },
      },
   },
})
