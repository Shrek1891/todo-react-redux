import Form from "../components/form/form.tsx";
import {Meta, StoryObj} from "@storybook/react";
import {Provider} from "react-redux";
import {store} from "../../store.ts";


const formStories: Meta<typeof Form> = {
    component: Form,
    title: "Form",
}

export default formStories;
type Story = StoryObj<typeof Form>;
export const Default: Story = {
    decorators:[(story) => <Provider store={store}>{story()}</Provider>],
    args: {
        edit: {
            isEdit: false,
            id: 2
        }
    }
}
