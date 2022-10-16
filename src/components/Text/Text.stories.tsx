import { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";
import { TextProps } from "./types";

export default {
  title: "components/Text",
  component: Text,
  args: {
    children: "Lorem ipsum.",
    size: "md",
    as: "span",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
    as: {
      options: ["span", "p", "a"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<TextProps>;

export const Small: StoryObj<TextProps> = {
  args: {
    size: "sm",
  },
};

export const Default: StoryObj<TextProps> = {};

export const Large: StoryObj<TextProps> = {
  args: {
    size: "lg",
  },
};
