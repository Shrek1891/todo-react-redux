import Cell from "../cell/cell.tsx";
import icons from "../../data/iconsObject.tsx";
import {JSX} from "react";
import {iconsForRow} from "../icons/icons.tsx";
import {archiveMenu, data} from "../../types/types.ts";
import {useDispatch} from "react-redux";
import {
    archiveTask,
    deleteFromArchive,
    deleteTask,
    openFormForAdd,
    unArchive
} from "../../features/todoReducer.ts";


type Props = {
    list: data | archiveMenu,
    isIcons: boolean
}
const Row = ({list, isIcons}: Props) => {
    const id = `${list.id}`
    const dispatch = useDispatch();
    const key=list.icon;
    const click = (e:React.MouseEvent<HTMLElement>) => {
        const target = e.target as HTMLElement;
        const node = target.closest('.row');
        const svg = target.closest('svg');

        if (node && svg) {
            const id = +node.id;
            if (target.closest('.archive')) {
                if (svg.classList.contains("delete") && target.closest('.archive')) {
                    dispatch(deleteFromArchive(id));
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
        <div className="row" id={id}>
            <Cell>{icons[key]}</Cell>
            {Object.values(list).filter((_, index) => index > 1).map((item, index) => <Cell
                key={index}>{item}</Cell>)}
            {isIcons && <div className="icons">
                {iconsForRow.map((item: JSX.Element | string, index: number) => <div onClick={(e) => click(e)}
                                                                                     key={index}>{item}</div>)}
            </div>}
        </div>
    )
}

export default Row;