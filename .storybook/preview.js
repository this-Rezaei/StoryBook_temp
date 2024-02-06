/** @type { import('@storybook/react').Preview } */
import React from 'react';
import { ThemeProvider, theme, CSSReset, Box } from '@chakra-ui/react'
import '@storybook/addon-console'
import { withConsole } from '@storybook/addon-console';
import { withKnobs } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
const preview = {
  decorators: [
    (storyFn, context) => withConsole()(storyFn)(context),
    withKnobs,
    (Story) => (
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Box m='4'>
          <Story />
        </Box>
      </ThemeProvider>),
  ],

  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    options: {
      // The `a` and `b` arguments in this function have a type of `import('@storybook/types').IndexEntry`. Remember that the function is executed in a JavaScript environment, so use JSDoc for IntelliSense to introspect it.
      storySort: (a, b) =>
        a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true }),
    },

    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        // You can also add your own viewports here
      },
    }
  },

};

export default preview;