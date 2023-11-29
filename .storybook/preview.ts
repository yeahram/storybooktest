// import type { Preview } from "@storybook/react";

// const preview: Preview = {
//   parameters: {
//     actions: { argTypesRegex: "^on[A-Z].*" },
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/i,
//       },
//     },
//   },
// };

// export default preview;

import React from "react";
import { addDecorator } from "@storybook/react";
import { Center } from "@chakra-ui/react";
import { ThemeProvider, Theme, CSSReset } from "@chakra-ui/react";
addDecorator((story) => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);
