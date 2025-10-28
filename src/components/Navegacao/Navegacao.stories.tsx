import type { Meta, StoryObj } from "@storybook/nextjs";

import { fn, userEvent, within } from "storybook/test";

import { Navegacao } from "./";
import clsx from "clsx";

const contentNavClass = clsx(
  "pr-6 pl-8 h-24 w-full",
  "flex items-center justify-end",
  "bg-white/10 backdrop-blur-xl"
);

const desktopClass =
  "bg-cover bg-center h-screen bg-[url('/assets/home/background-home-desktop.jpg')]";
const tabletClass =
  "bg-cover bg-center h-screen bg-[url('/assets/home/background-home-tablet.jpg')]";

const meta = {
  title: "Components/Header/Navegacao",
  component: Navegacao,
  parameters: {
    layout: "",
  },

  args: { onClick: fn() },
} satisfies Meta<typeof Navegacao>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NavegacaoDesktop: Story = {
  globals: {
    viewport: { value: "desktop" },
  },
  render: () => (
    <div className={desktopClass}>
      <div className={contentNavClass}>
        <Navegacao />
      </div>
    </div>
  ),
};

export const NavDesktopHoverItem: Story = {
  globals: {
    viewport: { value: "desktop" },
  },
  render: () => (
    <div className={desktopClass}>
      <div className={contentNavClass}>
        <Navegacao />
      </div>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const menuItem = await canvas.findByRole("link", {
      name: "01 destination",
    });

    // Não consegui renderizar sem isso
    menuItem.style.borderBottom = "3px solid #fff";

    await userEvent.hover(menuItem);
  },
};

export const NavegacaoTablet: Story = {
  globals: {
    viewport: { value: "tablet" },
  },
  render: () => (
    <div className={tabletClass}>
      <div className={contentNavClass}>
        <Navegacao />
      </div>
    </div>
  ),
};

export const NavTabletHoverItem: Story = {
  globals: {
    viewport: { value: "tablet" },
  },
  render: () => (
    <div className={tabletClass}>
      <div className={clsx(contentNavClass, "flex")}>
        <Navegacao />
      </div>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const menuItem = await canvas.findByRole("link", {
      name: "01 destination",
    });

    // Não consegui renderizar sem isso
    menuItem.style.borderBottom = "3px solid #fff";

    await userEvent.hover(menuItem);
  },
};
