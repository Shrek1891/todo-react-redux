import Cell from "../cell/cell.tsx";
import {JSX} from "react";
import useCreateTitleIcon from "../../hooks/useCreateTitleIcon.tsx";

type Props = {
    menuItem: string[],
    isIcons: boolean
}
const Title = ({menuItem, isIcons}: Props) => {
    const [nameOfCell, icon] = useCreateTitleIcon(menuItem);
    return (
        <>
            <div className="flex items-center justify-between m-1 p-3 bg-[gray] w-11/12">
                {nameOfCell.map((item: string, index: number) => <Cell key={index} className={"flex-1"}>{item}</Cell>)}
                {isIcons && <Cell className="flex items-center flex-row justify-between">
                    <Cell className="flex items-center flex-row justify-between ">
                        {icon.map((item: JSX.Element | string, index: number) => <Cell className="m-1" key={index}>{item}</Cell>)}
                    </Cell>
                </Cell>}
            </div>
        </>
    )
}
export default Title