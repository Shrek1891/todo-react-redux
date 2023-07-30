import {useDispatch, useSelector} from "react-redux";
import {selectTodo} from "../../features/todoReducerSlice.ts";
import {closeArchiveTable} from "../../features/todoReducer.ts";
import Title from "../title/title.tsx";
import {menuItem} from "../../data/list.ts";
import {data} from "../../types/types.ts";
import Row from "../row/row.tsx";
import Button from "../button/button.tsx";
import {useEffect} from "react";

const ShowArchive = () => {
    const dispatch = useDispatch();
    window.scrollTo(0, 0);
    const {listOfArchive} = useSelector(selectTodo);
    useEffect(() => {
    }, [listOfArchive])
    const closeArchiveTableHandler = () => {
        dispatch(closeArchiveTable());
    }
    return (
        <div className="archive">
            <Title
                menuItem={menuItem}
                className={"main"}
                isIcons={true}
            />
            {listOfArchive.map((item: data, index) => <Row key={index} list={item} isIcons={true}/>)}
            <Button
                task={closeArchiveTableHandler}
                type={"button"}
            >Close</Button>
        </div>
    )

}

export default ShowArchive