import Button from "../components/button/button.tsx";
import 'tailwindcss/tailwind.css';
import {Meta, StoryObj} from "@storybook/react";

const click = () => {
    alert('task this button - click');
}
const meta: Meta<typeof Button> = {
    component: Button,
    title: "Button",
    };
export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        type: "button",
        task: click,
        children: "Add new task",
    },
};

