import {JSX} from "react";
import {iconsForRow} from "../components/icons/icons.tsx";

const useCreateTitleIcon = (menuItem:string[]):[string[], JSX.Element[]] => {
    let nameOfCell: string[] = [];
    let icon: JSX.Element[] = [];

    icon = iconsForRow.map((item: JSX.Element, index: number) => {
        if (index === 0) {
            item = <svg height="1em" viewBox="0 0 448 512"></svg>
        }
        return item;
    });
    nameOfCell = [...menuItem]
    return[nameOfCell, icon]
}
export default useCreateTitleIcon