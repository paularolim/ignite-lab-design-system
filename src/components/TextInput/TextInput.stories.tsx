import { Meta, StoryObj } from "@storybook/react";
import { EnvelopeSimple } from "phosphor-react";
import { TextInput } from "./TextInput";
import { TextInputRootProps } from "./types";

export default {
  title: "components/TextInput",
  component: TextInput.Root,
  args: {
    children: <TextInput.Input placeholder="example@email.com" />,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {};

export const WithIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: [
      <TextInput.Icon>
        <EnvelopeSimple />
      </TextInput.Icon>,
      <TextInput.Input placeholder="example@email.com" />,
    ],
  },
};
