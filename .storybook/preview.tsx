import type { Preview } from "@storybook/nextjs";

import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      options: {
        simulateBg: { name: "Blue", value: "#0B0D17" },
        light: { name: "Light", value: "#F7F9F2" },
      },
    },
    layout: "fullscreen",
  },
  // decorators => regras de estilo do layout
  decorators: [
    (Story) => {
      return (
        <div className="relative w-screen h-screen overflow-hidden">
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
