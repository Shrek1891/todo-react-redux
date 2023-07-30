import Cell from "../cell/cell.tsx";
import {iconsForRow} from "../icons/icons.tsx";
import {JSX} from "react";

type Props = {
    menuItem: string[],
    className: string,
    isIcons: boolean
}
const Title = ({menuItem, className, isIcons}: Props) => {
    let nameOfCell: string[] = [];
    let icon: JSX.Element[] = [];
    if (className === 'main') {
        icon = iconsForRow.map((item: JSX.Element, index: number) => {
            if (index === 0) {
                item = <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"></svg>
            }
            return item;
        });
        nameOfCell = [...menuItem]
    }
    if (className === 'row') {
        icon = [...iconsForRow];
    }
    return (
        <>
            <div className={className}>
                {nameOfCell.map((item: string, index: number) => <Cell key={index}>{item}</Cell>)}
                {isIcons && <Cell>
                    <div className="icons">
                        {icon.map((item: JSX.Element | string, index: number) => <Cell key={index}>{item}</Cell>)}
                    </div>
                </Cell>}
            </div>
        </>
    )
}
export default Title