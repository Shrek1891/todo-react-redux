import {Meta, StoryObj} from "@storybook/react";
import Title from "../components/title/title.tsx";

const titlesRowSb:Meta<typeof Title> ={
    component:Title,
    title:" Row of titles",
}

export default titlesRowSb;
type Story = StoryObj<typeof Title>;
export const TitleWithIcons:Story = {
    args: {
        menuItem: [
            "Task 1",
            "Task 2",
            "Task 3",
            "Task 4",
            "Task 5",
            "Task 6",
        ],
        isIcons: true,
    },
}

export const TitleWithoutIcons:Story = {
    args: {
        menuItem: [
            "Task 1",
            "Task 2",
            "Task 3",
            "Task 4",
            "Task 5",
            "Task 6",
        ],
        isIcons: false,
    },
}