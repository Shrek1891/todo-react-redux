import Title from "../title/title.tsx";
import { menuItem} from "../../data/list.ts";
import Row from "../row/row.tsx";
import {data} from "../../types/types.ts";
import Button from "../button/button.tsx";
import {useDispatch, useSelector} from "react-redux";
import {openArchiveTable, openFormForAdd} from "../../features/todoReducer.ts";
import { selectTodo} from "../../features/todoReducerSlice.ts";

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
                className={"main"}
                isIcons={true}
            />
        {listOfTask.map((item: data, index) => <Row key={index} list={item} isIcons={true}/>)}
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