import { Meta, StoryObj } from "@storybook/react";
import { Heading } from "./Heading";
import { HeadingProps } from "./types";

export default {
  title: "components/Heading",
  component: Heading,
  args: {
    children: "Lorem ipsum.",
    size: "md",
    as: "h2",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
    as: {
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      control: {
        type: "select",
      },
    },
  },
} as Meta<HeadingProps>;

export const Small: StoryObj<HeadingProps> = {
  args: {
    size: "sm",
  },
};

export const Default: StoryObj<HeadingProps> = {};

export const Large: StoryObj<HeadingProps> = {
  args: {
    size: "lg",
  },
};
