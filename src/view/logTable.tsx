import Title from "../components/title/title.tsx";
import {archiveMenu} from "../data/list.ts";
import Row from "../components/row/row.tsx";
import {useDispatch, useSelector} from "react-redux";
import {selectTodo} from "../features/todoReducerSlice.ts";
import {useEffect} from "react";
import {getLogList} from "../features/todoReducer.ts";

const LogTable = () => {
    const dispatch = useDispatch();
    const {logList, listOfTask} = useSelector(selectTodo);
    useEffect(() => {
        dispatch(getLogList())
    }, [listOfTask]);
    return (
        <>
            <Title
                menuItem={archiveMenu}
                isIcons={false}
            />
            {logList.map((item, index: number) =>
                <Row
                    key={index}
                    list={item}
                    isIcons={false}
                    currentIcon={[]}
                />)}
        </>

    )
}

export default LogTable