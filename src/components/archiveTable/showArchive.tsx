import {useDispatch, useSelector} from "react-redux";
import {selectTodo} from "../../features/todoReducerSlice.ts";
import {closeArchiveTable} from "../../features/todoReducer.ts";
import Title from "../title/title.tsx";
import {menuItem} from "../../data/list.ts";
import {data} from "../../types/types.ts";
import Row from "../row/row.tsx";
import Button from "../button/button.tsx";
import {useEffect, useState} from "react";
import {classesForm} from "../../namesClasses/classesName.ts";
import {iconsForRow} from "../icons/icons.tsx";

const ShowArchive = () => {
    const dispatch = useDispatch();
    window.scrollTo(0, 0);
    const {listOfArchive} = useSelector(selectTodo);
    useEffect(() => {
    }, [listOfArchive]);
    const res = iconsForRow.filter((_, index) => index !== 0);
    const [currentIcon, setCurrentIcon] = useState(res);
    const closeArchiveTableHandler = () => {
        dispatch(closeArchiveTable());
    }
    return (
        <div className={classesForm + " archive"}>
            <Title
                menuItem={menuItem}
                isIcons={true}
            />
            {listOfArchive.map((item: data, index) =>
                <Row
                    key={index}
                    list={item}
                    currentIcon={currentIcon}
                    isIcons={true}
                />)}
            <Button
                task={closeArchiveTableHandler}
                type={"button"}
            >Close</Button>
        </div>
    )
}

export default ShowArchive