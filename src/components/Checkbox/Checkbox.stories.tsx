import { Meta, StoryObj } from "@storybook/react";
import { Text } from "../Text";
import { Checkbox } from "./Checkbox";
import { CheckboxProps } from "./types";

export default {
  title: "components/Checkbox",
  component: Checkbox,
  decorators: [
    (Story) => (
      <div className="flex gap-3 items-center">
        {Story()}
        <Text size="sm">Checkbox component</Text>
      </div>
    ),
  ],
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {};
