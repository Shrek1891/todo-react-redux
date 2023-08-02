import Title from "../components/title/title.tsx";
import {menuItem} from "../data/list.ts";
import Row from "../components/row/row.tsx";
import {data} from "../types/types.ts";
import Button from "../components/button/button.tsx";
import {useDispatch, useSelector} from "react-redux";
import {openArchiveTable, openFormForAdd} from "../features/todoReducer.ts";
import {selectTodo} from "../features/todoReducerSlice.ts";
import {iconsForRow} from "../components/icons/icons.tsx";

const TableMain = () => {
    const dispatch = useDispatch();
    const {listOfTask} = useSelector(selectTodo);
    const openFormHandler = () => {
        dispatch(openFormForAdd(false));
    }
    const showArchive = () => {
        dispatch(openArchiveTable())
    }
    return (
        <>
            <Title
                menuItem={menuItem}
                isIcons={true}
            />
            {listOfTask.map((item: data, index) =>
                <Row
                    key={index}
                    list={item}
                    isIcons={true}
                    currentIcon={iconsForRow}
                />)}
            <div>
                <Button
                    task={openFormHandler}
                    type={"button"}
                >Add new task</Button>
                <Button
                    type={"button"}
                    task={showArchive}
                >Show archive</Button>
            </div>
        </>
    )

}

export default TableMain