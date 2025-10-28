import type { Meta, StoryObj } from "@storybook/nextjs";

import { Header } from ".";
import { Navegacao } from "../Navegacao";
import { NavegacaoMobile } from "../NavegacaoMobile";
import { userEvent, within } from "storybook/test";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  subcomponents: { Navegacao, NavegacaoMobile },
  parameters: {},
};

const desktopClass =
  "bg-cover bg-center h-screen bg-[url('/assets/home/background-home-desktop.jpg')]";
const tabletClass =
  "bg-cover bg-center h-screen bg-[url('/assets/home/background-home-tablet.jpg')]";
const mobileClass =
  "bg-cover bg-center h-screen bg-[url('/assets/home/background-home-mobile.jpg')]";

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
  globals: {
    viewport: { value: "desktop" },
  },
  render: () => (
    <div className={desktopClass}>
      <Header />
    </div>
  ),
};

export const Tablet: Story = {
  globals: {
    viewport: { value: "tablet", isRotated: false },
  },
  render: () => (
    <div className={tabletClass}>
      <Header />
    </div>
  ),
};

export const MobileClose: Story = {
  globals: {
    viewport: { value: "mobile1", isRotated: false },
  },
  render: () => (
    <div className={mobileClass}>
      <Header />
    </div>
  ),
};

export const MobileOpen: Story = {
  globals: {
    viewport: { value: "mobile1", isRotated: false },
  },
  render: () => (
    <div className={mobileClass}>
      <Header />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const mobileMenuToggle = await canvas.findByRole("button", {
      name: "hamburger-menu",
    });

    await userEvent.click(mobileMenuToggle);
  },
};
