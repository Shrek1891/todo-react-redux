import Cell from "../cell/cell.tsx";
import icons from "../../data/iconsObject.tsx";
import {JSX} from "react";
import {archiveMenu, data} from "../../types/types.ts";
import {useDispatch} from "react-redux";
import {
    archiveTask,
    deleteFromArchive,
    deleteTask, getLogList,
    openFormForAdd,
    unArchive
} from "../../features/todoReducer.ts";

type Props = {
    list: data | archiveMenu,
    isIcons: boolean,
    currentIcon: JSX.Element[]
}
const Row = ({list, isIcons, currentIcon}: Props) => {
    const id = `${list.id}`
    const dispatch = useDispatch();
    const key = list.icon;


    const click = (e: React.MouseEvent<HTMLElement>) => {
        const target = e.target as HTMLElement;
        const node = target.closest('.row');
        const svg = target.closest('svg');
        if (node && svg) {
            const id = +node.id;
            if (target.closest('.archive')) {
                if (svg.classList.contains("delete") && target.closest('.archive')) {
                    dispatch(deleteFromArchive(id));
                    dispatch(getLogList());
                }
                if (svg.classList.contains("toarchive") && target.closest('.archive')) {
                    dispatch(unArchive(id));
                }
            }
            if (target.closest('svg') && !target.closest('.archive')) {
                const classOfIcon = svg.classList;
                if (classOfIcon.contains('delete')) {
                    dispatch(deleteTask(id));
                }
                if (classOfIcon.contains('toarchive')) {
                    dispatch(archiveTask(id));
                }
                if (classOfIcon.contains('edit')) {
                    dispatch(openFormForAdd({isEdit: true, id: id}));
                }
            }
        }
    }
    return (
        <div className={"flex items-center justify-between m-1 p-3 bg-[lightgray] w-11/12 " + "row"} id={id}>
            <Cell className="flex-1">{icons[key]}</Cell>
            {Object.values(list).filter((_, index) =>
                index > 1).map((item, index) =>
                <Cell
                    key={index}
                    className={"flex-1"}
                >{item}</Cell>)}
            {isIcons && <Cell
                className="flex items-center flex-row justify-between">
                {currentIcon.map((item: JSX.Element | string, index: number) =>
                    <div
                        className="m-1 hover:scale-110 hover:cursor-pointer"
                        onClick={(e) => click(e)}
                        key={index}>{item}</div>)}
            </Cell>}
        </div>
    )
}

export default Row;