import { extendTheme, theme as base } from "@chakra-ui/react";

const customTheme = extendTheme({
  colors: {
    brand: {
        900: '#EEF4FF',
        800: '#1A7EEf',
        700: 'hsl(211,66%,15%)',
        600: '#509DF3',
        500: '#A3CBF9'
    }
  },
  fonts: {
    heading: `Haffer, ${base.fonts?.heading}`,
    body: ` DM Sans , ${base.fonts?.body}`
  }
});

export default customTheme;
