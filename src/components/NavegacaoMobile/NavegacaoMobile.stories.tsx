import type { Meta, StoryObj } from "@storybook/nextjs";

import { fn, userEvent, within } from "storybook/test";

import { NavegacaoMobile } from "./";
import clsx from "clsx";

const itemListClass = clsx(
  "bg-black/5 backdrop-blur-xl",
  "absolute top-0 h-screen Z-20",
  "w-[254px] pl-8 flex flex-col",
  "gap-12 md:hidden text-[#fff]"
);

const mobileClass =
  "bg-cover bg-center h-screen bg-[url('/assets/home/background-home-mobile.jpg')]";

const meta = {
  title: "Components/Header/NavegacaoMobile",
  component: NavegacaoMobile,
  parameters: {
    layout: "",
  },
} satisfies Meta<typeof NavegacaoMobile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Mobile: Story = {
  globals: {
    viewport: { value: "mobile1" },
  },
  args: { close: fn() },
  render: (args) => (
    <div className={mobileClass}>
      <div className={itemListClass}>
        <NavegacaoMobile {...args} />
      </div>
    </div>
  ),
};

export const MobileHover: Story = {
  globals: {
    viewport: { value: "mobile1" },
  },
  args: { close: fn() },
  render: (args) => (
    <div className={mobileClass}>
      <div className={itemListClass}>
        <NavegacaoMobile {...args} />
      </div>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const menuItem = await canvas.findByRole("link", {
      name: "00 destination",
    });

    // Não consegui renderizar sem isso
    menuItem.style.borderRight = "3px solid #fff";

    await userEvent.hover(menuItem);
  },
};
