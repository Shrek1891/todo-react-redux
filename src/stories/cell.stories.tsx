import Cell from "../components/cell/cell.tsx";
import {Meta} from "@storybook/react";


const cellSb: Meta<typeof Cell> = {
    component: Cell,
    title: "Cell",
}
export default cellSb;

export const Default = {
    args :{
        children: "test",
    }
}



