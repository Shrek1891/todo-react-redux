import TableMain from "./view/tableMain.tsx";
import LogTable from "./view/logTable.tsx";
import Form from "./components/form/form.tsx";
import {useDispatch, useSelector} from "react-redux";
import {selectTodo} from "./features/todoReducerSlice.ts";
import ShowArchive from "./view/showArchive.tsx";
import {useEffect} from "react";
import axios from "axios";
import { setArchiveList, setListOfTask} from "./features/todoReducer.ts";

function App() {
    const {isOpenFormFoAdd, isShowArchive, edit} = useSelector(selectTodo);
    const dispatch = useDispatch();
    useEffect(() => {
        axios.get("./content/content.json").then((res) => {
            dispatch(setListOfTask(res.data));
            dispatch(setArchiveList(res.data));

        });

    }, []);
    return (
        <div className="
            flex
            flex-col
            relative
            items-center
            justify-center
            ">
            <TableMain/>
            <LogTable/>
            {isOpenFormFoAdd && <Form edit={edit}/>}
            {isShowArchive && <ShowArchive/>}
        </div>
    )
}
export default App
