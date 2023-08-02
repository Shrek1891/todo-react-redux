import Row from "../components/row/row.tsx";
import {Meta, StoryObj} from "@storybook/react";
import {iconsForRow} from "../components/icons/icons.tsx";
import {Provider} from "react-redux";
import {store} from "../../store.ts";

const rowStories: Meta<typeof Row> = {
    component: Row,
    title: "Row",
}

export default rowStories;
type Story = StoryObj<typeof Row>;
export const Default: Story = {
    decorators:[(story) => <Provider store={store}>{story()}</Provider>],
    args: {
        list: {
            id: 2,
            icon: 'random_thought',
            name: 'The theory of evolution',
            created: '2022-01-01',
            category: 'Random thought',
            content: 'The Evolution of Humanity',
            Dates: ' ',
        },
        isIcons: true,
        currentIcon: iconsForRow,
    }
}